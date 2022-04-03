import TitleContext from "../context/TitleContext"
import { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {

    const title = useContext(TitleContext);    

    const { Brand, Collapse } = Navbar;

    const isLoged= title === "Description" ? 
    <>
        <Link
            href="/"
            passHref
        >
            <Nav.Link>
                Go back
            </Nav.Link>
        </Link>
    </>:
    <>
    </>;

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
        >   
            <Container>
                <Brand>
                    {title}
                </Brand>
                <Collapse>
                    <Nav
                        className="me-auto"
                    >
                        {isLoged}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;