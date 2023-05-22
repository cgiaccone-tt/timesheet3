import React from 'react';
import { Link } from '@inertiajs/react';
import NavigationBar from "@/Pages/TodoApp/NavigationBar";

export default function Blog() {
  return (
    <div className="todo-app-container">
        <NavigationBar />
        <div className="container">
          <ul>
            <li>
              <Link href={'/todoapp/blog/1'}>Post One</Link>
            </li>
            <li>
              <Link href={'/todoapp/blog/2'}>Post Two</Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
