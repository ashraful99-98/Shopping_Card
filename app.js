function updateproductNumber(product, price, isIncrrasing) {
    const caseInput = document.getElementById(product + '-number');
    let productNumber = caseInput.value;
    if (isIncrrasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total 
    calculateTotal();

}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the HTML 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

// phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateproductNumber('phone', 1219, false);
})
// handle even increase and decrease 
document.getElementById('case-plus').addEventListener('click', function () {
    updateproductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateproductNumber('case', 59, false);

})



// document.getElementById('case-plus').addEventListener('click', function () {
//     Plus value 
//     const caseInput = document.getElementById('case-number');
//     const productNumber = caseInput.value;
//     caseInput.value = parseInt(productNumber) + 1;
// })

// minus value 
// document.getElementById('case-minus').addEventListener('click', function () {
//     const caseInput = document.getElementById('case-number');
//     const productNumber = caseInput.value;
//     caseInput.value = parseInt(productNumber) - 1;
// })