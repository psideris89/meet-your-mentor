import { json } from "@remix-run/node";
import { getMentors } from "~/server";
import { useLoaderData } from "@remix-run/react";
import { CreateResourcePrompt } from "~/components/CreateResourcePrompt";

export const loader = async () => {
  return json({ mentors: await getMentors() })
}

export default function Mentors() {
  const { mentors } = useLoaderData<typeof loader>();

  return (
    <div className="main-title">
      <h1>Our Mentors</h1>
      {mentors?.length === 0 ?
        <CreateResourcePrompt
          to="/admin/mentors"
          message="It seems that there are no mentors in the system, try registering one!"
          buttonMessage="Register mentor"/>
        : <ul style={{ textAlign: "left" }}>
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
      }
    </div>
  );
}