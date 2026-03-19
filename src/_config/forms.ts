export type LeadFormType = "contact" | "apply"

export type LeadSubmission = {
  formType: LeadFormType
  name: string
  email: string
  message: string
  source: string
}

export const googleFormConfig = {
  actionUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdc00SlD2HR4fnlbr-jk9EhMXP3sJ86M8gnJIxb1jidTXGJjQ/formResponse",
  fields: {
    name: "entry.1235828277",
    email: "entry.825220065",
    message: "entry.1318583536",
  },
} as const
