import { Link } from "@remix-run/react";
import { pageTitleStyle } from "~/styles";

const sectionLinks = [
  { name: "Check out our mentors", to: "/mentors" },
  { name: "Check out our mentees", to: "/mentees" },
  { name: "Our courses", to: "/courses" }
]

export default function Index() {
  return (
    <div style={pageTitleStyle}>
      <h1>Welcome to Meet Your Mentor</h1>
      <p>This is the place to connect with people who are interested either in mentoring or being mentored</p>
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
