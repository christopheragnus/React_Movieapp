import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';

const MOUNT = document.getElementById('root') // or document.querySelector('#root')
const renderApp = Comp => ReactDOM.render(Comp, MOUNT)

if (module.hot) {
    module.hot.accept('./App', () => {
        //accept hot change request
        const NextRoutes = require('./routes').default
        renderApp(<Routes />)
    })
}

renderApp(<Routes />)

