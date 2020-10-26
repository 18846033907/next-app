import React from "react";
import Router from "next/router";
// posts will be populated at build time by getStaticProps()
const Blog = () => {
  // const {data,setDataState}=useState([])
  // const {data=[]}=posts
  return (
    <>
      <button type="button" onClick={() => Router.push("/")}>
        Home
      </button>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>
          <p>{item.title}</p>
        </li>
        ))}
      </ul> */}
    </>
  );
};

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries. See the "Technical details" section.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch('http://localhost:8090/getBlogLists')
//   const posts = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Blog;
