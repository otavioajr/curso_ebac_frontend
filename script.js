const form = document.getElementById('form-validacao');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroNumero = document.getElementById('primeiro-numero')
    const segundoNumero = document.getElementById('segundo-numero')
    const resultado = document.querySelector('.resultado')

    if (Number(segundoNumero.value) < Number(primeiroNumero.value)) {
        resultado.innerHTML = `O formulário é inválido. O segundo núemro (${segundoNumero.value}) é menor que o primeiro número (${primeiroNumero.value})`
        resultado.style.background = 'red';
        resultado.style.display = 'block';
    } else {
        resultado.innerHTML = `O formulário é válido. O segundo núemro (${segundoNumero.value}) é maior que o primeiro número (${primeiroNumero.value})`
        resultado.style.background = 'green';
        resultado.style.display = 'block';
    }
})