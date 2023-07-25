const currency = document.querySelector('#currency')
const currencyTo = document.querySelector('#currencyTo')
const input = document.querySelector('#input')
const convertBtn = document.querySelector('#convertBtn')
const res = document.querySelector('#res')

const handleConvert = () => {
    if (currencyTo.value === currency.value){
        alert('error')
    } else {
        fetch(`https://api.exchangerate.host/latest?base=${currencyTo.value}&symbols=${currency.value}&amount=${input.value}&places=2`)
            .then(response => response.json())
            .then(data => {
                res.innerHTML = `${input.value} ${currencyTo.value} = ${Object.values(data.rates)} ${currency.value} `
            })
    }


}
convertBtn.addEventListener('click', event  =>{
handleConvert()
})