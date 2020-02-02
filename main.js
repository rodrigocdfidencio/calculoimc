const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso){
        alert ('Insira o peso')
        resultado ('Peso inválido', false)
        return
    }
    if (!altura){
        alert ('Insira a altura')
        resultado ('Peso inválido', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc);
    
    const msg = `Seu IMC é ${imc} e você está com ${nivelImc}.`;
    resultado(msg, true)
    // alert(msg)
})

    function getImc(peso, altura){
        const imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    function getNivelImc(imc){
        const nivel = ['o peso abaixo do recomendado', 'o peso normal', 'sobrepeso',
        'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']
        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5) return nivel[0];
    }
/*function resultado(msg) {
    const resultado = document.querySelector('#resultado')
    //resultado.innerHTML = `<p> ${peso.value}, ${altura.value}, ${imc.value}</p>`
    resultado.innerHTML = ''
    */

function criaP () {
    const p = document.createElement('h3');
    return p;
  }
  
  function resultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
  
    const p = criaP();
    if(isValid) {
        p.classList.add('valido')
    }else{
        p.classList.add('invalido')
    }
  
    p.innerHTML = msg;
    resultado.appendChild(p);
  
}
