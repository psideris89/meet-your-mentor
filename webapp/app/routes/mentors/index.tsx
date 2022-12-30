import { pageTitleStyle } from "~/styles";
import { json } from "@remix-run/node";
import { getMentors } from "~/server/course.server";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({ mentors: await getMentors() })
}

export default function Mentors() {
  const { mentors } = useLoaderData<typeof loader>();

  return (
    <div style={pageTitleStyle}>
      <h1>Our Mentors</h1>
      <ul style={{textAlign: "left"}}>
        {mentors.map(c =>
          <li key={c.id}>
            <>
              <p><i>Name</i>: <b>{c.name}</b></p>
              <p><i>Email</i>: <b>{c.email}</b></p>
              <p><i>Specialty</i>: <b>{c.specialty}</b></p>
              <p><i>Info</i>: <b>{c.description}</b></p>
            </>
          </li>)}
      </ul>
    </div>
  );
}