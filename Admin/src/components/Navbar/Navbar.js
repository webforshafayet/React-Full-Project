import {Link} from  'react-router-dom';
import { Button, NavDropdown,Nav } from 'react-bootstrap';

const Navbar = ()=>{
    return (
        <div>
 
<Nav className="mr-auto"   sticky="top">
      <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
      <Nav.Link><Link to='/profile'>Admin profile</Link></Nav.Link>
      <Nav.Link><Link to='/postlist'>Admin Post</Link></Nav.Link>
      <NavDropdown title="Action" id="collasible-nav-dropdown">
        <NavDropdown.Item><Link to='/userlist'>User list</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/sellerlist'>Seller list</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/specialist'>Specialist</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to='/V_userlist'>Verified User list</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/V_sellerlist'>Verified Seller list</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/V_specialist'>Verified Specialist</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link><Link to='/transiction'>Transiction History</Link></Nav.Link>
      <Nav.Link><Link to='/productlist'>Productlist</Link></Nav.Link>
      <Nav.Link><Link to='/weather'>Weather</Link></Nav.Link>
      <Nav.Link><Link to='/massage'>Massage</Link></Nav.Link>
      <Nav.Link><Link to='/feedback'>User Feedback</Link></Nav.Link>
      <Nav.Link><Link to='/'>Logout</Link></Nav.Link>
    
    </Nav>
            
            {/* <Link to='/'>Home</Link> |   */}
            {/* <Link to='/Create'>Create user</Link> |  */}
            {/* <Link to='/userlist'>User list</Link> |
            <Link to='/ d'>Seller list</Link> |
            <Link to='/ d'>specialist</Link> | */}
        </div>
    );  
}
export default Navbar;