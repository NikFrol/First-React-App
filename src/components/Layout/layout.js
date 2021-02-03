import React from 'react';
import cn from 'classnames';

import layoutCSS from './layout.module.css'
 
export default class Layout extends React.Component {
    render() {
        const {id, title, descr, urlBg, colorBg, children} = this.props;
        const stBgUrl = urlBg ? {backgroundImage: `url(${urlBg})`} : {};
        const stColorBg = colorBg ? {backgroundColor:colorBg} : {};
        const styleState = {...stBgUrl, ...stColorBg}
        return (<section className={layoutCSS.root} id={id} style={styleState}>
        <div className={layoutCSS.wrapper}>
            <article>
                <div className={layoutCSS.title}>
                    <h3>{title}</h3>
                    <span class={layoutCSS.separator}></span>
                </div>
                <div className={cn(layoutCSS.desc, layoutCSS.full)}>
                    <p>{descr}</p>
                    <p>{children}</p>
                </div>
            </article>
        </div>
    </section>)
    }
}