const elList= document.querySelector(".list");

for(i=0; i<30; i++){
    const newItem=document.createElement("li");
    const newButton= document.createElement("button");
    let newImg= document.createElement("img");
    newImg.setAttribute("src", "https://i.mycdn.me/i?r=AzGBqNaF5OQp2lMpnhRx4DEFIaHgA6Jv16KNeRRDDs7-HopqT_QCnR7h5Fe8qSovseo");
    newItem.setAttribute("class", "list__item");
    newButton.appendChild(newImg);
    newButton.setAttribute("class", "button");
    newItem.appendChild(newButton);
    
    elList.appendChild(newItem);

    newButton.addEventListener("click", e=>{

        newImg.setAttribute("class", "img")
    })
}