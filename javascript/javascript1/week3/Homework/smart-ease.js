const notes = [];

function saveNote(content, id) {
    notes.push({'content':content, 'id':id });
}


saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Pay bills", 3);


function getNote(id) {
    for (i=0; i<notes.length; i++){
        if (notes[i].id === id){
            return notes[i].content
        }
    }
}


console.log("The task is:", getNote(2));
console.log("The task is:", getNote(3));


function logOutNotesFormatted() {
    for (i=0; i<notes.length; i++){
        console.log("The note with id:", notes[i].id, "has the following note text:", notes[i].content)
    }

  }
  
  logOutNotesFormatted();

