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
  return <div style={{ backgroundColor: "lightcoral", height: "80px" }}>
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <img src="/logo.svg" alt="My logo" style={{ width: "40px", margin: "0 20px" }}/>
        <p style={{ fontSize: "32px", margin: "20px 0" }}>Meet your mentor</p>
      </div>
      {/*TODO Remove border*/}
      <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-between", border: "1px solid blue" }}>
        {navLinks.map(o =>
          <li key={o.name}>
            <Link to={o.to}>{o.name}</Link>
          </li>)}
      </ul>
    </nav>
  </div>
}

export { Navbar }