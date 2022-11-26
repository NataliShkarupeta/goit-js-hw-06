
//     <form class="login-form">
//     <label>
//       Email
//       <input type="email" name="email" />
//     </label>
//     <label>
//       Password
//       <input type="password" name="password" />
//     </label>
//     <button type="submit">Login</button>
//   </form>

const form = document.querySelector('.login-form ')
const inputEl = document.querySelector('input')
console.log(form)
console.log(inputEl)


form.addEventListener('submit',processingForm)

function processingForm (event){
    event.preventDefault();
 
     const formElements = event.currentTarget.elements;
     const email = formElements.email.value;
     const password = formElements.password.value;

     if(email === '' || password === '')
        alert('Заповнить усі поля!!!')
    
    const dataForm = {
        email,
        password
     }
    console.log(dataForm)
    event.currentTarget.reset()
}


