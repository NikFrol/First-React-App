import {useContext} from 'react';
import {PokemonContext} from '../../../../context/pokemonContext';

import s from './Board.module.css';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard'

const BoardPage = () => {
    const selectedPokemons = useContext(PokemonContext);
    (console.log(selectedPokemons))
    return (
        <div className={s.root}>
						<div className={s.playerOne}>
                        {
        selectedPokemons.pokemons.map(({type, img, name, id, values}) => <PokemonCard 
         key={id} 
         type={type} 
         img={img} 
         name={name} 
         id={id} 
         values={values} 
         isActive={true}
         minimize={true}
         className={s.card}
         />)}
						</div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;