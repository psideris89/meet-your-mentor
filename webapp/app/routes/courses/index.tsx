import { json } from "@remix-run/node";
import { getCourses } from "~/server/course.server";
import { useLoaderData } from "@remix-run/react";
import { pageTitleStyle } from "~/styles";

export const loader = async () => {
  return json({ courses: await getCourses() })
}

export default function Courses() {
  const { courses } = useLoaderData<typeof loader>();

  return (
    <div style={pageTitleStyle}>
      <h1>Our Courses</h1>
      <ul>
        {courses.map(c =>
          <li key={c.id}>
            <>
              <p>{c.displayTitle}</p>
              {c.description}
            </>
          </li>)}
      </ul>
    </div>
  );
}
