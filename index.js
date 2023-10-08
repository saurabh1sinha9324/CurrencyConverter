const currencyFirstEl = document.getElementById ("currency-first");
const worthFirstEl = document.getElementById
("worth-first")
const currencySecondE1 = document.getElementById
("currency-second");
const worthSecondEl
=
document.getElementById
("worth-second")
const exchangeRateEl = document.getElementById
("exchange-rate")

updateRate()

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/24644b89115df049ae0b8bd7/latest/${currencyFirstEl.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecondE1.value]; 
        console.log(rate);
        exchangeRateEl.innerText =`1 ${currencyFirstEl.value} = ${rate + " " +currencySecondE1.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3);
});
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondE1.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)