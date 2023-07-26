// import React from "react";

import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "../../component/button.component";

import Logo from '../../assets/images/Logo.jpg'

function Navmenu() {
  return (
    <>
      <section className="">
    
       <Navbar />
           <Navbar expand="lg" className="sticky-top"  >
           {/* <div className="d-flex justify-content-center align-items-center">
             <img src={Logo} alt=""  style={{width:"80%"}} />
           </div> */}
           
           <Container fluid className="navmenu">
             {/* <Navbar.Brand href="#home">  <img src={Logo} alt="" style={{width:"50%"}} /> </Navbar.Brand> */}
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="m-auto">
                 <Nav.Link href="#home" className="navitems me-3">
                   হোম
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   সর্বশেষ
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   রাজনীতি
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   অর্থনীতি
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   জাতীয়
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   আন্তর্জাতিক
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   খেলা
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   বিনোদন
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   স্বাস্থ্য
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   প্রযুক্তি
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems me-3">
                   শিক্ষা
                 </Nav.Link>
                 <Nav.Link href="#link" className="navitems ">
                   চাকরি
                 </Nav.Link>
 
                 <NavDropdown
                   title="অন্যান্য"
                   className="navitems"
                   id="basic-nav-dropdown"
                 >
                   <NavDropdown.Item href="#action/3.1" className="dropdownitems">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2" className="dropdownitems">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3" className="dropdownitems">
                     Something
                   </NavDropdown.Item>
                   
                   <NavDropdown.Item href="#action/3.4" className="dropdownitems">
                     Separated link
                   </NavDropdown.Item>
                 </NavDropdown>
               </Nav>
             </Navbar.Collapse>
           </Container>
         </Navbar>
       
      </section>
    </>
  );
}

export default Navmenu;
