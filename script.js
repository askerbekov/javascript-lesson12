const currency = document.querySelector('#currency')
const currencyTo = document.querySelector('#currencyTo')
const input = document.querySelector('#input')
const convertBtn = document.querySelector('#convertBtn')
const res = document.querySelector('#res')

let curSymbol = {
    EUR:'€',
    USD:'$',
    GBP:'£',
    KGS:'лв',
}
const handleConvert = () => {
    // console.log(currencyTo.value
    if (currencyTo.value === currency.value){
        alert('error')
    } else {
        fetch(`https://api.exchangerate.host/latest?base=${currencyTo.value}&symbols=${currency.value}&amount=${input.value}&places=2`)
            .then(response => response.json())
            .then(data => {
                res.innerHTML = `${input.value} ${currencyTo.value = curSymbol[currencyTo.value]} = ${Object.values(data.rates)} ${currency.value = curSymbol[currency.value]} `
            })
    }


}
convertBtn.addEventListener('click', event  =>{
handleConvert()
})