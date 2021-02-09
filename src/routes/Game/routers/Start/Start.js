import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import Layout from '../../../../components/Layout/layout';
import database from '../../../../service/firebase/firebase';
import {PokemonContext} from '../../../../context/pokemonContext';

import s from './style.module.css';


const Start = () => {
    

    const context = useContext(PokemonContext)
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val());
        })
    }, []);

    
    const onCardClick = (key) => {
        const newBase = Object.entries(pokemons).reduce((acc, item) => {
            
            const pokemon = {...item[1]};
            const pokemonKey = item[0];

            if (pokemonKey === key) {
                pokemon.active = !pokemon.active;
            };
            
            acc[item[0]] = pokemon; 
            return acc;
         }, {});
        
         const selectedCards = Object.entries(newBase).map((item) => {
            const pokemon = {...item[1]};
            return pokemon
        }).filter((item) => (item.active === false)
            );

         database.ref('pokemons/').set({...newBase}).then(() => setPokemons(newBase))
         .then(() => {
         context.selectPokemon(selectedCards)
        });
        
    };
    
    const handleAddPokemon = () => {
        
        const newKey = database.ref().child('pokemons').push().key;
        const newBase = Object.entries(pokemons).reduce((acc, item) => {
            
            const pokemon = {...item[1]};
            
            if (pokemon.id === 25) {
                database.ref('pokemons/' + newKey).set(pokemon);
                acc[newKey] = pokemon;
            }
            
            acc[item[0]] = pokemon;
            
            return acc;
        }, {});
        
        setPokemons(newBase);
    };

    return (
    <> 
    <Layout id='03' title={'Welcome'} colorBg='black'>
    <div className={s.flex}> 
    <button className={s.buttonContainern} onClick={handleAddPokemon} >
    Add new Pokemon
    </button>
    <button className={s.buttonContainern} >
    <Link to={'/game/board'}>
    Let's play!
    </Link>
    </button>
    </div>
    <div className={s.flex}>
    {
         Object.entries(pokemons).map(([key, {type, img, name, id, values, active, }]) => <PokemonCard 
         key={key} 
         type={type} 
         img={img} 
         name={name} 
         id={id} 
         values={values} 
         onCardClick={onCardClick}
         isActive={active}
         unicId={key}
         minimize={false}
         className={s.root}
         />)
       }
      </div>
      </Layout>
    </>
    );
};

export default Start;