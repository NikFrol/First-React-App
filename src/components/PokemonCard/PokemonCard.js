import React from 'react';
import cn from 'classnames';

import s from './style.module.css';


const PokemonCard = ({ unicId, type, img, name, id, values, isActive, onCardClick, minimize = false, className, isSelected, possession}) => {

    const { top, right, bottom, left } = values;
    const onClickCard = () => {
        onCardClick(unicId)
    }



    return (
        <div className={cn(className, s.pokemonCard, { [s.active]: isActive, [s.selected]: isSelected })}
            onClick={onClickCard}>
            <div className={s.cardFront}>
                <div className={cn(s.wrap, s.front)}>
                    <div className={cn(s.pokemon, s[type], s[possession])} >
                        <div className={s.values}>
                            <div className={cn(s.count, s.top)}>{top}</div>
                            <div className={cn(s.count, s.right)}>{right}</div>
                            <div className={cn(s.count, s.bottom)}>{bottom}</div>
                            <div className={cn(s.count, s.left)}>{left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        {!minimize && (<div className={s.info}>
                            <span className={s.number}>#{id}</span>
                            <h3 className={s.name}>
                                {name}
                            </h3>
                            <small className={s.type}>
                                Type: <span>{type}</span>
                            </small>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className={s.cardBack}>
        <div className={cn(s.wrap, s.back)} />
    </div>
                

        </div>
    )
}
export default PokemonCard;