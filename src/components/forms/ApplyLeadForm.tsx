"use client"

import type { FormEvent } from "react"
import { useRef, useState } from "react"
import { CloudUpload } from "lucide-react"

import { Input } from "@/components/ui/input"

type StatusState = { type: "idle" | "success" | "error"; message?: string }

export function ApplyLeadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState("")
  const [fileName, setFileName] = useState("")
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
          email,
          fileName,
          source: "apply-page",
        }),
      })

      const data = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to submit form")
      }

      setEmail("")
      setFileName("")
      if (fileInputRef.current) fileInputRef.current.value = ""
      setStatus({ type: "success", message: "Application details were saved." })
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
    <form className="h-[290px]" onSubmit={handleSubmit}>
      <label className="mt-6 block cursor-pointer rounded-[8px] border border-dashed border-[#afafaf] bg-[#333436] px-6 py-[29px] text-center text-white">
        <CloudUpload className="mx-auto size-[33px] text-white" strokeWidth={1.8} />
        <div className="mt-4 font-sans text-[14px] font-bold text-white">Upload Summary</div>
        <div className="text-[12px] text-[#808080]">{fileName || "Maximum size: 10MB"}</div>
        <input
          ref={fileInputRef}
          type="file"
          className="sr-only"
          onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")}
        />
      </label>

      <Input
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
        className="mt-4 h-[44px] rounded-[8px] border-[#494949] bg-[#333436] px-[19px] text-[12px] text-white placeholder:text-[#757575]"
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex h-[52px] w-[117px] items-center justify-center rounded-[8px] bg-[#f5744c] font-sans text-[12px] font-bold text-white transition hover:bg-[#f8845f] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Saving..." : "Submit"}
      </button>

      {status.message ? (
        <p className={status.type === "error" ? "mt-3 text-xs text-red-500" : "mt-3 text-xs text-emerald-400"}>{status.message}</p>
      ) : null}
    </form>
  )
}
