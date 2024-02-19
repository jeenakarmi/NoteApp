const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box")     //selects all notes


//showing notes if in localstorage
function showNotes() 
{
    notesContainer.innerHTML = localStorage.getItem("notes"); 
}

// Retrieve notes from local storage when the page loads
showNotes();

function updateStorage()
{
    // all written in notesContainer will store in browser with name notes
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    img.addEventListener("mousedown", (event) => {
        // Prevent the event from propagating (bubbling) up the DOM tree
        event.stopPropagation();
    });

    inputBox.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && isCaretAtStart(inputBox)) {
            event.preventDefault();  //prevent the default action of the "Backspace" key
        }
    });

    // Event listener for creating new note
    img.addEventListener("click", () => {
        inputBox.remove();
        updateStorage();
    });

    notesContainer.appendChild(inputBox).appendChild(img);
});

function isCaretAtStart(element) {
    // Get the cursor position (caret) within the element
    const selection = window.getSelection();

    // Check if there's any text selected in the element, and if the cursor is at the very beginning
    // If the cursor is at the beginning and there's no selected text, we return true; otherwise, false
    return selection.rangeCount > 0 && selection.getRangeAt(0).startOffset === 0;
}

// for delete operation
notesContainer.addEventListener("click",function(e)  //e as event object
{
    if(e.target.tagName ==="IMG")
    {
        e.target.parentElement.remove()
        updateStorage();  //updating after deletion
    } 
    //when write in p element it will update
    else if(e.target.tagName === "P") 
    {
        notes = document.querySelectorAll(".input-box");
        //update data for all notes
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

// Event listener for detecting changes in notes
notesContainer.addEventListener("input", () => {
    updateStorage();
});