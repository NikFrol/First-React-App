import { useContext } from 'react';

import PokemonCard from '../../../../../components/PokemonCard/PokemonCard';
import { Player2Context } from '../../../../../context/pokemonContext';
import { FireBaseContext } from '../../../../../service/firebase/firebaseContext';
import s from './playerFinish.module.css';


const PlayerFinish = ({ cards, player }) => {

    const firebase = useContext(FireBaseContext);
    const { pokemons2, dischargeContext2} = useContext(Player2Context);

    const handleSelectedNewCard = (id) => {
        pokemons2.map((item) => {

            if (item.id === id) {
                firebase.addPokemon(item);
            };

            return;
        })
        dischargeContext2();
    };

    return (
        <>
            {
                cards.map((item) => (
                    <div className={s.cardBoard}
                    >

                        <PokemonCard
                            key={item.id}
                            type={item.type}
                            img={item.img}
                            name={item.name}
                            id={item.id}
                            values={item.values}
                            isActive
                            minimize
                            onCardClick={handleSelectedNewCard}
                            possession={player.possession}
                            unicId={item.id}
                            className={s.card}
                            
                        />
                    </div>)
                )}
        </>
    )

}

export default PlayerFinish;