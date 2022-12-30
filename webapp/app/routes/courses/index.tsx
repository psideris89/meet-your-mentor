import { json } from "@remix-run/node";
import { getCourses } from "~/server/course.server";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { adminButtonStyle, pageTitleStyle } from "~/styles";
import { NavigateFunction } from "react-router/dist/lib/hooks";
import { CreateResourcePrompt } from "~/components/CreateResourcePrompt";

export const loader = async () => {
  return json({ courses: await getCourses() })
}

export default function Courses() {
  const { courses } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <div style={pageTitleStyle}>
      <h1>Our Courses</h1>
      {courses?.length === 0 ?
        <CreateResourcePrompt
          to="/admin/courses"
          message="It seems that there are no courses in the system, try creating one!"
          buttonMessage="Create course"/>
        : <ul style={{ textAlign: "left" }}>
          {courses.map(c =>
            <li key={c.id}>
              <>
                <p><i>Title</i>: <b>{c.displayTitle}</b></p>
                <p><i>Type</i>: <b>{c.type}</b></p>
                <p><i>Info</i>: <b>{c.description}</b></p>
              </>
            </li>)}
        </ul>}
    </div>
  );
}
