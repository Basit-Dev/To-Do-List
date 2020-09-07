function addItem(){
    var ul = document.getElementById("dynamic-list");
    var enterItem = document.getElementById("enter-item");
    var li = document.createElement("ul");
    li.setAttribute('id',enterItem.value);
    li.appendChild(document.createTextNode(enterItem.value));
    ul.appendChild(li);
    document.getElementById("dynamic-list").style.backgroundColor = "rgb(79, 185, 185";
    return reset();
}

function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var enterItem = document.getElementById("enter-item");
    var item = document.getElementById(enterItem.value);
    ul.removeChild(item);
}

function reset(){
    var resetButton = document.getElementById("enter-item");
    if(resetButton){
    resetButton.value= "";
    }
    }
    
    