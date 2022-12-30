import { CSSProperties } from "react";

const primaryColour = "#c8c8ff"

const pageTitleStyle: CSSProperties | undefined = {
  fontFamily: "system-ui, sans-serif",
  lineHeight: "1.4",
  textAlign: "center"
}

const bodyStyle: CSSProperties | undefined = { margin: 0, padding: 0 }

const adminInputStyle: CSSProperties | undefined = { padding: "10px 20px", borderRadius: "0.25rem", border: "0.2px solid red", marginBottom: "10px" }

const adminButtonStyle: CSSProperties | undefined = { ...adminInputStyle, border: "none", backgroundColor: primaryColour }

export { pageTitleStyle, bodyStyle, primaryColour , adminButtonStyle, adminInputStyle}