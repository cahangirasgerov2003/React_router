import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="home">
        <nav>
            <NavLink to="/" className="me-3">
                Home
            </NavLink>
            <NavLink to="/about">
                About
            </NavLink>
        </nav>
        <h2>You are welcome !</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem
            maxime! Ipsa eveniet corporis modi sint nisi veniam rem cum molestiae,
            officia fuga, eum asperiores vero ducimus, eligendi exercitationem
            suscipit.
        </p>
        </div>
    );
}

export default Home;