import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        This page is opensource on {""}
        <a href="https://github.com/EmmaH88/dictionary">GitHub,</a> {""} hosted
        on {""}
        <a href="https://dictionary-react-app-eh.netlify.app">Netlify,</a> and
        coded by Emma H 🤩
      </small>
    </div>
  );
}
