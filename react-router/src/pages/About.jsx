import { NavLink } from "react-router-dom";

function About() {
    return (
      <div className="about">
        <nav>
            <NavLink to="/" className="me-3">
                Home
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
        </nav>
        <h2>Info us !</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          facere corrupti vel velit, placeat commodi id maiores tenetur nobis odit
          totam delectus perferendis autem cum nemo! Facilis accusantium
          asperiores dolores?
        </p>
      </div>
    );
}
export default About;
