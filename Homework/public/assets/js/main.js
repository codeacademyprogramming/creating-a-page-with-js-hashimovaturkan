//dropdown
const dropdownBox = Array.from(document.querySelectorAll(".dropdown"));
const dropdownElement = Array.from(document.querySelectorAll(".dropdown__toggle"));

dropdownElement.forEach(function(element, index){
    element.addEventListener('click', ()=>{
        dropdownBox[index].classList.toggle("d-none");
        dropdownBox.forEach(function(elem,ind){
            if(elem!==dropdownBox[index])
            elem.classList.add("d-none");
        })
    }) 
});
// dokumente klikliyende baglansin ama document nen yazanda olmur
//alert
const alertCross=document.querySelector(".alert__cross");
const alert = document.querySelector(".alert");
alertCross.addEventListener('click', ()=>{
    alert.classList.add("d-none");
})

//mouse over ve click eyni anda nece olur
//sidebar-dropdown
const sidebarDropdown = Array.from(document.querySelectorAll("#sidebar-dropdown"));
const sidebarItem = Array.from(document.querySelectorAll(".sidebar__nav-item"));

sidebarItem.forEach((element,index)=>{
    element.addEventListener('click', ()=>{
        const found = document.querySelector(`[data-sidebar-dropdown = ${element.getAttribute('data-sidebar-item')}]`);
        found.classList.toggle("d-none");
        found.classList.remove("sidebar__alt");
        
    })
    element.onmouseover = function(){
        const found = document.querySelector(`[data-sidebar-dropdown = ${element.getAttribute('data-sidebar-item')}]`);
        found.classList.remove("d-none");
        found.classList.add("sidebar__alt");
    }
    element.onmouseout = function () {
        const found = document.querySelector(`[data-sidebar-dropdown = ${element.getAttribute('data-sidebar-item')}]`);
        found.classList.add("d-none");
        found.classList.remove("sidebar__alt");

        
    }
     
})

//collapse
const collapse = document.querySelector("#collapse");
const collapseText = Array.from(document.querySelectorAll(`[data-sidebar-text="text"]`));
const collapseLess = document.querySelector("#collapse #less");
const collapseGreater = document.querySelector("#collapse #greater");
const content = document.querySelector(".content");

const media = window.matchMedia("(max-width: 992px)")
myFunction(media) 
media.addEventListener("change",myFunction)

function myFunction(media) {
    if (media.matches) { 
        content.style.paddingLeft = "5rem";
        collapseText.forEach((element)=>{
            element.classList.add("d-none");
        })
        collapse.onclick = function(){
            collapseLess.classList.toggle("d-none");
            collapseGreater.classList.toggle("d-none");
            collapseText.forEach((element)=>{
                element.classList.toggle("d-none");
            })
            
            if(collapseGreater.classList.contains("d-none")){
                content.style.paddingLeft = "5rem";       
            }
        }
    } else {
        content.style.paddingLeft = "22.1rem";
        collapseText.forEach((element)=>{
            element.classList.remove("d-none");
        })
        collapse.onclick = function(){
            collapseLess.classList.toggle("d-none");
            collapseGreater.classList.toggle("d-none");
            collapseText.forEach((element)=>{
                element.classList.toggle("d-none");
            })
            
            if(collapseLess.classList.contains("d-none")){
                content.style.paddingLeft = "5rem";       
            }
            else{
                content.style.paddingLeft = "22.1rem";
            }
        }
    }
}



//button
const projectBtn = document.querySelector(".project__dropdown-btn");
const projectDropdown = document.querySelector(".project__details-dropdown");

projectBtn.addEventListener("click",()=>{
    projectDropdown.classList.toggle("d-none");
})


//copy

document.querySelector("#copy-btn").addEventListener("click", ()=>{
    let text = document.querySelector("#copy-text");
    let copyText = text.textContent;
    navigator.clipboard.writeText(copyText);
});

//star
const star = document.querySelector("#star");
const starCount = document.querySelector("#star-count");
const starText =document.querySelector("#star-text");

star.addEventListener("click",()=>{
    let starNumber = starCount.textContent;
    if(starText.textContent !=="Unstar"){
        starNumber++;
        starCount.innerHTML=starNumber;
        starText.innerHTML="Unstar";
    }else{
        starNumber--;
        starCount.innerHTML=starNumber;
        starText.innerHTML="Star";
        
    }
})






