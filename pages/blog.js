import React from 'react'    
import Router from 'next/router'
// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
    const {data=[]}=posts
    return (
      <>
       <button onClick={()=>Router.push('/')} >Home</button>
        <ul>
        {data.map((item) => (
          <li key={item.id}>
          <p>{item.title}</p>
        </li>
        ))}
      </ul>
      </>
    )
  }
  

  // This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:8090/getBlogLists')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.data.map((post) => ({
      params: { id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries. See the "Technical details" section.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:8090/getBlogLists')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  
  export default Blog