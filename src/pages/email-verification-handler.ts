import type { APIRoute } from "astro";

export const post: APIRoute = ({ request, redirect }) => {
  // return {
  //   body: JSON.stringify({
  //     message: "This was a POST!",
  //   }),
  // };

  // validate form data

  // email has now been verified, so now we add the email to the list

  // create recipient profile

  // subscribe recipient profile to list

  return redirect("/", 307);
};
