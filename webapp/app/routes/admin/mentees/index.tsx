import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import { createMentee } from "~/server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  await createMentee({
    name: body.get("name"),
    email: body.get("email")
  });
  return redirect('/mentees');
}

export default function MenteeAdmin() {
  return (
    <div className="main-title">
      <h1>Mentee admin page</h1>
      <section>
        <Form method="post" >
          <label htmlFor="name">
            <input type="text" name="name" placeholder="name" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="email" className="admin-input"/>
          </label>
          <br/>
          <button type="submit" className="primary-button">Register Mentee</button>
        </Form>
      </section>
    </div>
  );
}