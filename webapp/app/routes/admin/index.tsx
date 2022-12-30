import { pageTitleStyle } from "~/../../../styles";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: "Admin page",
    description:
      "Admin page for Mym",
  };
};

export default function Index() {
  return (
    <div style={pageTitleStyle}>
      <h1>Admin page</h1>
      <section>
        {/*<*/}
      </section>
    </div>
  );
}