import Menu from './Menu/Menu.js';
import Navbar from './Navbar/Navbar.js'
import {useState} from 'react';


const MenuNavbar = () => {
    
    const [isActive, setActive] = useState(false);
    
    const handleClick = () => {
        console.log('####: <MenuNavBar />');
        setActive(!isActive);
    }

    return (
    <>
    <Menu stateActive={isActive}/>
    <Navbar onChangeActive={handleClick} stateActive={isActive}/>
    </>
        );
}

export default MenuNavbar;