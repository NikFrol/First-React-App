import { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import Layout from '../../../../components/Layout/layout'

import { FireBaseContext } from '../../../../service/firebase/firebaseContext';
import { PokemonContext } from '../../../../context/pokemonContext';
import cn from 'classnames';
import s from './style.module.css';



const Start = () => {

    const pokemonContext = useContext(PokemonContext)
    const firebase = useContext(FireBaseContext);
    const history = useHistory();


    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebase.getPokemonSoket((pokemons) => {
            setPokemons(pokemons);
        });
        pokemonContext.dischargeContext();

        return (() => firebase.offPokemonSoket());
    }, []);

    const onCardClick = (key) => {
        
        const pokemon = {...pokemons[key]}
        pokemonContext.selectPokemon(key, pokemon)

        
        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected,
            }
        }))

    };

    const hendleStart = () => {
      history.push('/game/board');
    }

    return (
        <>
            <Layout id='03' title={'Welcome'} colorBg='black'>
                <div className={s.flex}>
                    <button className={cn(s.buttonContainern, s.container)} 
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                    onClick={hendleStart}>
                            Let's play!
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, { type, img, name, id, values, selected}]) => <PokemonCard
                            key={key}
                            type={type}
                            img={img}
                            name={name}
                            id={id}
                            values={values}
                            onCardClick={() => {
                                if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                                    onCardClick(key)
                                }
                                
                            }}
                            isActive={true}
                            unicId={key}
                            minimize={false}
                            className={s.card}
                            isSelected={selected}
                        />)
                    }
                </div>
            </Layout>
        </>
    );
};

export default Start;