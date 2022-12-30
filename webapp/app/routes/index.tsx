import { Link } from "@remix-run/react";
import { pageTitleStyle } from "~/styles";

const sectionLinks = [
  { name: "I am a mentor", to: "/mentors" },
  { name: "I want to find a mentor", to: "/mentees" },
  { name: "Our courses", to: "/courses" }
]

export default function Index() {
  return (
    <div style={pageTitleStyle}>
      <h1>Welcome to Meet Your Mentor</h1>
      <p>This is the place to connect with people who are interested either in mentoring or being mentored</p>
      <ul style={{ listStyle: "none" }}>
        {sectionLinks.map(o =>
          <li>
            <Link to={o.to} style={{ color: "inherit" }}>
              {o.name}
            </Link>
          </li>)}
      </ul>
    </div>
  );
}
