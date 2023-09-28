import React from "react";

function Post() {
    return (

        <div className='post'>
            <div>
                <img src='https://techcrunch.com/wp-content/uploads/2022/08/GettyImages-1197780051.jpg?w=730&crop=1' alt="img" ></img>
            </div>
            <div className='content'>
                <h2>Cybersecurity firm Lumu raises $30M to detect network intrusions</h2>
                <p className='info'>
                    <a className='author'>Shah Alam</a>
                    <time>28-09-2023</time>
                </p>
                <p className='summary'>Lumu, a startup that helps enterprises identify and isolate security compromises, today announced that it raised $30 million in a Series B round led by Forgepoint Capital, $6 million of which is debt.</p>
            </div>
        </div>
    );
}
export default Post;