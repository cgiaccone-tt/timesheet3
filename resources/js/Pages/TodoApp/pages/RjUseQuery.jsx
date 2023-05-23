import React from 'react';
import NavigationBar from "@/Pages/TodoApp/NavigationBar";
import ReactDOM from 'react-dom';
import './index.css';
import '/resources/css/TodoReset.css';
import '/resources/css/TodoApp.css';
import RedditJoke from './RedditJokeRjUseQuery';
//import reportWebVitals from './ReportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';


export default function RjUseQuery() {
    const queryClient = new QueryClient();
    return (
    <div className="todo-app-container">
        <NavigationBar />
        <div className="container">This is the about page</div>
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <RedditJoke />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </React.StrictMode>
    </div>
    );
}

//reportWebVitals();
