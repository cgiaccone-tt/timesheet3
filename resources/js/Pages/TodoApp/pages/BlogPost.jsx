import React from 'react';
import {usePage} from '@inertiajs/react';
import NavigationBar from "@/Pages/TodoApp/NavigationBar";




export default function BlogPost() {
    const {id} = usePage().props;

  return (
    <div className="todo-app-container">
        <NavigationBar />
        <div className="container">
            This is blog post {id}
        </div>
    </div>
  );
}
