import Menu from './Menu/Menu.js';
import Navbar from './Navbar/Navbar.js';
import Modal from '../Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';
import { useState } from 'react';


const MenuNavbar = ({ bgActive }) => {
    const [isActive, setActive] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setActive(prevState => !prevState);
    };

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);
    };

    const handleSubmitLoginForm = (values) => {
        console.log(values, '####')
    };

    return (
        <>
            <Menu stateActive={isActive}
                onChangeActive={handleClick} />

            <Navbar onChangeActive={handleClick}
                stateActive={isActive}
                bgActive={bgActive}
                onClickLogin={handleClickLogin} />
            <Modal title={'Log in...'}
                isOpen={isOpenModal}
                onCloseModal={handleClickLogin}>
                <LoginForm 
                    onSubmit={handleSubmitLoginForm}
                />
            </Modal>
        </>
    );
}

export default MenuNavbar;