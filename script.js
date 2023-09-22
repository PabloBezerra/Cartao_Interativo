let dadoMes = document.querySelector('#imes')
let cardMes = document.querySelector('#mes')
let dadoAno = document.querySelector('#iano')
let cardAno = document.querySelector('#ano')
let dadoNome = document.querySelector('#inome')
let cardNome = document.querySelector('#nome')
let dadoNum = document.querySelector('#inum')
let cardNum = document.querySelector('#numero')
let dadoCvc = document.querySelector('#icvc')
let cardCvc = document.querySelector('#cvc')
let close = document.querySelector('#close')

for(let n = 1; n<=12; n++){
    let option = document.createElement('option')
    if(n < 10 ){ n = '0'+ n}
    option.innerHTML = n
    option.value = n
    dadoMes.appendChild(option)
}

for (let a = 2023; a<=2050; a++){
    let option = document.createElement('option')
    option.innerHTML = a
    option.value = a
    dadoAno.appendChild(option)
}

function atualizar(n){
    switch (n){
        case 1:
            cardNome.innerText = dadoNome.value
            if (cardNome.textContent.length === 0){
                cardNome.innerHTML = 'MARIA F. DA SILVA'
            }
            break
        case 2:
            cardNum.innerHTML = dadoNum.value
            if(cardNum.textContent.length == 4 || cardNum.textContent.length == 9 || cardNum.textContent.length == 14){
                cardNum.innerHTML += " "
                dadoNum.value += " " 
            }else if(cardNum.textContent.length === 0){
                cardNum.innerHTML = '0000 0000 0000 0000'
            }
            break
        case 3:
            cardMes.innerHTML = dadoMes.value
            if (dadoMes.value === ''){
                cardMes.innerHTML = '00' 
            }
            break
        case 4:
            cardAno.innerHTML = dadoAno.value.slice(-2)
            if (dadoAno.value === ''){
                cardAno.innerHTML = '00' 
            }
            break
        case 5:
            cardCvc.innerHTML = dadoCvc.value
            if (cardCvc.textContent.length === 0){
                cardCvc.innerHTML = '000'
            }
            break
    }
}
    
close.addEventListener('click',()=>{
    dadoNum.value = ''
    dadoNum.focus()
    atualizar(2)
})

function finalizar(){
    const p = document.createElement('p')
    if(dadoNome.value.match(/\d/)){
        p.innerHTML = 'Por favor! Insira um nome válido'
        dado_nome.appendChild(p)
        dadoNome.style.border = '2px solid var(--vermelho)'
    }else{
        dado_nome.removeChild(p)
        dadoNome.style.border = '2px solid var(--roxo_claro)'
    }
    if(/[a-zA-Z]/.test(dadoNum.value)){
        p.innerHTML = 'Por favor! Insira números válidos'
        dado_numero.appendChild(p)
        dadoNum.style.border = '2px solid var(--vermelho)'
    }else if(/[a-zA-Z]/.test(dadoCvc.value)){
        p.innerHTML = 'Por favor! Insira números válidos'
        dado_cvc.appendChild(p)
        dadoCvc.style.border = '2px solid var(--vermelho)'
    }
}
