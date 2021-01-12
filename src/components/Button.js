import React from "react";
import { MjmlButton } from "mjml-react";

export default function Button({ href, children }) {
  return (
    <MjmlButton padding="20px" backgroundColor="#346DB7" href={href}>
      {children}
    </MjmlButton>
  );
}
