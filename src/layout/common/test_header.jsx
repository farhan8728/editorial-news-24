import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="sticky-top" style={{backgroundColor:"#3458A0",height:"50px"}}  >
        
      <Container className='test_header'>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ">
            <Nav.Link href="#home" className='menuItems me-3'>হোম</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>সর্বশেষ</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>রাজনীতি</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>অর্থনীতি</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>জাতীয়</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>আন্তর্জাতিক</Nav.Link>

            <Nav.Link href="#link" className='menuItems me-3'>খেলা</Nav.Link>

            <Nav.Link href="#link" className='menuItems me-3'>বিনোদন</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>স্বাস্থ্য</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>প্রযুক্তি</Nav.Link>
            <Nav.Link href="#link" className='menuItems me-3'>শিক্ষা</Nav.Link>








            <NavDropdown title="অন্যান্য" className='menuItems' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" className='menuItems'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='menuItems'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='menuItems'>Something</NavDropdown.Item>
             
              <NavDropdown.Item href="#action/3.4" className='menuItems'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;