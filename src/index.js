let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

let like=0
const inputInfo={ }
function renderToys(toys){
  const toyCollection=document.getElementById("toy-collection")
  const toyCard=document.createElement("div")
  toyCard.className="card"
  toyCard.innerHTML=`  <h2>${toys.name}</h2>
  <img src="${toys.image}" class="toy-avatar" />
  <p>4 Likes</p>
  <button class="like-btn" id="${toys.id}">Like ❤️</button>`
  toyCollection.appendChild(toyCard);
}
// get begins
fetch("http://localhost:3000/toys")
.then(res=>res.json())
.then(toysData=> toysData.forEach(toys=>renderToys(toys)))

// post starts here
const form=document.querySelector(".add-toy-form").addEventListener("submit",(e)=>{
  e.preventDefault()
  const inputName=document.querySelector(".input-text").value
  const inputImg=document.querySelector(".input-text").value
  inputInfo.name=inputName
  inputInfo.image=inputImg
  inputInfo.likes=like
 

  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers:{
      "content-Type":"application/json",
      accept:"application/json"
    },
    body:JSON.stringify(inputInfo)
  })
})

function increaseLikes(toys){
  let lykBtn=document.getElementById(`${toys.id}`)
  let likeIncrease=toys.likes
  console.log(lykBtn)
  lykBtn.addEventListener("click",(e)=>{ 
    e.preventDefault();

  let addLike =likeIncrease + 1

  fetch(`http://localhost:3000/toys/${toys.id}`, {
    method: "PATCH",
    headers:{
      "content-Type":"application/json",
      accept:"applicatio/json"
    },
    body:JSON.stringify({
      likes:"addLike"
    })
  })
  
  })
}