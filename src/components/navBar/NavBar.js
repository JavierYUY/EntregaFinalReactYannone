import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget/CartWidget';

function NavBar(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href={'/'}>Instituto BioCreArte</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav activeKey={'/'} className="me-auto">
                            <Nav.Link href={'/category/Curso'} >Cursos</Nav.Link>
                            <Nav.Link href={'/category/Taller'} >Talleres</Nav.Link>
                            <Nav.Link href={'/category/Charla'} >Charlas</Nav.Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;