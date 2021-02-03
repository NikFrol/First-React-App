import React from 'react';
import cn from 'classnames';

import BkC from '../BkC.jpg';

import s from './style.module.css';

export default class PokemonCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {active: false}
    }

    handleClick = () => {
        this.setState({active: !this.state.active});
    }

    render(){

        const {top, right, bottom, left} = this.props.values;
        const {type, img, name, id} = this.props;
    
    return (<div className={s.root} onClick={this.handleClick}>
        <div className={cn(s.pokemonCard, {[s.active]: this.state.active})}>
            <div className={s.cardFront}>
                <div className={cn(s.wrap, s.front)}>
                    <div className={cn(s.pokemon ,s[type])} >
                        <div className={s.values}>
                            <div className={cn(s.count, s.top)}>{top}</div>
                            <div className={cn(s.count, s.right)}>{right}</div>
                            <div className={cn(s.count, s.bottom)}>{bottom}</div>
                            <div className={cn(s.count, s.left)}>{left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name} />
                        </div>
                        <div className={s.info}>
                            <span className={s.number}>{id}</span>
                            <h3 className={s.name}>{name}</h3>
                            <small className={s.type}>Type: <span>{type}</span></small>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={cn(s.wrap, s.back)}>
                    <img src={BkC} alt="Сard Backed" />
                </div>
            </div>

        </div>
    </div>)
    }
}
