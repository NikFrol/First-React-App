import React from 'react';
import footerCSS from './footer.module.css'

export default class Footer extends React.Component {
    render() {
        return (<footer>
            <div className={footerCSS.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>)
    }
}