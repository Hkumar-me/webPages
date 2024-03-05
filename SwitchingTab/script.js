let tabs = document.querySelectorAll('.tab');
let tabContents = document.querySelectorAll('.content');


tabContents[0].style.display="flex";
tabContents[0].style.width="50%";
tabs.forEach((elem, index)=>{
    elem.addEventListener("click", ()=>{
        hideOthers();
        tabContents[index].style.display="flex";
        tabContents[index].style.width="50%";
    })
})

function hideOthers(){
    tabContents.forEach((elem)=>{
        elem.style.display="none";
    })
}
