import type { APIRoute } from "astro";

export const post: APIRoute = ({ request, redirect }) => {
  // return {
  //   body: JSON.stringify({
  //     message: "This was a POST!",
  //   }),
  // };

  // validate form data

  // send email verification template
  fetch("https://www.courier.com/", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer pk_prod_TTHGDT8BHV4BJDKK5ZY9GYGDBBPE",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      verificationLink: "http://localhost:3000/email-verification-handler",
    }), // body data type must match "Content-Type" header
  });

  return {
    body: JSON.stringify({
      message: "This was a POST!",
    }),
  };
};
