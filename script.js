// Adicionando as oções de mes e ano

for(let n = 1; n<=12; n++){
    let option = document.createElement('option')
    if(n < 10 ){ n = '0'+ n}
    option.innerHTML = n
    option.value = n
    imes.appendChild(option)
}

for (let a = 2023; a<=2050; a++){
    let option = document.createElement('option')
    option.innerHTML = a
    option.value = a
    iano.appendChild(option)
}

//Validações e atualizacções

const inpt = form.querySelectorAll('.requerido')
const p = form.querySelectorAll('.p_requerido')
let nome, num, cvc = false

function erro(n){ // marca o local de erro
    p[n].style.display = 'block'
    inpt[n].style.border = '2px solid var(--vermelho)'
}

function removeErro(n){ // desmarca o local de erro
    p[n].style.display = 'none'
    inpt[n].style.border =''
}

function validarNome(){ // verifica e atualiza em tempo real o campo nome
    cardNome.innerText = inpt[0].value
    if (cardNome.textContent.length === 0){
        cardNome.innerHTML = 'MARIA F. DA SILVA'
    }
    if(inpt[0].value.length <= 3 || (/\d/).test(inpt[0].value)){
        erro(0)
        nome = false
    }else{
        removeErro(0)
        nome = true
    }
}

function validarNum(){ // verifica e atualiza em tempo real o campo número
    cardNum.innerHTML = inpt[1].value
    if(cardNum.textContent.length == 4 || cardNum.textContent.length == 9 || cardNum.textContent.length == 14){
        cardNum.innerHTML += " "
        inpt[1].value += " " 
    }else if(cardNum.textContent.length === 0){
        cardNum.innerHTML = '0000 0000 0000 0000'
    }
    if(inpt[1].value.length<=18 || /[a-zA-Z]/.test(inpt[1].value)){
        erro(1)
        num = false
    }else{
        removeErro(1)
        num = true
    }
}

function validarMes(){ // atualiza o campo mes
    cardMes.innerHTML = inpt[2].value
    if (inpt[2].value === ''){
        cardMes.innerHTML = '00' 
    }
}

function validarAno(){ // atualiza o campo ano
    cardAno.innerHTML = inpt[3].value.slice(-2)
    if (inpt[3].value === ''){
        cardAno.innerHTML = '00' 
    }
}

function validarCvc(){ // atualiza e valida o campo cvc
    cardCvc.innerHTML = inpt[4].value
    if (cardCvc.textContent.length === 0){
        cardCvc.innerHTML = '000'
    }
    if(inpt[4].value.length != 3 || /[a-zA-Z]/.test(inpt[4].value)){
        erro(4)
        cvc = false
    }else{
        removeErro(4)
        cvc = true
    }
}

let close = document.querySelector('#close') // limpa o campo número
close.addEventListener('click',()=>{
    inpt[1].value = ''
    inpt[1].focus()
    validarNum()
})

form.addEventListener('submit', (event) => { // valida todo o formulario e chama a tela final
    event.preventDefault()
    validarNome()
    validarNum()
    validarMes()
    validarAno()
    validarCvc()
    if (nome && num && cvc){
        formulario.style.display ='none'
        final.style.display = 'flex'
    }
})

function recarregar(){ // recarrega a página
    window.location.reload()
}