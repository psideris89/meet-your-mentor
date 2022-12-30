import { adminButtonStyle, adminInputStyle, pageTitleStyle } from "~/styles";
import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import { createMentee } from "~/server/course.server";

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
    <div style={pageTitleStyle}>
      <h1>Mentee admin page</h1>
      <section>
        <Form method="post" >
          <label htmlFor="name">
            <input type="text" name="name" placeholder="name" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="email" style={adminInputStyle}/>
          </label>
          <br/>
          <button type="submit" style={adminButtonStyle}>Register Mentee</button>
        </Form>
      </section>
    </div>
  );
}