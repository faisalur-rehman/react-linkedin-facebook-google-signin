import React, { useState } from "react";

import { useLinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
// import { linkedin } from "react-linkedin-login-oauth2";

export default function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77tp2tqpqq33sm",
    redirectUri: `https://3e13-2400-adc5-12a-100-f485-fae1-d09a-b061.ngrok.io/`,
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <img
      onClick={linkedInLogin}
      //   src={linkedin}
      alt="Sign in with Linked In"
      style={{ maxWidth: "180px", cursor: "pointer" }}
    />
  );
}
