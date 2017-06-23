import React from 'react';
import { Nav, Navbar, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}
	handleSelect(eventKey) {
	    event.preventDefault();
	    alert(`selected ${eventKey}`);
	}

	render() {
		return(
			<Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <Link to="/">React-Bootstrap</Link>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <li><Link to="/Home">Home</Link></li>
			        <li><Link to="/About">About</Link></li>
			        <li><Link to="/TodoApp">TodoApp</Link></li>
			        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			          <MenuItem eventKey={3.1}>Action</MenuItem>
			          <MenuItem eventKey={3.2}>Another action</MenuItem>
			          <MenuItem eventKey={3.3}>Something else here</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={3.3}>Separated link</MenuItem>
			        </NavDropdown>
			      </Nav>
			      <Nav pullRight>
			        <li><Link to="/Contact">Contact</Link></li>
			        <NavItem eventKey={2} href="#">Link Right</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			</Navbar>
		);
	}
}

export default NavBar;

