import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './routes/Home/index';
import GamePage from './routes/Game/index';
import HeaderMenu from './components/Menunavbar/MenuNavbar';
import Footer from './components/Footer/footer'
import cn from 'classnames'
import s from './App.module.css'

const App = () => {

    const match = useRouteMatch('/')
    return (
            <Switch>
                <Route path='/404' render={() => (
                    <h1>Not Found 404</h1>)}
                />
                <Route>
                <>
                    <HeaderMenu bgActive={!match.isExact} />
                    <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
                    <Switch>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/game' component={GamePage} />
                        <Route path='/about' render={() => (
                                <h1>This page ABOUT!</h1>
                                )} />
                        <Route path='/contact' render={() => (
                                <h1>This page CONTACT!</h1>
                                )} />
                        <Route render={() => (
                            <Redirect to={'/404'}/>
                        )
                        }/>
                    </Switch>
                    </div>
                    <Footer />
                    </>
                </Route>
            </Switch>
    )
}

export default App;