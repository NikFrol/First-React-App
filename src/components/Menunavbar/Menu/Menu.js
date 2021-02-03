import cn from 'classnames';

import s from './Menu.module.css';

const Menu = ({stateActive}) => {    
        
  const classNames = cn(s.menuContainer, {[s.active]: stateActive, [s.deactive]: !stateActive})
    return (
    <div className={classNames}>
    <div className={s.overlay} />
    <div className={s.menuItems}>
      <ul>
        <li>
          <a href="#welcome">
            HOME
          </a>
        </li>
        <li>
          <a href="#game">
            GAME
          </a>
        </li>
        <li>
          <a href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </div>
  )
}
export default Menu;