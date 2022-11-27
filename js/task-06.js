const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur',onInputBlur)
    function onInputBlur(event){
   if (event.currentTarget.value.length !== 6){
        if(event.currentTarget.classList.contains('valid')) {
           event.currentTarget.classList.remove('valid')
        }
        event.currentTarget.classList.add('invalid')
    } else
        if(event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.remove('invalid')
        }
        event.currentTarget.classList.add('valid')
    }
