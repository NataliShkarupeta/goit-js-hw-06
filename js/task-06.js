const inputEl = document.querySelector('#validation-input');
console.log(inputEl);

inputEl.addEventListener('blur',onInputBlur)
    function onInputBlur(event){
      if (event.currentTarget.value.length !== 6){
        event.currentTarget.classList.add('invalid')
    } else
      event.currentTarget.classList.add('valid')
    }




