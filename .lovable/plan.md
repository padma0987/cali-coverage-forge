# Fix the existing Web3Forms submission

## Scope
- Keep the current quote/contact form’s layout, styling, validation, and success presentation unchanged.
- Submit the existing five fields as `first_name`, `last_name`, `email`, `phone`, and `message` directly to Web3Forms with multipart `FormData`.
- Include the configured access key, requested subject, sender name, visitor reply-to email, submission timestamp, and existing botcheck field.
- Preserve entered values on Web3Forms or network errors, disable duplicate submissions, and reset only after `success === true`.

## Verification
- Confirm the page renders and validation still works.
- Intercept a real browser submission to verify the POST URL and every submitted FormData field without exposing the access key.
- Confirm error responses retain values and never show a false success state.

## Technical details
- Continue reading the project’s configured `WEB3FORMS_ACCESS_KEY` through the existing server function at submit time; no fake key or alternative email service will be added.
- Use the exact network-error message requested and surface Web3Forms’ returned error when available.
