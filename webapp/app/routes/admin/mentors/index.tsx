import { adminButtonStyle, adminInputStyle, pageTitleStyle } from "~/styles";
import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import { createMentor } from "~/server/course.server";

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
    <div style={pageTitleStyle}>
      <h1>Mentor admin page</h1>
      <section>
        <Form method="post">
          <label htmlFor="name">
            <input type="text" name="name" placeholder="name" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="email" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="description">
            <input type="text" name="description" placeholder="description" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="specialty">
            <input type="text" name="specialty" placeholder="specialty" style={adminInputStyle}/>
          </label>
          <br/>
          <button type="submit" style={adminButtonStyle}>Register Mentor</button>
        </Form>
      </section>
    </div>
  );
}