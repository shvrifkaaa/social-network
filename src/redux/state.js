import {renderder} from './../render'
let state ={
    post:[
        {
            url:'https://vecherka.kg/2021/07/09/gorod1.jpg',
            title:'Осень пришла в июле',
            text:'Зеленые насаждения столицы проходят проверку на прочность сильной жарой и ограниченным объемом поливной воды.'
        },
        {
            url:'https://vecherka.kg/2021/07/09/gorod2.jpg',
            title:'ЧП на велодорожке',
            text:'В районе Моссовета велосипедист сбил женщину.'
        }

    ],

    addPost :(url, text, title)=>{

        state.post.push({
            url: url,
            text: text,
            title: title
        })
        renderder(state)
    }
    
}




export default state















    // newpost:[
    //     {
    //         url:'${props.NewsMain.url}   ',
    //         title:'   ',
    //         text:'   '
    //     }
    // ],