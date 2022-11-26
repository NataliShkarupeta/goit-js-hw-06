
const allEl = document.querySelectorAll('.item');
console.log("Number of categories:",allEl.length);

const firstCategory =allEl[0].firstElementChild;
console.log("Category:",firstCategory.textContent); 
const quantityFirstCategory = allEl[0].lastElementChild.children;
console.log("Elements:", quantityFirstCategory.length)

const secondCategory = allEl[1].firstElementChild;
console.log("Category:",secondCategory.textContent)
const quantitySecondCategory = allEl[1].lastElementChild.children;
console.log("Elements:", quantitySecondCategory.length)

const thirdCategory = allEl[2].firstElementChild;
console.log("Category:",thirdCategory.textContent)
const quantityThirdtCategory = allEl[2].lastElementChild.children;
console.log("Elements:", quantityThirdtCategory.length)

