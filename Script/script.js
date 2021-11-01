const bill = document.getElementById('bill');
const cinco = document.getElementById('cinco');
const dez = document.getElementById('dez');
const quinze = document.getElementById('quinze');
const vinteCinco = document.getElementById('vinteCinco');
const cinquenta = document.getElementById('cinquenta');
const custom = document.getElementById('botao');
const resetar = document.getElementsByClassName("r");
const person = document.getElementById('pessoas');
const tipCaunt = document.querySelector('#tipCaunt');
const totalCaunt = document.querySelector('#totalCaunt');
const deuRuim = document.querySelector('.zero');
let conta;
let pessoas;
let custumatizar;

// 5%
function cincoPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    cinco.onmouseout = function() { cinco.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    cinco.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    // sem o Number vai dar uma série de erros
    conta = Number(bill.value);
    pessoas = Number(person.value);
    // vai fazer com que os botões não funcionem caso os inputs não tenha nada
    if (conta === 0 || pessoas === 0) {
        deuRuim.classList.add('one');
        return; 
    }else{
        deuRuim.classList.remove('one');
    }
    // tip amount
    let result1 = conta * 0.05 / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);

};
// 10%
function dezPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    dez.onmouseout = function() { dez.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    dez.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    // sem o Number vai dar uma série de erros
    conta = Number(bill.value);
    pessoas = Number(person.value);
    if (conta === 0 || pessoas === 0) {
        deuRuim.classList.add('one');
        return; 
    }else{
        deuRuim.classList.remove('one');
    }
    // tip amount
    let result1 = conta * 0.1 / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);

};
// 15%
function quinzePorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    quinze.onmouseout = function() { quinze.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    quinze.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    // sem o Number vai dar uma série de erros
    conta = Number(bill.value);
    pessoas = Number(person.value);
    if (conta == false || pessoas == false) {
        deuRuim.classList.add('one');
        return;
    }else{
        deuRuim.classList.remove('one');
    }
    // tip amount
    let result1 = conta * 0.15 / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);

};
// 25%
function vinteCincoPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    vinteCinco.onmouseout = function() { vinteCinco.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    vinteCinco.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    // sem o Number vai dar uma série de erros
    conta = Number(bill.value);
    pessoas = Number(person.value);
    if (conta == false || pessoas == false) {
        deuRuim.classList.add('one');
        return;
    }else{
        deuRuim.classList.remove('one');
    }
    // tip amount
    let result1 = conta * 0.25 / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);
};
// 50%
function cinquentaPorcento() {
    // vai setar as cores ao clicar e ao sair de cima
    cinquenta.onmouseout = function() { cinquenta.style.backgroundColor = 'hsl(183, 100%, 15%)'; }
    cinquenta.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    // sem o Number vai dar uma série de erros
    conta = Number(bill.value);
    pessoas = Number(person.value);
    if (conta == false || pessoas == false) {
        deuRuim.classList.add('one');
        return;
    }else{
        deuRuim.classList.remove('one');
    }
    // tip amount
    let result1 = conta * 0.5 / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);
};
// Numero costumatizado
function custumerPorcent() {
    // vai setar as cores ao clicar e ao sair de cima
    custom.onmouseout = function() { custom.style.backgroundColor = 'rgb(255,255,255)'; }
    custom.style.backgroundColor = 'rgb(100, 202, 168)';

    // vai fazer  o calculo
    // sem o Number vai dar uma série de erros
    custumatizar = Number(custom.value) / 100;
    conta = Number(bill.value);
    pessoas = Number(person.value);
    if (conta === 0 || pessoas === 0 || custumatizar === 0) {
        deuRuim.classList.add('one');
        return;
    }else{
        deuRuim.classList.remove('one');
    }
    // tip amount
    let result1 = conta * custumatizar / pessoas;
    tipCaunt.innerHTML = parseFloat(result1).toFixed(2);
    // total
    let result2 = (result1 + conta) / pessoas;
    totalCaunt.innerHTML = parseFloat(result2).toFixed(2);
};
// vai resetar tudo
function Reset() {
    // esse location retorna sua localização atual no documento + o seu método reload(), que fará a página voltar a sua "posição" padrão.
    document.location.reload()

}