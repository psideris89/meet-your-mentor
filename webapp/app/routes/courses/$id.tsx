import { json, LoaderArgs } from "@remix-run/node";
import { getCourse } from "~/server/course.server";

export async function loader({ params }: LoaderArgs) {
  if (!params?.id) {
    return json({ course: {} })
  }
  return json({ course: await getCourse(parseInt(params.id)) })
}
