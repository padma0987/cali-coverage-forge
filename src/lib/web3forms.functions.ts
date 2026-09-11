import { createServerFn } from "@tanstack/react-start";

export const getWeb3FormsAccessKey = createServerFn({ method: "GET" }).handler(() => {
  const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];

  if (!accessKey) {
    throw new Error("The contact form is not configured yet.");
  }

  return accessKey;
});