addEventListener()


function addEventListener(){
    let form = document.querySelector('#form')
    form.addEventListener('submit', journalEntry)
}

 async function journalEntry(e){
    e.preventDefault()
     let inputBox = document.querySelector('#inputBox')
     let user = document.querySelector('#user')
     let date = document.querySelector('#date')
     let entry = document.querySelector('#entry')
//     let textcontent = inputBox.value
// console.log(textcontent)

const result = await fetch('http://localhost:3333/mvp', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({
        name: inputBox.value, 
        user_: user.value,
        entry_date:date.value,
        entry:entry.value
    })
})

const data = await result.json()
console.log(data)
 }

//  function addEventListener(id){

//  }