// <!-- <div class="note">
//             <div class="tool">
//                 <button>Save</button>
//                 <button>Delete</button>
//             </div>
//             <textarea name="" id=""></textarea>
//         </div> -->


const addBtn =document.querySelector('#addBtn');
const main=document.getElementById('main');
const saveNotes=()=>{
    const notes=document.querySelectorAll(".note textarea");
    const data=[];
    notes.forEach(
        (notes)=>data.push(notes.value)
    )
    if(data.length == 0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data))
    }
}
addBtn.addEventListener(
    'click', function (){
    addNote()
    })

const addNote = (text="")=> {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `<div class="tool">
                    <button class="save">Save</button>
                    <button class="delete">Delete</button>    
                    </div>
                    <textarea name="" id="">${text}</textarea>`;

    note.querySelector(".delete").addEventListener(
        'click',function (){
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".save").addEventListener('click', function(){saveNotes()})
    note.querySelector('textarea').addEventListener('focusout',function(){saveNotes()})
    main.appendChild(note);
    saveNotes();
}  

(
    function (){
        const notes=JSON.parse(localStorage.getItem("notes"));
        // console.log(notes);
        if(notes == null){
            addNote();
        }else{
            notes.forEach(
                (notes)=>{
                    addNote(notes)
                }
            )
        }
        
    }
)()
