import { useContext } from 'react';
import { useHistory} from 'react-router-dom';


import PlayerFinish from '../finish/PlayerFinish/PlayerFinish';
import { PokemonContext, Player2Context } from '../../../../context/pokemonContext';
import s from './finish.module.css';

const Finish = () => {

    const history = useHistory();

    const { pokemons } = useContext(PokemonContext);
    const { pokemons2 } = useContext(Player2Context);
    
  

    const player1 = Object.values(pokemons).map((item) => ({
        ...item,
        possession: 'blue',
    }));

    const handleClickEnd = () => {
       
            history.push('/game');
        
    }
    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }
    return (
        <>
        <div className={s.playerOne}>
            <PlayerFinish cards={player1}
                playerSelected={'player1'}
                player={player1}
            />    
        </div>
        <button className={s.buttonContainern} onClick={handleClickEnd} 
        disabled={pokemons2.length > 0}>
        Finish Game!
        </button>
        <div className={s.playerTwo}>
        <PlayerFinish cards={pokemons2}
                playerSelected={'player2'}
                player={pokemons2}
            />
            </div>
        
            </>
    )
}

export default Finish;