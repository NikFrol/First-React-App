import cn from 'classnames';
import { useState } from 'react';


import PokemonCard from '../../../../../../components/PokemonCard/PokemonCard';
import s from './playerBoard.module.css';


const PlayerBoard = ({ cards, onClickCard, playerSelected, player }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    return (
        <>
            {
                cards.map((item) => (
                    <div className={cn(s.cardBoard, {
                        [s.selectedplayer2]: selectedCard === item.id && playerSelected === 'player2',
                        [s.selectedplayer1]: selectedCard === item.id && playerSelected === 'player1'
                    })}
                        key={item.id}
                        onClick={() => {
                            onClickCard && onClickCard({ player, ...item, })
                            setSelectedCard(item.id)
                        }}>

                        <PokemonCard
                            key={item.id}
                            type={item.type}
                            img={item.img}
                            name={item.name}
                            id={item.id}
                            values={item.values}
                            isActive
                            minimize
                            onCardClick={() => { }}
                            possession={player.possession}
                        />
                    </div>)
                )}
        </>
    )

}

export default PlayerBoard;