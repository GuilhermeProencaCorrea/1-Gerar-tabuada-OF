function gerarTabuada(){
    let fator1 = document.getElementById("input1").value;
    let limite = document.getElementById("input2").value;
    let text = "";
   
    for (let i = 0; i <= limite; i++) {
    text+=`${fator1} * ${i} = ${fator1*i}<br>`;
    document.getElementById("construir").innerHTML=text;

        
    }
}
