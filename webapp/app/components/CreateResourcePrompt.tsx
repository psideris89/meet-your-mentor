import { adminButtonStyle } from "~/styles";
import { useNavigate } from "@remix-run/react";

function CreateResourcePrompt({ to, message, buttonMessage }: {
  to: string
  message: string
  buttonMessage: string
}) {
  const navigate = useNavigate();

  return <>
    <p>{message}</p>
    <button onClick={() => navigate(to)} style={adminButtonStyle}>{buttonMessage}</button>
  </>
}

export { CreateResourcePrompt }