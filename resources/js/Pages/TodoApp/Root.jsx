import React from 'react';
//import TodoApp from './TodoApp';
import NavigationBar from './NavigationBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import NoMatch from './pages/NoMatch';
import TodoApp from "@/Pages/TodoApp/Index";

export default function Root() {

    return (
            <div className="todo-app-container">
                <NavigationBar />
                <div className="content">
                    <TodoApp />
                </div>
            </div>
    );
}
