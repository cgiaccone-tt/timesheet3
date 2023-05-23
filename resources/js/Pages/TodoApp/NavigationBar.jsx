import React from 'react';
import {Link, usePage} from '@inertiajs/react';

export default function NavigationBar() {
    const { url} = usePage();
  return (
    <nav>
      <ul>
        <li>
            <Link href="/todoapp" className={url === '/todoapp' ? 'active' : ''}>
                Home
            </Link>
        </li>
        <li>
            <Link href="/todoapp/about" className={url === '/todoapp/about' ? 'active' : ''}>
                RedditJoke-UseFetch
            </Link>
        </li>
        <li>
            <Link href="/todoapp/rj-usequery" className={url === '/todoapp/rj-usequery' ? 'active' : ''}>
                RedditJoke-UseQuery
            </Link>
          </li>
        <li>
            <Link href="/todoapp/contact" className={url === '/todoapp/contact' ? 'active' : ''}>
                Contact
            </Link>
        </li>
        <li>
            <Link href="/todoapp/blog" className={url.startsWith('/todoapp/blog') ? 'active' : ''}>
                Blog
            </Link>
        </li>
      </ul>
    </nav>
  );
}
