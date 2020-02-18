import React from 'react';
import cl from './Post.module.css';

const Post = (props) => {
    return (
        <div className={cl.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFKVKjW3oHGcYaDd0rjQvEgK0bZxw0HvXZ7GHqNXQ96xPMoCuig&s" alt={''}/>
            <div>
                {props.message}
            </div>
            <div>
                LIKE {props.like}
            </div>
        </div>
    )
}

export default Post