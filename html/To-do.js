let enter=document.querySelector("#entertask");
let button=document.querySelector(".btn");

button.addEventListener("click",function(){
    if(enter.value.trim() !== ""){
    const tasklist=document.createElement("li");
    document.getElementById("list").append(tasklist);
    tasklist.innerHTML=enter.value;
    enter.value="";
    deleteele(tasklist)
}});

function deleteele(tasklist){
    let dlt=document.createElement("button");
    dlt.textContent="Delete";
    tasklist.append(dlt);
    dlt.addEventListener("click",function(){
    tasklist.remove();
});
};

enter.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        button.click();
    };
});