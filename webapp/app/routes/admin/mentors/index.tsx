import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import { createMentor } from "~/server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  await createMentor({
    name: body.get("name"),
    email: body.get("email"),
    description: body.get("description"),
    specialty: body.get("specialty")
  });
  return redirect('/mentors');
}

export default function MentorAdmin() {
  return (
    <div className="main-title">
      <h1>Mentor admin page</h1>
      <section>
        <Form method="post">
          <label htmlFor="name">
            <input type="text" name="name" placeholder="name" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="email" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="description">
            <input type="text" name="description" placeholder="description" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="specialty">
            <input type="text" name="specialty" placeholder="specialty" className="admin-input"/>
          </label>
          <br/>
          <button type="submit" className="primary-button">Register Mentor</button>
        </Form>
      </section>
    </div>
  );
}