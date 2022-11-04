for(i = 0; i<5; i++){
  const ol1 = document.createElement('ol');
  document.body.appendChild(ol1);
  const li1 = document.createElement('li');
  li1.innerText = "rad" + (i+1);
  li1.style.fontSize = i + "7px";
  li1.style.backgroundColor = `hsl(${150+(i*10)},93.33%,70.59%)`;
  li1.style.textAlign = "center";
  li1.style.margin = "5px";
  document.body.appendChild(li1)
}
const article = document.createElement('article');
document.body.appendChild(article);
article.style.border = "2px solid black";
article.style.display = 'flex';
article.style.justifyContent = 'space-evenly';
const ol1 = document.createElement('ol');
const ol2 = document.createElement('ol');
const ol3 = document.createElement('ol');

for(i = 0; i<10; i++){
  const listitem = document.createElement('li');
  ol1.style.backgroundColor = 'purple';
  listitem.innerText = i;
  listitem.style.listStyle = 'none';
  listitem.style.width = '50px';
  listitem.style.textAlign = 'left';
  ol1.style.padding = '8px';
  if(i%2===0){
    listitem.style.backgroundColor = 'black';
    listitem.style.color = 'white';
    if(i===4) listitem.style.background = 'transparent';
  }else{
    listitem.style.backgroundColor = 'white';
  }
  article.appendChild(ol1);
  ol1.appendChild(listitem);
}

for( i = 9; i>=0; i--){
    const listitem = document.createElement('li');
    ol2.style.backgroundColor = 'purple';
    listitem.innerText = i;
    listitem.style.listStyle = 'none';
    listitem.style.width = '50px';
    listitem.style.textAlign = 'center';
    ol2.style.padding = '8px';
    if(i%2===0){
      listitem.style.backgroundColor = 'black';
      listitem.style.color = 'white';
      if(i===8) listitem.style.background = 'transparent';
    }else{
      listitem.style.backgroundColor = 'white';
    }
    article.appendChild(ol2);
    ol2.appendChild(listitem);
}

['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'].forEach((siffra, i)=>{
  const listitem = document.createElement('li');
  ol3.style.backgroundColor = 'purple';
  listitem.innerText = siffra;
  listitem.style.listStyle = 'none';
  listitem.style.width = '50px';
  listitem.style.textAlign = 'left';
  ol3.style.padding = '8px';
  if(i%2===0){
    listitem.style.backgroundColor = 'black';
    listitem.style.color = 'white';
  }else{
    listitem.style.backgroundColor = 'white';
    if(i===5) listitem.style.background = 'transparent';
  }
  article.appendChild(ol3);
  ol3.appendChild(listitem);
})