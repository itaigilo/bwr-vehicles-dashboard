import {Navbar, Container} from "react-bootstrap";

function TopBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Vehicles: O'coffee Brazil</Navbar.Brand>
                <Navbar.Brand href="#" className="justify-content-end">
                    BWR
                    &nbsp;
                    <img
                        src="./bwr-icon.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="BWR Logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;
