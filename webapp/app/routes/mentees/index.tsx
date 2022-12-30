import { json } from "@remix-run/node";
import { getMentees } from "~/server";
import { useLoaderData } from "@remix-run/react";
import { CreateResourcePrompt } from "~/components/CreateResourcePrompt";

export const loader = async () => {
  return json({ mentees: await getMentees() })
}

export default function Mentees() {
  const { mentees } = useLoaderData<typeof loader>();

  return (
    <div className="main-title">
      <h1>Our Mentees</h1>
      {mentees?.length === 0 ?
        <CreateResourcePrompt
          to="/admin/mentees"
          message="It seems that there are no mentees in the system, try registering one!"
          buttonMessage="Register mentee"/>
        : <ul style={{textAlign: "left"}}>
          {mentees.map(c =>
            <li key={c.id}>
              <>
                <p><i>Name</i>: <b>{c.name}</b></p>
                <p><i>Email</i>: <b>{c.email}</b></p>
              </>
            </li>)}
        </ul>}
    </div>
  );
}