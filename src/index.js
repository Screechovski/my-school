import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import "normalize.css";
import "reset.css";

import {App} from "./App";

const root = createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <App />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
