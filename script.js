const inputBox=document.getElementById("input-box");
const listContainetr=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainetr.appendChild(li);
        let span=document.createElement("span");
        span.innerHtml="\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
}
listContainetr.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
     listContainer.innerHTML=localStorage.getItem("data");
}
showTask();