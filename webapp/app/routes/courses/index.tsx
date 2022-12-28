import {json} from "@remix-run/node";
import {getCourses} from "~/server/course.server";
import {useLoaderData} from "@remix-run/react";

export const loader = async () => {
  return json({courses: await getCourses()})
}

export default function Courses() {
  const {courses} = useLoaderData<typeof loader>();
  // const fetcher = useFetcher<typeof loader>();
  // const [data, setData] = useState<Course | null>(null);

  // const handleClick = async (id: number) => {
  //   try {
  //     const courseFetcher = fetcher.submit({  method: "get" , action: `/courses/${id}`});
  //     // setData(courseFetcher)
  //     console.log(courseFetcher)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
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
