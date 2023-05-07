
var myArr=["Audi","BMW", "Ford","Honda","Jaguar","Nissan"];

function showContent(){
  var temp,item,a,i;    
  temp=document.getElementsByTagName("template")[0];
  item=temp.content.querySelector("div");
  for (i=0;i<myArr.length;i++){
    a=document.importNode(item,true);
    a.textContent+=myArr[i];
    document.body.appendChild(a);
  }
}

//Clone the template tag first
const main=document.getElementById('wrap');//reference to html wrap object
const template=document.getElementById('card-template');//reference to html card-template
const content=template.content.cloneNode(true); //contains all html of template
main.appendChild(content);//added to the wrap element from template

const content2=template.content.cloneNode(true);
main.append(content2);

