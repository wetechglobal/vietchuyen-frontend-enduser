
import { Navbar, Nav, Form, FormControl, Button, Badge } from 'react-bootstrap';
import logo from 'assets/icons/logoVietChuyenSG.svg'

const TheHeader = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header text-uppercase">
            <Navbar.Brand href="/"><img src={logo} height="50px" alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Trang chủ</Nav.Link>
                    <Nav.Link href="/about">Về Việt Chuyên</Nav.Link>
                    <Nav.Link href="/solution">Giải Pháp - Sản Phẩm</Nav.Link>
                    <Nav.Link href="/news">Tin Tức</Nav.Link>
                    <Nav.Link href="/contact">Liên Hệ</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                </Nav>
                <Nav>
                    <Badge>EN</Badge>
                    <Badge>|</Badge>
                    <Badge>VI</Badge>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default TheHeader
