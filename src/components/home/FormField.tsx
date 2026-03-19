import type { ReactNode } from "react"

type FormFieldProps = {
  label: string
  children: ReactNode
}

export function FormField({ label, children }: FormFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] text-[#212225]">{label}</span>
      {children}
    </label>
  )
}
