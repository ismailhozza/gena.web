import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// import createBrowserHistory from 'history/createBrowserHistory'
// const history = createBrowserHistory()

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
