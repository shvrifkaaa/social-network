import s from './News.module.css'
import React from "react"
import Posts from './posts.jsx'




function NewsMain(props) {
   let post = props.state.post.map((elem) => {
            return ( < Posts state = {elem}/>  
               )
         })


         let newElement = React.createRef()
         let addPost = () => {

            let url = newElement.current.value
            let text = newElement.current.value
            let title = newElement.current.value

            props.state.addPost(url, text, title)
         }
         return (
            <div className={s.Main}>
               <div className={s.NewPost}>
                  <form onSubmit={(event)=> event.preventDefault()}>
                     <input type='url' placeholder='URL картинки' ref={newElement} />
                     <input type='title' placeholder='Заголовок' ref={newElement} />
                     {/* <input type='text' placeholder='Текст поста' ref={newElement} /> */}
                     <button onClick={addPost}>Создать Текст </button>

                  </form>
               </div>


               <div className={s.Posts}>
                     {post}
               </div>
            </div>
    )
                           
   }
export default NewsMain;