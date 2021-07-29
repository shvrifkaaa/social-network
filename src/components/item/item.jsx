import s from './item.module.css'


function Item(props){
    return (
            <div className ={s.item}>
                <img src={props.url} alt="" />
                <div>
                    <h4>{props.name}</h4>
                    <p> {props.message}</p>
                </div>
            </div>
    )
}
export default Item