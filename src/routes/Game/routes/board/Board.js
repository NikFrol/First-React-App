import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


import { PokemonContext, Player2Context } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../components/PokemonCard/PokemonCard';
import PlayerBoard from './component/PlayerBoard/PlayerBoard.js';
import Result from '../../../../components/Result/index';
import ArrowChoice from '../../../../components/ArrowChoice/index';

import s from './style.module.css';

const counterWin = (board, player1, player2) => {

    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        console.log(item)
        if (item.card.possession === 'blue') {
            player1Count++;
        }
        if (item.card.possession === 'red') {
            player2Count++;
        }
    });

    return [player1Count, player2Count];
}

const BoardPage = () => {

    const { pokemons } = useContext(PokemonContext);
    const pokemonsPlyaer2 = useContext(Player2Context);

    const [arrowActive, setArrowActive] = useState(true)
    const [activePlayer, setActivePlayer] = useState(null)
    const [board, setBoard] = useState([]);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map((item) => ({
            ...item,
            possession: 'blue',
        }));
    });
    const [player2, setPlayer2] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null)
    const [steps, setSteps] = useState(0);

    const history = useHistory();

    useEffect(async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();

        setBoard(boardRequest.data);

        const boardPlayr2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const boardPlayer2Request = await boardPlayr2Response.json();


        setPlayer2(boardPlayer2Request.data.map((item) => ({
            ...item,
            possession: 'red',
        })))
        pokemonsPlyaer2.setPokemonsPlayer2(boardPlayer2Request.data);

        setTimeout(() => {
            const fristPlyaer = Math.floor(Math.random() * Math.floor(2));
            setActivePlayer(fristPlyaer);
        }, 3000)
        setTimeout(() => setArrowActive(false), 5000);

    }, []);



    const handleClickOnBoard = async (position) => {

        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            }

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (choiceCard.possession === 'blue') {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));

            }

            if (choiceCard.possession === 'red') {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));

            }

            setBoard(request.data);
            setSteps(prevState => prevState + 1);
            setActivePlayer(prevState => !prevState);
            setChoiceCard(null);


        }
    }
    const type = {};

    if (steps === 9) {
        const [count1, count2] = counterWin(board, player1, player2);
        if (count1 > count2) {
            type.value = 'win';
        } else if (count1 < count2) {
            type.value = 'lose';
        } else {
            type.value = 'draw';
        }
        setTimeout(() => history.replace('./finish'), 3500);

    }


    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }



    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    <PlayerBoard cards={player1}
                        onClickCard={activePlayer ? (card) => setChoiceCard(card) : null}
                        playerSelected={activePlayer && activePlayer !== null ? 'player1' : null}
                        player={player1}
                    />
                }
            </div>

            <div className={s.board}>
                {
                    board.map((item) => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card && handleClickOnBoard(item.position)}>
                            {
                                item.card && <PokemonCard {...item.card} isActive minimize />
                            }
                        </div>
                    ))

                }
            </div>

            {arrowActive ? <ArrowChoice side={activePlayer} /> : null}

            {steps !== 9 ? null : (<Result type={type.value} />)}
            <div className={s.playerTwo}>
                {
                    <PlayerBoard cards={player2}
                        onClickCard={!activePlayer && activePlayer !== null ? (card) => setChoiceCard(card) : null}
                        playerSelected={!activePlayer && activePlayer !== null ? 'player2' : null}
                        player={player2}
                    />
                }
            </div>
        </div>
    );
};

export default BoardPage; 