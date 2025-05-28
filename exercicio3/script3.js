function somar() {
    
    let nome
    let nota1
    let nota2
    let nota3

    nome = window.prompt("Digite aqui seu nome: ")
    nota1 = Number(window.prompt(" Ola " + nome + "!" + " Digite aqui sua primeira nota " ));
    nota2 = Number(window.prompt("digite aqui sua segunda nota "));
    nota2 = Number(window.prompt("digite aqui sua terceira nota "));

    let resultado = nota1 + nota2 + nota3 

       if (resultado< 60 ) {
         alert(" Não passou " + resultado + " e menor que 60 ");
       }  else{                                                  
           alert(" Passou! " + resultado + " e maior ou igual a 60 ");

}
        
       }






