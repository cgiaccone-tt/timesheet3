import React from 'react';
import NavigationBar from "@/Pages/TodoApp/NavigationBar";
import { useEffect, useState } from 'react'

export default function Contact() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);
    const fetchPosts = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/'
        const res = await fetch(url)
        const data = await res.json();
        setPosts(data);
    }

  return (
      <div className="todo-app-container">
          <NavigationBar />
        <div className="container">
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
      </div>
          );


}


