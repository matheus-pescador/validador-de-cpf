function captureCPF() {
  cpf = document.getElementById('cpf').value

  if (validateCPF(cpf)) {
    let result = document.getElementById('result');
    result.innerHTML = "CPF Válido";
    result.style.color = "green"
  } else {
    let result = document.getElementById('result');
    result.innerHTML = "CPF Inválido";
    result.style.color = "red"
  }
}

function validateCPF() {  
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  var sum = 0;
  for (var i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var rest = sum % 11;
  var verifyingdigit1 = rest < 2 ? 0 : 11 - rest;

  if (parseInt(cpf.charAt(9)) !== verifyingdigit1) {
    return false;
  }

  sum = 0;
  for (var i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }

  rest = sum % 11;
  var verifyingdigit2 = rest < 2 ? 0 : 11 - rest;

  if (parseInt(cpf.charAt(10)) !== verifyingdigit2) {
    return false;
  }

  return true;
}
