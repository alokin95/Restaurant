export default function getMenu(xml, type) {
  let obj = JSON.parse(xml.responseText);
  let number;
  let text="";

  (function(){ 
  let gold = document.getElementById("gold");
     while (gold.hasChildNodes()) {
         gold.removeChild(gold.firstChild);
     }
   }) ();

  (function (){
    let heading=document.createElement('h1');
    let headingText=document.createTextNode(type);
    heading.appendChild(headingText);
    let gold=document.createElement('img');
    gold.setAttribute('src','images/other/gold.png');
    document.getElementById('gold').appendChild(heading);
    document.getElementById('gold').appendChild(gold);
  })();

  if (type=="DINNER"){
    number=0;
    text="";
  }
  else if (type=='LUNCH'){
    number=1;
    text="";
  }
  else if (type=='CATERING'){
    number=2;
    text="";
  }
  for (let i=0;i<obj[number][type].length;i++){
    let name=obj[number][type][i].name;
    let desc=obj[number][type][i].desc;
	text+=`<div class='recipe'><h4>${name}</h4><p>${desc}</p></div>`;
    document.getElementById('recipes').innerHTML=text;
  }
}