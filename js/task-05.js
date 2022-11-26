
 const inputEl = document.querySelector('#name-input')
 console.log(inputEl)
 const nameUserEl = document.querySelector('#name-output')
 console.log(nameUserEl)

 inputEl.addEventListener('input',onInputChange)

 function onInputChange(event){
    console.log(event.currentTarget.value);
    nameUserEl.textContent = event.currentTarget.value;
 }
