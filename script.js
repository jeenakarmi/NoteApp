const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box")     //selects all notes

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);  //to display
})

// for delete operation
notesContainer.addEventListener("click",function(e)  //e as event object
{
    if(e.target.tagName ==="IMG")
    {
        e.target.parentElement.remove()
    }
})