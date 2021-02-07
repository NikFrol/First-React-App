import Menu from './Menu/Menu.js';
import Navbar from './Navbar/Navbar.js'
import {useState} from 'react';


const MenuNavbar = ({bgActive}) => {
    const [isActive, setActive] = useState(null);
    
    const handleClick = () => {
        setActive(prevState => !prevState);
    }

    return (
    <>
    <Menu stateActive={isActive} onChangeActive={handleClick}/>
    <Navbar onChangeActive={handleClick} stateActive={isActive} bgActive={bgActive}/>
    </>
        );
}

export default MenuNavbar;