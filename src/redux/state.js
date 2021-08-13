import {renderder} from './../render'
let state ={
    addPost :(url, title, text)=>{

        state.post.push({
            url: url,
            title:title,
            text:text
        })
        renderder(state.post)
    },
MessagesPage:{
    dialogs:[
        {id: 1, name : 'Sharif'},
        {id: 2, name : 'Erna'},
        {id: 3, name : 'Aktan'},
        {id: 4, name : 'Eldar'},
        {id: 5, name : 'Filipp'},
        {id: 6, name : 'Emir'},
    ],        
    messages:[
        {id: 1, message : 'Hi'},
        {id: 2, message : 'HIHI'},
        {id: 3, message : 'IHIHI'},
        {id: 4, message : 'ABOBA'},
        {id: 5, message : 'AMOGUS'},
        {id: 6, message : 'AMOBUS'},
    ]},

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
]}
    
export default state










    // newpost:[
    //     {
    //         url:'${props.NewsMain.url}   ',
    //         title:'   ',
    //         text:'   '
    //     }
    // ],