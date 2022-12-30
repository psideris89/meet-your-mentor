import { pageTitleStyle } from "~/styles";
import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Admin page",
    description: "Admin page of meet your mentor",
  };
};

const sectionLinks = [
  { name: "Mentors", to: "/admin/mentors" },
  { name: "Mentees", to: "/admin/mentees" },
  { name: "Courses", to: "/admin/courses" }
]

export default function Admin() {
  return (
    <div style={pageTitleStyle}>
      <h1>Admin page</h1>
      <ul style={{ listStyle: "none" }}>
        {sectionLinks.map(o =>
          <li key={o.name}>
            <Link to={o.to} style={{ color: "inherit" }}>
              {o.name}
            </Link>
          </li>)}
      </ul>
    </div>
  );
}