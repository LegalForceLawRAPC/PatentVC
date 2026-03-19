export const formSheets = {
  spreadsheetIdEnv: "GOOGLE_SHEETS_SPREADSHEET_ID",
  clientEmailEnv: "GOOGLE_SHEETS_CLIENT_EMAIL",
  privateKeyEnv: "GOOGLE_SHEETS_PRIVATE_KEY",
  contactSheetTitle: "Contact Leads",
  applySheetTitle: "Apply Leads",
} as const

export type LeadFormType = "contact" | "apply"

export type LeadSubmission = {
  formType: LeadFormType
  name?: string
  email: string
  message?: string
  fileName?: string
  source: string
}
