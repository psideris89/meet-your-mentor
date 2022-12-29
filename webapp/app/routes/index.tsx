import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Meet Your Mentor</h1>
      <p>This is the place to connect with people who are interested either in mentoring or being mentored</p>
      <ul>
        <li>
          <Link to="/mentors">
            I am a mentor!
          </Link>
        </li>
        <li>
          <Link to="/mentees">
            I want to find a mentor!
          </Link>
        </li>
        <li>
          <Link to="/courses">
            Our courses
          </Link>
        </li>
      </ul>
    </div>
  );
}
