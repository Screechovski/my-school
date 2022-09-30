import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {deviceId} from './assets/helper';

import 'normalize.css';
import 'reset.css';

import {App} from './App';

const queryClient = new QueryClient();
const root = createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>
    // </React.StrictMode>
);

deviceId.then((d) => console.log(d.length));
