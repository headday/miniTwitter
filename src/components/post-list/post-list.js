import React from 'react';
import PostListItem from '../post-list-item'

import './index.css'
import './post-list.css'
const Postlist = ({posts, onDelete, onToggleImportant, onToggleLiked})=>{
    const elements = posts.map((item) => {
        if(typeof(item) === 'object' && item !=''){
            const {id, ...itemProps} = item;
            return(
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}
                     onDelete ={() =>{onDelete(id)}}
                     onToggleImportant = {() => onToggleImportant(id)}
                     onToggleLiked = {() => onToggleLiked(id)}
                     
                     />
                </li>
            )
        }
    })

    return (
        <ul className="app-list list-group">
       {elements}
        </ul>
    )
}
export default Postlist; 