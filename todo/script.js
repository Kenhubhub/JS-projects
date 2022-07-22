const add_button = document.querySelector(".btn");
const bar = document.querySelector("#bar");
const list = document.querySelector("#item-store")
const search = document.querySelector("#search");
search.setAttribute("placeholder","Search task here");
let pattern = /[A-Za-z]{4,}/
add_button.addEventListener("click", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(!pattern.test(bar.value)){
        alert("Task too short!");
    }else{
        let new_todo = document.createElement("div");
        new_todo.classList.add("item");
        new_todo.classList.add("text-white");
        new_todo.classList.add("px-3");
        new_todo.classList.add("my-2");
        new_todo.innerText = bar.value;
        new_todo.innerHTML+=(`<i class="fa-solid fa-dumpster bg-danger p-3"></i>`);
        bar.value = ""
        list.append(new_todo);
    }
    
})

list.addEventListener("click",(e) => {
    if(e.target.classList.contains("fa-dumpster")){
        e.target.parentElement.remove();
    }
})

search.addEventListener('keyup', e => {
    let filter_word = e.target.value.trim();
    let todos = list.children;
    if(e.target.value.trim() != ""){

        Array.from(todos).forEach( (todo) => {
            todo.style.display = "none";
        })
    }else{
        Array.from(todos).forEach( (todo) => {
            todo.style.display = "";
        })
    }
    let filtered = Array.from(todos).filter( (todo) => {
        
        return todo.textContent.includes(filter_word);
       
    })
    
    filtered.forEach((element) => {
        element.style.display = "";
    })
   

})
