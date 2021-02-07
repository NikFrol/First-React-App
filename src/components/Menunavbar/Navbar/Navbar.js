import cn from 'classnames';
import s from './Navbar.module.css';

const Navbar = ({onChangeActive, bgActive = false,  stateActive}) => {

   return(
   <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
   <div className={s.navWrapper}>
     <p className={s.brand}>
       LOGO
     </p>
     <div onClick={onChangeActive} className={cn(s.menuButton,{[s.active]: stateActive})}>
       <span />
     </div>
   </div>
 </nav>)
}

export default Navbar;