import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import StartPage from './routes/start/Start';
import BoardPage from './routes/board/Board';
import FinishPage from './routes/finish/Finish';

import { PokemonContext, Player2Context} from '../../context/pokemonContext';



const GamePage = () => {


    const [pokemons, setSelected] = useState({});
    const [pokemons2, setPokemons2] = useState([])
    const  match  =  useRouteMatch ( '/game' )
    const selectPokemon = (key, pokemon) => {
        setSelected(prevState => {
            if (prevState[key]) {
                const copyState = { ...prevState };
                delete copyState[key];

                return copyState
            }
            return ({
                ...prevState,
                [key]: pokemon

            });
        });
    };

    const setPokemonsPlayer2 = (pokemon2) => {
        setPokemons2(() => {
            return [...pokemon2]
        })
    }
    const dischargeContext2 = () => {
        setPokemons2([])
    }
    const dischargeContext = () => {
        setSelected({});

    }

    return (
        <Player2Context.Provider value={{
            pokemons2: pokemons2,
            setPokemonsPlayer2: setPokemonsPlayer2,
            dischargeContext2:dischargeContext2,
        }} >
        <PokemonContext.Provider value={{
            pokemons: pokemons,
            selectPokemon: selectPokemon,
            dischargeContext: dischargeContext,
        }} >
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
        </Player2Context.Provider>
    )
}


export default GamePage;