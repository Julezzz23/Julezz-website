 const scriptURL = 'https://script.google.com/macros/s/AKfycbzhqjd33oLK2l10GtZgMLPB75yEW2EHvF1XgPUEeeXnhcUHHByNOrpRU3tTEJ1fhjKv/exec'

 const form = document.forms ['contact-form']

 form.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(scriptURL,{ method: 'POST', body: new FormData(form)})
    .then(response => alert("Salamat! na submit na ang iyong Form." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
 })