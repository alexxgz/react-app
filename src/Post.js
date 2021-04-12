import React from 'react'

function Post(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>By {props.author}</h2>
            <div>
                <p>{props.body}</p>
            </div>
            <h3>Comments:</h3>
            <p>{props.comments[0]}</p>
        </div>
    )
}

export default Post;