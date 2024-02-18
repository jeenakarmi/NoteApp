const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box")     //selects all notes

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
    }
})
