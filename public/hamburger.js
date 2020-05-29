document.getElementById('addBurger').addEventListener('click', event => {
 event.preventDefault()
 axios.post('/api/burgers', {
  title: document.getElementById('title').value
 })
  .then(({ data }) => {
   let burgerElem = document.createElement('li')
   burgerElem.innerHTML = `
        ${document.getElementById('title').value}
        <button class="deleteBurger" data-id="${data.insertId}">X</button>
      `
   document.getElementById('burgers').append(burgerElem)
  })
})

document.addEventListener('click', event => {
 if (event.target.className === 'deleteBurger') {
  axios.delete(`/api/burgers/${event.target.dataset.id}`)
   .then(() => {
    event.target.parentNode.remove()
   })
 }
})