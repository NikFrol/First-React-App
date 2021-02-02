import s from './style.module.css';

const GamePage = ({onChangePage}) => {

    const handleClick = () => {
        console.log('####: <Game />');
        onChangePage && onChangePage('home')
    }

    return (<div>
    <button className={s.buttonContainern}onClick={handleClick}>
                Go Home!
            </button>
        <h1>This is GamePage!!!</h1>
    </div>
    );
};

export default GamePage;