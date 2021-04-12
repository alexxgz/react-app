import React from 'react'
import ReactDom from 'react-dom'
import Hello from './App.js'

// ReactDom.render(
//   <Post
//    title={"wtf is going on"} 
//    author={"Alex"}
//    body={"The more answers I figure out the more confused I get"}
//    comments={[]}/>,
//    document.getElementById(root)
// )

ReactDom.render(
  <Hello name={"Alex"} age={25} />,
  document.getElementById('root')
);
