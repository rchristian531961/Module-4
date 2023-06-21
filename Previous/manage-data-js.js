let news=[
    {id:1,title:"News1",content:"bla"},
    {id:2,title:"News2",content:"ble"},
    {id:3,title:"News3",content:"blu"}];

function readNews() {
    const template = document.getElementById("news-template").content.cloneNode(true);
    var myId=news[0].id;
    var myTitle=news[0].title;
    var myContent=news[0].content;
    var myNews=`Current news id: ${myId}, title: ${myTitle}, content: ${myContent}`;

    template.querySelector('#news').innerText = myNews;
    document.querySelector('#news-output').appendChild(template);
    news.push(news.shift());
}

function displayNews(){
    return setInterval(()=>{readNews()},2000);
}

function cancelDisplay(){ //Try to work?
    clearInterval(()=>{displayNews()})
}




