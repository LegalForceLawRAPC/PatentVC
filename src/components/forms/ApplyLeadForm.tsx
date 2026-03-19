"use client"

import type { FormEvent } from "react"
import { useState } from "react"

import { FormField } from "@/components/home/FormField"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type StatusState = { type: "idle" | "success" | "error"; message?: string }

const initialValues = {
  name: "",
  email: "",
  message: "",
}

export function ApplyLeadForm() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState<StatusState>({ type: "idle" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "idle" })

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "apply",
          source: "apply-page",
          ...values,
        }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit form")
      }

      setValues(initialValues)
      setStatus({ type: "success", message: "Application details were submitted." })
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to submit form",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <FormField label="Name*">
        <Input
          required
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          placeholder="Enter Name"
          className="h-[44px] rounded-[8px] border-[#494949] bg-[#333436] px-[19px] text-[12px] text-white placeholder:text-[#757575]"
        />
      </FormField>

      <FormField label="Email*">
        <Input
          type="email"
          required
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          placeholder="Enter Email"
          className="h-[44px] rounded-[8px] border-[#494949] bg-[#333436] px-[19px] text-[12px] text-white placeholder:text-[#757575]"
        />
      </FormField>

      <FormField label="Message*">
        <Textarea
          required
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          placeholder="Enter message"
          className="min-h-[118px] rounded-[8px] border-[#494949] bg-[#333436] px-[19px] py-[14px] text-[12px] text-white placeholder:text-[#757575]"
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-[52px] w-[117px] items-center justify-center rounded-[8px] bg-[#f5744c] font-sans text-[12px] font-bold text-white transition hover:bg-[#f8845f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {status.message ? (
        <p className={status.type === "error" ? "text-xs text-red-500" : "text-xs text-emerald-400"}>{status.message}</p>
      ) : null}
    </form>
  )
}
