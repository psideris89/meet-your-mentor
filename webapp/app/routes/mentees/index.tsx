import { pageTitleStyle } from "~/styles";
import { json } from "@remix-run/node";
import { getMentees } from "~/server/course.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({ mentees: await getMentees() })
}

export default function Mentees() {
  const { mentees } = useLoaderData<typeof loader>();

  return (
    <div style={pageTitleStyle}>
      <h1>Our Mentees</h1>
      <ul style={{textAlign: "left"}}>
        {mentees.map(c =>
          <li key={c.id}>
            <>
              <p><i>Name</i>: <b>{c.name}</b></p>
              <p><i>Email</i>: <b>{c.email}</b></p>
            </>
          </li>)}
      </ul>
    </div>
  );
}