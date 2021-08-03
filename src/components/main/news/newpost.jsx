import s from './newpost.module.css'
import React from "react"


function newPost(props) {


    let newElement = React.createRef()
    let newElemenTitle = React.createRef()
    let newElementext = React.createRef()
    let addPost = () => {

        let url = newElement.current.value
        let title = newElemenTitle.current.value
        let text = newElementext.current.value

        props.state.addPost(url, title, text)
    }
    return (
            <div className={s.Main}>
                <div className={s.NewPost}>
                    <form onSubmit={(event)=> event.preventDefault()}>
                        <input type='url' placeholder='URL картинки' ref={newElement} />
                        <input type='title' placeholder='Заголовок' ref={newElemenTitle} />
                        <input type='text' placeholder='Текст поста' ref={newElementext} />
                        <button onClick={addPost}>Создать Текст </button>
                    </form>
                </div>
            </div>
    )}

    export default newPost
