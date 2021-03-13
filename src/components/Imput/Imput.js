import cn from 'classnames';

import s from './imput.module.css';

const Imput = ({ label, value, type = 'text', onChange }) => {

    console.log(value, '####')
    const isValue = value.length > 0;
    
    return (<div className={s.root} onChange={onChange}>
        <input type={type} 
            className={cn(s.input,
                { [s.valid]: isValue })}
            required />
        <span className={s.highlight}></span>
        <span className={s.bar}></span>
        <label className={s.label}>{label}</label>
    </div>)
};

export default Imput;