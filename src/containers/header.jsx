
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Form, FormControl, Badge } from 'react-bootstrap';
import logo from 'assets/icons/logoVietChuyenSG.svg'
import search from 'assets/icons/search.svg'
import React from 'react';

const TheHeader = props => {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => { i18n.changeLanguage(lng); };
    const { location } = props
    const Search = () => (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
    )
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="header text-uppercase">
            <Navbar.Brand href="/"><img src={logo} height="50px" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" activeKey={location.pathname}>
                    <div className="menu"><Nav.Link href="/">{t('mainMenu.home')}</Nav.Link></div>
                    <div className="menu"><Nav.Link href="/about">{t('mainMenu.about')}</Nav.Link></div>
                    <div className="menu"><Nav.Link href="/solution" >{t('mainMenu.solution')}</Nav.Link></div>
                    <div className="menu"><Nav.Link href="/news" >{t('mainMenu.news')}</Nav.Link></div>
                    <div className="menu"><Nav.Link href="/contact" >{t('mainMenu.contact')}</Nav.Link></div>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                </Nav>
                <Nav className="mobile">
                    <Badge onClick={() => changeLanguage('en')} className="pointer" title="Click here to change language">EN</Badge>
                    <Badge>|</Badge>
                    <Badge onClick={() => changeLanguage('vi')} className="pointer" title="Click here to change language">VI</Badge>
                    <Badge><img alt="" src={search} height="20" onClick={onClick} /></Badge>
                </Nav>
                {showResults ? <Search /> : null}
            </Navbar.Collapse>
        </Navbar>
    );
}
export default TheHeader
