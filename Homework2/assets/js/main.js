const addElement = document.querySelector(".plan__add");
const input = document.querySelector("#plan-input");
let listItem = [];
const list = document.querySelector(".plan__list");
const saveBox=document.querySelector(".plan__save");
const cancel=document.querySelector(".plan__input-cancel");
const dropdown = document.querySelector(".plan__completed");

input.addEventListener("input",(event)=>{
    if(!event.target.value){
        cancel.classList.add("d-none");
    }
    else{
        cancel.classList.remove("d-none");
        cancelFunc();
    }
})

const cancelFunc = function(){
    cancel.addEventListener("click",()=>{
        clearFunc();
    })
}

const clearFunc = function(){
    input.value="";
    cancel.classList.add("d-none");
}

addElement.addEventListener("click",()=>{
    
    if(!input.value){
        alert("Please, enter anything...");
    }
    else{
        const obj = listItemMaker(input.value);
        listItemAdd(obj);
        listItemDelete(obj);
        listItemCompleted();
        listItemEdit(obj);
        listItemSave(obj);
    }
})

input.addEventListener("keyup",(e)=>{
    if(e.code==="Enter"){
        if(!input.value){
            alert("Please, enter anything...");
        }
        else{
            const obj = listItemMaker(input.value);
            listItemAdd(obj);
            listItemDelete(obj);
            listItemCompleted();
            listItemEdit(obj);
            listItemSave(obj);
        }
    }
})

const listItemMaker = function(value){
        const listItemObj ={};
        const date =new Date();
        listItemObj.id=date.getTime();
        listItemObj.item=value;
        listItemObj.time=`${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        listItem.push(listItemObj);
        return listItemObj;
        

}

const listItemAdd = function(listItemObj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const spanMain = document.createElement('span');
    const btnDelete = document.createElement('button');
    const btnComplete = document.createElement('button');
    const btnEdit = document.createElement('button');
    const btnSave=document.createElement("button");
    
        li.className = 'list-group-item';
        btnDelete.classList.add("btn","btn-danger","plan__bg","float-end","mx-1");
        btnDelete.innerText="Delete";
        btnComplete.classList.add("btn","btn-warning","plan__bg","float-end","mx-1");
        btnComplete.innerText="Completed";
        btnEdit.classList.add("btn","btn-primary","plan__bg","float-end","mx-1");
        btnEdit.innerText="Edit";
        btnSave.classList.add("plan__input-save","d-none");
        btnSave.innerText="Save";
        span.innerText=`Date: ${listItemObj.time}`;
        span.classList.add("text-muted");
        spanMain.innerText=listItemObj.item;
            
            li.append(div);
            li.prepend(spanMain);
            div.prepend(span);
            div.append(btnDelete);
            div.append(btnComplete);
            div.append(btnEdit);
            list.prepend(li);
            saveBox.prepend(btnSave);
                            
        clearFunc();

}



const listItemDelete = function (obj){
    const btnDelete = document.querySelector(".btn-danger");
    const li=document.querySelector(".list-group-item");
    btnDelete.addEventListener("click",()=>{
        li.remove(); 
        listItem.forEach((element,index)=>{
            if(obj.id===element.id){
                listItem.splice(index,1);
            }
        })
    });
    
}

const listItemCompleted = function(){
    const btnCompleted = document.querySelector(".btn-warning");
    const span = document.querySelector("li span");
    btnCompleted.addEventListener("click",()=>{
        span.classList.toggle("plan__text-decoration");
        clearFunc();
        
    });

}

const listItemEdit = function(obj){
    const btnEdit = document.querySelector(".btn-primary");
    const input = document.querySelector("input");
    const saveBtn=document.querySelector(".plan__input-save");
    const addBtn = document.querySelector(".plan__add");
    btnEdit.addEventListener("click",()=>{
        input.value=obj.item;
        saveBtn.classList.remove("d-none");
        addBtn.classList.add("d-none");
        
        
    });

    
      
}

const listItemSave = function(obj){
    const spanItem = document.querySelector("li span");
    const spanTime = document.querySelector(".text-muted");
    const saveBtn=document.querySelector(".plan__input-save");
    const addBtn = document.querySelector(".plan__add");

    saveBtn.addEventListener("click",()=>{
        const date =new Date();
        obj.time=`Date: ${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        spanItem.textContent=input.value;
        spanTime.textContent=obj.time;
        obj.item=input.value;
        saveBtn.classList.add("d-none");
        addBtn.classList.remove("d-none");
        clearFunc(); 
        
    });
}

const listItemShow = function(){
    const modeItem = Array.from(document.querySelectorAll(".plan__list-item"));
    let currentMode="All";
    dropdown.addEventListener("click",()=>{
        
        modeItem.forEach((element)=>{
            
            element.classList.add("d-inline-block");
            element.removeAttribute("data-current");
            element.addEventListener("click",()=>{
                element.setAttribute("data-current","current-mode");
                currentMode=element.textContent;
                modeItem.forEach((e)=>{
                    e.classList.remove("d-inline-block");
                })
                
                if(currentMode==="All"){
                    const text1=document.querySelectorAll(".list-group-item");
                    text1.forEach((textItem)=>{
                        textItem.classList.remove("d-none");
                        
                    })
                }else if(currentMode==="Uncompleted"){
                    const text1=document.querySelectorAll(".list-group-item");
                    text1.forEach((textItem)=>{
                        textItem.classList.remove("d-none");
                    })
                    const text2=document.querySelectorAll(".plan__text-decoration");
                    text2.forEach((textItem)=>{
                        textItem.parentElement.classList.add("d-none");
                    })
                }else if(currentMode==="Completed"){
                    const text1=document.querySelectorAll(".list-group-item");
                    text1.forEach((textItem)=>{
                        textItem.classList.remove("d-none");
                    })
                    const textSign=document.querySelectorAll(".plan__text-decoration");
                    const text3=document.querySelectorAll(".list-group-item");
                    text3.forEach((textItem)=>{
                        textItem.classList.add("d-none");
                    })
                    textSign.forEach((textItem)=>{
                        textItem.parentElement.classList.remove("d-none");
                    })
                }

            })
            
        })
        
    })
    
}
listItemShow();
