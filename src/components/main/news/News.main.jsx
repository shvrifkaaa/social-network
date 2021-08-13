import s from './News.module.css'
import React from "react"
import Posts from './posts.jsx'
import newPost from './newpost'
 



function NewsMain(props) {
   debugger

   let post = props.state.post.map((elem) => {
            return ( < Posts state = {elem}/>)
         })
         return (
            <div>
               {newPost}
               <div>
                  {post}
               </div>
            </div>

               
    )
                           
   }
export default NewsMain;