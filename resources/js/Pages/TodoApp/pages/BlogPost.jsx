import React from 'react';
import {Link, usePage} from '@inertiajs/react'
const { url, component } = usePage();

export default function BlogPost(props) {

  return <div className="container">This is blog post {props.id}</div>;
}
