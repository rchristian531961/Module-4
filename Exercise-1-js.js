function addCard() {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = 'My Card Title';
    template.querySelector('.card-text').innerText = 'lorem ipsum ble bla';
    document.querySelector('#card-list').appendChild(template);
}

//  if ('content' in document.createElement('template')) {
//       addCard();
// }

const data=[{name:'bob',age:23}, {name:'alice',age:39}];

function addCardData(){
    //Can't just have const template (one variable)
    //It needs to reclone the object for every element
    for(i=0;i<data.length;i++){
        const template=document.getElementById("card-template").content.cloneNode(true);
        template.querySelector(".card-title").innerText=data[i].name;
        template.querySelector(".card-text").innerText=data[i].age;
        document.querySelector('#card-list').appendChild(template);
    }
}

const artist={
    name:"Van Gogh",
    portfolio:[{title:"portrait",
    url:"https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
    {title:"sky",url:"https://mymodernmet.com/wp/wpcontent/uploads/2020/11/White-house-night-van-gohworldwide-2.jpg"},
    ]
}

function portfolioList(){
    const template=document.getElementById("card-template-2").content.cloneNode(true);
    template.querySelector(".card-name").innerText=artist.name;
    template.querySelector(".card-title").innerText=artist.portfolio[0].title;
    var x=document.createElement("img");
    x.setAttribute("src",artist.portfolio[0].url);
    template.querySelector(".card-photo").appendChild(x);
    document.querySelector("#portfolio-list").appendChild(template);
}

function portfolioList_2(){
    for (i=0;i<artist.portfolio.length;i++){
        const template=document.getElementById("card-template-2").content.cloneNode(true); //copy of card-template tag
        template.querySelector(".card-name").innerText=artist.name;
        template.querySelector(".card-title").innerText=artist.portfolio[i].title;
        var cur_img=document.createElement("img");
        cur_img.setAttribute("src",artist.portfolio[i].url);
        template.querySelector(".card-photo").appendChild(cur_img);
        document.querySelector("#portfolio-list").appendChild(template);
    }
    
}