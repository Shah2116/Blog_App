import React from "react";
import {format} from "date-fns";

function Post({_id,title,summary,cover,content,createdAt,author}) {
    return (

        <div className='post'>
            <div>
                <img src={'http://localhost:4000/' +cover} alt="img" ></img>
            </div>
            <div className='content'>
                <h2>{title}</h2>
                <p className='info'>
                    <a className='author'>Shah Alam</a>
                    <time>{format(new Date(createdAt),'MMM d, yyyy, HH:mm' )}</time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    );
}
export default Post;