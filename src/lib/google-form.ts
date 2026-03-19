import { googleFormConfig, type LeadSubmission } from "@/_config/forms"

export async function submitLeadToGoogleForm(submission: LeadSubmission) {
  const body = new URLSearchParams({
    [googleFormConfig.fields.name]: submission.name,
    [googleFormConfig.fields.email]: submission.email,
    [googleFormConfig.fields.message]: submission.message,
  })

  const response = await fetch(googleFormConfig.actionUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: body.toString(),
    redirect: "follow",
  })

  if (!response.ok) {
    throw new Error("Unable to submit Google Form")
  }
}
