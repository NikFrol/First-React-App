import {useState} from 'react';
import HomePage from './routes/Home/index';
import GamePage from './routes/Game/index';
const App = () => {

    const [page, setPage] = useState('app');

    const handleClick = (page) => {
        console.log('####: <App/>');
        setPage(page);
    }
    switch(page) {
        case 'app':
            return <HomePage onChangePage={handleClick}/>;
        case 'game':
            return <GamePage onChangePage={handleClick}/>;
        default:
            return <HomePage onChangePage={handleClick}/>;

    }
}

export default App;