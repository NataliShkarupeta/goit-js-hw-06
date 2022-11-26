// {/* <div id="counter">
// <button type="button" data-action="decrement">-1</button>
// <span id="value">0</span>
// <button type="button" data-action="increment">+1</button>
// </div> */}

const counterRef = document.querySelector('#counter')
const decrementButtonEl = counterRef.firstElementChild;
const counterEl = document.querySelector('#value')
const incrementButtonEl = counterRef.lastElementChild;




decrementButtonEl.addEventListener('click',decrementButtonValue)
incrementButtonEl.addEventListener('click',incrementButtonValue)


function incrementButtonValue (){
    const counterValue = Number(counterEl.textContent);
    counterEl.textContent= counterValue + 1;}


function decrementButtonValue (){
    const counterValue = Number(counterEl.textContent);
    counterEl.textContent= counterValue - 1;}

// class Counter {
//     static refs = {
//         counterRef: document.querySelector('#counter'),
//         control:{
//             decrement: document.querySelector('#counter').firstElementChild,
//             increment: document.querySelector('#counter').lastElementChild,
//         },
//         value:document.querySelector('#value')
//     }

//     #value

//     constructor(value){
//         this.#value = value
//     }

//     decrement(){
//         this.#value += 1;
//         this.render();
//     }
//     increment(){
//         this.#value -= 1;
//         this.render();
//     }


//     eventListener (){
//             const {control:{decrement,increment}} = Counter.refs

//             console.log(decrement,increment)
//             decrement.addEventListener('click',this.decrement.bind(this));
//             increment.addEventListener('click',this.increment.bind(this));

//     }
 
//     render (){
//         const {value} = Counter.refs;
//         value.textContent = this.#value;
//     }
// }

// const myCounter = new Counter(0)


