import type { LeadSubmission } from "@/_config/forms"
import { appendLeadSubmission } from "@/lib/google-sheets"

function isValidSubmission(data: unknown): data is LeadSubmission {
  if (!data || typeof data !== "object") return false

  const candidate = data as Partial<LeadSubmission>

  return (
    (candidate.formType === "contact" || candidate.formType === "apply") &&
    typeof candidate.email === "string" &&
    typeof candidate.source === "string"
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!isValidSubmission(body)) {
      return Response.json({ error: "Invalid form payload" }, { status: 400 })
    }

    if (!body.email.includes("@")) {
      return Response.json({ error: "Please enter a valid email" }, { status: 400 })
    }

    await appendLeadSubmission(body)

    return Response.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error"
    return Response.json({ error: message }, { status: 500 })
  }
}
