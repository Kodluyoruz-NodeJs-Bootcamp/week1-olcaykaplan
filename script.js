const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach((e) => {
  e.addEventListener("dragstart", handleDragStart);
});
droppableElements.forEach((e) => {
  e.addEventListener("dragover", handleDragOver);
  e.addEventListener("dragenter", handleDragEnter);
  e.addEventListener("dragleave", handleDragLeave);
  e.addEventListener("drop", handleDrop);
});

//functions
function handleDragStart(e) {
    // set the data by the dragged element color
  e.dataTransfer.setData("color", e.target.style.backgroundColor);
}

// when you drag and move on a valid drop target,
// this event trigger and continue to trigger (every few hundred milliseconds) until you leave the valid drop target
function handleDragOver(e) {
  e.preventDefault();
}
// when you drag and move on a valid drop target, this event trigger
function handleDragEnter(e) {
    e.target.classList.add("droppable-hover");
}
// when you drag and move on a valid drop target,
// and leave the valid drop target this event trigger
// Note: if you drop your drag element on valid drop target it will not trigger.
function handleDragLeave(e) {
  e.target.classList.remove("droppable-hover");
}
// when you drag and move on a valid drop target and drop on it
// this event will be trigger
function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove("droppable-hover");
  const draggedElementColor = e.dataTransfer.getData("color");
  const dropFieldData = e.target.getAttribute("data-name");
  if (dropFieldData === draggedElementColor) {
      var draggableElement = document.getElementById(draggedElementColor)
      draggableElement.classList.add("dragged");
      draggableElement.innerHTML="Mathced!";
      draggableElement.setAttribute("draggable","false");
      e.target.classList.add("dropped")
      e.target.style.backgroundColor = draggedElementColor;
  }
}
/*
----draggable----
dragstart
drag
dragend
----droppable----
dragenter
dragover
dragleave
drop

*/
