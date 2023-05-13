let news=[
    {id:1,title:"News1",content:"bla"},
    {id:2,title:"News2",content:"ble"},
    {id:3,title:"News3",content:"blu"}];

function readNews(){
    const template=document.getElementById("news-template").content.clone(true);
    var myId=news[0].id;
    var myTitle=news[0].title;
    var myContent=news[0].content;
    var myNews=`Current news id: ${myId}, title: ${myTitle}, content: ${myContent}`;

    template.querySelector("#news").innerText=myNews;
    template.querySelector("#news").innerText="Hello";
    
    document.querySelector('#news-display').appendChild(template);
}

function addCard() {
    const template = document.getElementById("card-template").content.cloneNode(true);
    var myId=news[0].id;
    var myTitle=news[0].title;
    var myContent=news[0].content;
    var myNews=`Current news id: ${myId}, title: ${myTitle}, content: ${myContent}`;

    template.querySelector('.card-title').innerText = myNews;
    document.querySelector('#card-list').appendChild(template);
}

