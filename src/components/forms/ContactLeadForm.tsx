"use client"

import type { FormEvent } from "react"
import { useState } from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { FormField } from "@/components/home/FormField"

const initialState = {
  name: "",
  email: "",
  message: "",
}

export function ContactLeadForm() {
  const [values, setValues] = useState(initialState)
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" })
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
          formType: "contact",
          source: "home-contact",
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit form")
      }

      setValues(initialState)
      setStatus({ type: "success", message: "Thanks - your message was submitted." })
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
    <form className="space-y-[18px]" onSubmit={handleSubmit}>
      <FormField label="Name">
        <Input
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          placeholder="Enter Name"
          className="h-[44px] rounded-[6px] border-[#ececec] bg-[#f5f5f5] px-3 text-[14px] text-[#212225] placeholder:text-[#a1a1a1]"
        />
      </FormField>

      <FormField label="Email*">
        <Input
          type="email"
          required
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          placeholder="jane@example.com"
          className="h-[44px] rounded-[6px] border-[#ececec] bg-[#f5f5f5] px-3 text-[14px] text-[#212225] placeholder:text-[#a1a1a1]"
        />
      </FormField>

      <FormField label="Message*">
        <Textarea
          required
          value={values.message}
          onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))}
          placeholder="Enter message"
          className="min-h-[62px] rounded-[6px] border-[#ececec] bg-[#f5f5f5] px-3 py-3 text-[14px] text-[#212225] placeholder:text-[#a1a1a1]"
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-[46px] w-full rounded-[6px] bg-[#f5744c] text-[14px] font-gilroy-semibold text-white transition hover:bg-[#f8845f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {status.message ? (
        <p className={status.type === "error" ? "text-xs text-red-600" : "text-xs text-emerald-700"}>{status.message}</p>
      ) : null}
    </form>
  )
}
