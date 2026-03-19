import { google } from "googleapis"

import { formSheets, type LeadFormType, type LeadSubmission } from "@/_config/forms"

const sheetsScope = ["https://www.googleapis.com/auth/spreadsheets"]

function getGoogleSheetsEnv() {
  const spreadsheetId = process.env[formSheets.spreadsheetIdEnv]
  const clientEmail = process.env[formSheets.clientEmailEnv]
  const privateKey = process.env[formSheets.privateKeyEnv]?.replace(/\\n/g, "\n")

  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error(
      `Missing Google Sheets configuration. Set ${formSheets.spreadsheetIdEnv}, ${formSheets.clientEmailEnv}, and ${formSheets.privateKeyEnv}.`
    )
  }

  return { spreadsheetId, clientEmail, privateKey }
}

async function getSheetsClient() {
  const { clientEmail, privateKey } = getGoogleSheetsEnv()

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: sheetsScope,
  })

  return google.sheets({ version: "v4", auth })
}

function getSheetTitle(formType: LeadFormType) {
  return formType === "contact" ? formSheets.contactSheetTitle : formSheets.applySheetTitle
}

async function ensureSheetExists(formType: LeadFormType) {
  const sheets = await getSheetsClient()
  const { spreadsheetId } = getGoogleSheetsEnv()
  const targetTitle = getSheetTitle(formType)

  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId })
  const existing = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === targetTitle)

  if (!existing) {
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [{ addSheet: { properties: { title: targetTitle } } }],
      },
    })

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${targetTitle}!A1`,
      valueInputOption: "RAW",
      requestBody: {
        values: [["Timestamp", "Form Type", "Name", "Email", "Message", "File Name", "Source"]],
      },
    })
  }

  return { sheets, spreadsheetId, targetTitle }
}

export async function appendLeadSubmission(submission: LeadSubmission) {
  const { sheets, spreadsheetId, targetTitle } = await ensureSheetExists(submission.formType)

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${targetTitle}!A:G`,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          submission.formType,
          submission.name ?? "",
          submission.email,
          submission.message ?? "",
          submission.fileName ?? "",
          submission.source,
        ],
      ],
    },
  })
}
