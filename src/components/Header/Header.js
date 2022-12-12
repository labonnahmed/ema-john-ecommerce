import { signOut } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Container, Navbar} from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import { auth } from '../../firebase';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const [setAuthUser] = useContext(userContext);
    const navigate= useNavigate();

    const userSignOut =() => {
        signOut(auth)
        navigate('/login')
        .then(() => {
            setAuthUser(null)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <div className='header'>
            <img src={logo} alt="" />
            <Navbar bg="dark" variant="dark" style={{width:'100%'}}>
                <Container>
                {/* <Navbar.Brand href="/home">ema-John</Navbar.Brand> */}
                <div className="mx-auto d-block d-flex">
                    <NavLink to="/shop" className='menu'>Shop</NavLink>
                    <NavLink to="/review"  className='menu'>Order Review</NavLink>
                    <NavLink to="/inventory"  className='menu'>Manage Inventory</NavLink>
                    <button onClick={userSignOut} className='menu signUpBtn'>Sign Up</button>
                </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;