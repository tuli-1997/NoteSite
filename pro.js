//if user add a note add it to the localstorage
//line47 and 45 in html

let notesobj = [];
showNotes();
let addbtn = document.getElementById('addbtn');
let addtext = document.getElementById("addtext");

addbtn.addEventListener("click", function (e) {
    if (e) {
        console.log(e);
    }
    let notes = localStorage.getItem("notes")//use to search if any notes allready prsent in localhost or not

    if (notes == null) {
        notesobj.length = 0;
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);//if anyone click on add button then it will push into a node
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj.length = 0;
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
         <div class="noteCard my-2 mx-2" style="width: 18rem;">
         <div class=" card-body">
             <h5 class="card-title">My Note${index + 1} </h5>
             <p class="card-text">${element}</p>
             <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
         </div>
     </div>`;
        //(this.id)=though this.id the id of that element which we click direct goes to the onclick function
    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! "Add" your data`
    }
}
//function to delete a note
function deleteNote(index) {
    console.log('I am deleting', index);
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesobj.length = 0;
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}
let search = document.getElementById('searchtype');
search.addEventListener("input",function(){
    
    let inputVal=search.value.toLowerCase();
    console.log('input event fired!',inputVal);
let noteCards = document.getElementsByClassName('noteCard');
Array.from(noteCards).forEach(function(element){
      
    let cardtxt=element.getElementsByTagName("p")[0].innerText;
    //console.log(cardtxt);
    if(cardtxt.includes(inputVal)){
        element.style.display="block";
    }
    else{
        element.style.display="none";

    }
})
      
})
