(()=> {
    let toDoListArray=[];
    const form=document.querySelector(".form");
    const input=document.querySelector(".form_input");
    const ul=document.querySelector(".toDoList");


    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let itemId=String(Date.now());
        let toDoItem=input.value;
        addItemToDOM(itemId, toDoItem);
        addItemTOArray(itemId, toDoItem);
        input.value="";
    });

    ul.addEventListener("click",()=>{
        let id=e.target.getAttribute("data-id");
        if(!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });


    function addItemToDOM(itemId, toDoItem){
        const li=document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText=toDoItem;
        ul.appendChild(li);
    }

    function addItemTOArray(itemId,toDoItem){
        toDoListArray.push(itemId,toDoItem);
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id){
        var li=document.querySelector('[data-id="' + id + '"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id){
        toDoListArray=toDoListArray.filter((item)=> item.itemId !==id);
        console.log(toDoListArray);
    }
})();