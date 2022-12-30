import { Link } from "@remix-run/react";

type NavLink = {
  name: string;
  to: string;
}

const navLinks: NavLink[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Admin", to: "/admin" }
]

function Navbar() {
  return <div style={{ backgroundColor: "#c8c8ff", height: "80px" }}>
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", flex: "2 1 auto" }}>
        <img src="/logo.svg" alt="My logo" style={{ width: "40px", margin: "0 30px" }}/>
        <p style={{ fontSize: "32px", margin: "20px 0" }}>Meet your mentor</p>
      </div>
      <ul style={{ display: "flex", flex: "0.3 1 auto", listStyle: "none", justifyContent: "space-between", margin: "8px 40px 0 0" }}>
        {navLinks.map(o =>
          <li key={o.name}>
            <Link style={{textDecoration: "none", color: "inherit"}} to={o.to}>
              <p style={{fontSize: "20px"}}>{o.name}</p>
            </Link>
          </li>)}
      </ul>
    </nav>
  </div>
}

export { Navbar }