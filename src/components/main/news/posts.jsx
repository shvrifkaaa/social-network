import s from './posts.module.css'

function Posts (props){
return(
          <post>
            <div className={s.Posts}>
              <div className={s.post1}>
                <img src={props.state.url} />
                <h1>{props.state.title}</h1>
                <p>{props.state.text} </p>
              </div>
            </div>
          </post>
)}

export default Posts