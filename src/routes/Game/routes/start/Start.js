import { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import { PokemonContext } from '../../../../context/pokemonContext';
import cn from 'classnames';

import { selectPokemonsdata, selectPokemonsLoding, getPokemonsAsync } from '../../../../store/pokemon';

import loding from '../../../../assets/4tym.gif';
import s from './style.module.css';

const Start = () => {

    const pokemonContext = useContext(PokemonContext);
    const history = useHistory();
    const isLoding = useSelector(selectPokemonsLoding);
    const pokemonsRedux = useSelector(selectPokemonsdata);
    const dispatch = useDispatch();

    console.log('####: pokemonsRedux', pokemonsRedux);

    const [pokemons, setPokemons] = useState({});

    useEffect(() => {

        dispatch(getPokemonsAsync());
        pokemonContext.dischargeContext();

    }, []);

    useEffect(() => {

        setPokemons(pokemonsRedux);
    }, [pokemonsRedux]);

    const onCardClick = (key) => {

        const pokemon = { ...pokemons[key] }
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

    const playerOneLengthState = Object.keys(pokemonContext.pokemons).length;

    return (
        <>

            <div className={s.flex}>
                <button className={cn(s.buttonContainern, s.container)}
                    disabled={Object.keys(pokemonContext.pokemons).length < 5}
                    onClick={hendleStart}>
                    {playerOneLengthState < 5 ? `Chose ${5 - playerOneLengthState} pokemons!` : `Let's play!`}
                </button>

            </div>
            <div className={s.flex}>
                {isLoding ? <img src={loding} alt="it loding gif" className={s.loding}></img> : null}
            {

                Object.entries(pokemons).map(([key, { type, img, name, id, values, selected }]) => <PokemonCard
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

        </>
    );
};

export default Start;