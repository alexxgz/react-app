import React from 'react'
import ReactDom from 'react-dom'
// import Hello from './App.js'
import Post from './Post'

const post = {
  title: "Avengers",
  author: "Nick Fury",
  body: "I secretly recruited a group of superheroes to save our world.",
  comments: [
    "I love Avengers.",
    "Forget Avengers, we want the Witcher.",
    "At least let aliens destroy D&D for what they did to GOT!"
  ]
}

ReactDom.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments} />,
  document.getElementById('root')
);

// ReactDom.render(
//   <Hello name={"Alex"} age={25} />,
//   document.getElementById('root')
// );
