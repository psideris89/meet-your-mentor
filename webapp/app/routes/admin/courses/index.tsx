import { adminButtonStyle, adminInputStyle, pageTitleStyle } from "~/styles";
import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import { createCourse } from "~/server/course.server";

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  await createCourse({
    title: body.get("title"),
    displayTitle: body.get("display-title"),
    type: body.get("type"),
    description: body.get("description"),
  });
  return redirect('/courses');
}

export default function CourseAdmin() {
  return (
    <div style={pageTitleStyle}>
      <h1>Course admin page</h1>
      <section>
        <Form method="post" >
          <label htmlFor="title">
            <input type="text" name="title" placeholder="title" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="display-title">
            <input type="text" name="display-title" placeholder="display-title" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="type">
            <input type="text" name="type" placeholder="type" style={adminInputStyle}/>
          </label>
          <br/>
          <label htmlFor="description">
            <input type="text" name="description" placeholder="description" style={adminInputStyle}/>
          </label>
          <br/>
          <button type="submit" style={adminButtonStyle}>Create course</button>
        </Form>
      </section>
    </div>
  );
}