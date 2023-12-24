
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Nav = () => {
return (
<Navbar
bg="dark"
variant="dark"
>
<Container>
<div>

<Link
to="/"
className="text-white ms-3 text-decoration-none text-justify-end"
>

Home
</Link>
<Link
to="/contact"
className="text-white ms-3 text-decoration-none"
>
Pokemones
</Link>
    </div>

<Navbar.Brand> 

    </Navbar.Brand>



</Container>
</Navbar>

);
};
export default Nav;