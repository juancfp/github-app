import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GithubProvider} from './providers';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GithubProvider>
        <App />

    </GithubProvider>
);
