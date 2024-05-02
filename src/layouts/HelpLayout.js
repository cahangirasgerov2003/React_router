import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="helpLayout">
      <h2>Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic
        delectus officia atque deleniti, qui error et nulla ipsam. Minus natus
        reprehenderit commodi unde exercitationem praesentium quaerat facilis
        atque assumenda!
      </p>

      <nav>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="faq">Faq</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
