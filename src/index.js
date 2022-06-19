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

const like = 0
const input = {}
function renderToys(toys) {
  const newValues = document.getElementById('toy-collection')
  const body = document.createElement('div')
  body.className = 'cardBody'
  body.textContent = `<h2>${toys.name}</h2>
  <img src="${toys.image}" class = "toy-avatar" />
  <p> 4 likes </p>
  <button class = "like-btn" id = "${toys.id}">Like </button>`
  newValues.appendChild(body); 
}

// Get request
fetch("http://localhost:3000/toys")
.then(res => res.json())
.then(toysData => toysData.forEach(toys =>renderToys(toys)))

// post request
const form = document.querySelector('.add-toy-form').addEventListener('submit',(e)=>{
  e.preventDefault();
  const inputName =document.querySelector('.input-text').value
  const image = document.querySelector('.input-text').value
  input.name = inputName
  input.image = image
  input.likes = likes

  fetch("http://localhost:3000/toys",{
    method: 'POST',
    headers: {
      "content-type": "application/json",
      accept:"application/json"
    },
    body: JSON.stringify(input)
  })
})

function increaseLikesCount(toys){
  let likesBtn = document.getElementById(`${toys.id}`)
  let likeCount = toys.likes
  console.log(likesBtn)
  likesBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let addLike = likeIncrease + 1

    fetch(`http://localhost:3000/toys/${toys.id}`,{
      method: 'PATCH',
      headers:{
        "content-type": "application/json",
        accept: 'application/json'
      },
      body: JSON.stringify({
        likes:"addLike"
      })
    })
    
  })
}
