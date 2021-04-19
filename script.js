let valorProjeto = "";
let diasEfetivos = "";
let horasDiarias = "";
let diasFerias = "";
let valorHora= "";

function calcular() {

  valorProjeto = document.getElementById("valorProjeto").value;
  diasEfetivos = document.getElementById("diasEfetivos").value;
  horasDiarias = document.getElementById("horasDiarias").value;
  diasFerias = document.getElementById("diasFerias").value;

    valorHora = (valorProjeto / (diasEfetivos * 4 * horasDiarias) ) + ( ( diasFerias * diasEfetivos * horasDiarias ) );
    if(isNaN(valorHora)){
      alert("Por favor, insira um valor válido");
    }else{
      document.getElementById("result").innerHTML = "R$ "+valorHora.toFixed(2);
    }
    

    
    
  
  }