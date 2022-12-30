import { ActionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/router";
import { createCourse } from "~/server";

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
    <div className="main-title">
      <h1>Course admin page</h1>
      <section>
        <Form method="post" >
          <label htmlFor="title">
            <input type="text" name="title" placeholder="title" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="display-title">
            <input type="text" name="display-title" placeholder="display-title" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="type">
            <input type="text" name="type" placeholder="type" className="admin-input"/>
          </label>
          <br/>
          <label htmlFor="description">
            <input type="text" name="description" placeholder="description" className="admin-input"/>
          </label>
          <br/>
          <button type="submit" className="primary-button">Create course</button>
        </Form>
      </section>
    </div>
  );
}