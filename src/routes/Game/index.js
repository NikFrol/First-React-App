import { useRouteMatch, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import StartPage from './routes/start/Start';
import BoardPage from './routes/board/Board';
import FinishPage from './routes/finish/Finish';

import { PokemonContext } from '../../context/pokemonContext';



const GamePage = () => {


    const [pokemons, setSelected] = useState({});
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

    const dischargeContext = () => {
        setSelected({});

    }

    return (

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
    )
}


export default GamePage;