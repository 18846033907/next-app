import React from 'react'     
// import Home from '@pages/home'
import Link from 'next/link'

export default function App() {
  return (
    
    <h1 className="title">
  第一篇文章
	<a href="/posts/first-post">a 点击这里</a>
	<Link href="/posts/first-post">link 点击这里</Link>
</h1>
  )
}
