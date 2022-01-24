console.log('Welcome to MyNotes!');
shownotes();


let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {
  let addtxt = document.querySelector('.addtxt');
  let addtitle = document.querySelector('.addtitle');

  let notes = localStorage.getItem('notes');
  let notesobj;
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  let obj={
    text:addtxt.value,
    title:addtitle.value
  };
  notesobj.push(obj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  addtitle.value = "";
  shownotes();
})

function shownotes() {
  let notes = localStorage.getItem('notes');
  let notesobj;
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(
    function (element, index,) {
      html += `<div class="card mx-3 my-3 note" style="width: 18rem;">
      
      <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text cardio" id="para">${element.text}</p>
        <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
      </div>
    </div>`

    });
  let noteselm = document.getElementById('notes');
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  }
  else {
    noteselm.innerHTML = `Nothing to show!`;
  }
}

function deletenote(index){
  let notes = localStorage.getItem('notes');
  let notesobj;
  if (notes == null) {
    notesobj = [];
  }
  else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  shownotes();

}

let search=document.getElementById('search');
search.addEventListener('input',function(){
  let inputval=search.value.toLowerCase();
  // console.log('Search event working!',inputval);
  let cards=document.getElementsByClassName('note');
  
  Array.from(cards).forEach(function(element){
    
    let cardTxt = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
    // console.log(cardTxt);
    if(cardTxt.includes(inputval))
    {
      element.style.display="block";
    }
    else{
      element.style.display="none";
    }
    })
})


