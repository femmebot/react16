import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App pageTitle = 'React16: Sec7'/>, document.getElementById('root'));
registerServiceWorker();
