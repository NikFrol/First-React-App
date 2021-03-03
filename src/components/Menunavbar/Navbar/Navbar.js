import cn from 'classnames';

import { ReactComponent as LoginSVG } from '../../../assets/login.svg';

import s from './Navbar.module.css';

const Navbar = ({ onChangeActive, bgActive = false, stateActive, onClickLogin }) => {

  return (
    <nav id={s.navbar} className={cn({ [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand}>
          Pokemons!
     </p>
        <div className={s.loginAndMenu}>
          <div
            className={s.loginWrap}
            onClick={onClickLogin}>
            <LoginSVG />
          </div>
          <div
            onClick={onChangeActive}
            className={cn(s.menuButton, { [s.active]: stateActive })}>
            <span />
          </div>
        </div>
      </div>
    </nav>)
}

export default Navbar;