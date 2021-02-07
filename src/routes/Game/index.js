import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


import POKEMONS from '../../components/Pokemons/Pokemons.json';
import s from './style.module.css';

const GamePage = () => {
    
    const history = useHistory();
    
    const handleClick = () => {
        history.push('/');
    };

    const [pokemons, setPokemons] = useState(POKEMONS);

    const onCardClick = (id) => {
        setPokemons((pokemons) => {
           const indexSelectedCard = pokemons.findIndex(item => item.id == id);
           const cardBeforeClick = pokemons[indexSelectedCard];
           const cardAfterClick = {...cardBeforeClick, isActive: !cardBeforeClick.isActive};
           const newPokemons = [
               ...pokemons.slice(0, indexSelectedCard),
               cardAfterClick,
               ...pokemons.slice(indexSelectedCard + 1)
           ];
           return newPokemons;
        })
    }

    return (
    <> 
    <div className={s.flex}>
    {
         pokemons.map((item) => <PokemonCard key={item.id} 
         type={item.type} 
         img={item.img} 
         name={item.name} 
         id={item.id} 
         values={item.values} 
         onCardClick={onCardClick}
         isActive={item.isActive}
         />)
       }
      </div>
    <div className={s.container}>
    <button className={s.buttonContainern}onClick={handleClick}>
                Go Home!
            </button>
        <h1>This is GamePage!!!</h1>
        </div>
    </>
    );
};

export default GamePage;