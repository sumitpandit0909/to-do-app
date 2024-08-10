let inp = document.querySelector('input');
let btns = document.querySelector('button');
let list = document.querySelector('ul');
// let tasklist =document.querySelectorAll('li')

btns.addEventListener("click",function (){
    let newItem = document.createElement('li');
    let deltbn = document.createElement('a');
    deltbn.href = "#";
    console.log(deltbn)
    newItem.classList.add("task");
    deltbn.classList.add("del");
    deltbn.innerText="X"
    newItem.innerText = inp.value;
    newItem.append(deltbn);
    list.appendChild(newItem);
    
    inp.value ="";
})

list.addEventListener('click', function(event){
    // console.log(event.target.nodeName)
    if(event.target.nodeName=='A'){
        // console.log(event.target.parentElement)
        event.target.parentElement.remove();
    }
})