import { useLocation, Route, Switch, Redirect } from 'react-router-dom';

import cn from 'classnames';

import HomePage from './routes/Home/index';
import GamePage from './routes/Game/index';
import HeaderMenu from './components/Menunavbar/MenuNavbar';
import Footer from './components/Footer/footer';



import FireBase from './service/firebase/firebase';

import { FireBaseContext } from './service/firebase/firebaseContext';

import s from './App.module.css';



const App = () => {

    const location = useLocation();
    const isPading = location.pathname === '/' || location.pathname === '/game/board';

    return (
        <FireBaseContext.Provider value={FireBase}>
            <Switch>
                <Route path='/404' render={() => (
                    <h1>Not Found 404</h1>)}
                />
                <Route>
                    <>
                        <HeaderMenu bgActive={!isPading} />
                        <div className={cn(s.wrap, { [s.isHomePage]: isPading })}>
                            <Switch>
                                <Route path='/' exact component={HomePage} />
                                <Route path='/game' component={GamePage} />
                                <Route path='/about' render={() => (
                                    <h1>About</h1>
                                )} />
                                <Route path='/contact' render={() => (
                                    <h1>Contacts</h1>
                                )} />
                                <Route render={() => (
                                    <Redirect to={'/404'} />
                                )
                                } />
                            </Switch>
                        </div>
                        <Footer />
                    </>
                </Route>
            </Switch>
        </FireBaseContext.Provider>
    )
}

export default App;