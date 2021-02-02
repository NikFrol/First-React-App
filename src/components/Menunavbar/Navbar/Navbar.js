import cn from 'classnames';
import s from './Navbar.module.css';

const Navbar = ({onChangeActive, stateActive}) => {
    const handleClick = () => {
        console.log('####: <NavBar/>');
        onChangeActive && onChangeActive(true)
    }
   return(<nav id={s.navbar}>
   <div className={s.navWrapper}>
     <p className={s.brand}>
       LOGO
     </p>
     <a onClick={handleClick} className={cn(s.menuButton,{[s.active]: stateActive})}>
       <span />
     </a>
   </div>
 </nav>)
}

export default Navbar;