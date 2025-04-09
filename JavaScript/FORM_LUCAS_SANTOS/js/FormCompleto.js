function mascara(o, f){
    objeto=o
    funcao=f
    setTimeout("executaMascara()",1)
}

function executaMascara(){
    objeto.value=funcao(objeto.value)
}

function telefone(variavel){
    variavel=variavel.replace(/\D/g,"") //Remove tudo o que não é dígito

    //A LINHA ABAIXO É RESPONSAVEL DE ADICIONAR PARENTESES EM VOLTA DOS DOIS PRIMEIROS DIGITOS
    variavel=variavel.replace(/^(\d\d)(\d)/g,"($1) $2")
    
    //A LINHA ABAIXO É RESPONSAVEL DE ADICIONAR O HÍFEN ENTRE O QUARTO E O QUINTO DIGITO
    variavel=variavel.replace(/(\d{5})(\d)/,"$1-$2")
    
    return variavel
}

function CPF (variavel){
    variavel=variavel.replace(/\D/g,"") //Remove tudo o que não é dígito

    //COLOCA PONTO ENTRE O TERCEIRO E O QUARTO DIGITO
    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2")

    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2")

    //COLOCA PONTO ENTRE O SEXTO E O SETIMO DIGITO
    variavel=variavel.replace(/(\d{3})(\d)/,"$1-$2")

    return variavel
}

function RG (variavel){
    variavel=variavel.replace(/\D/g,"") //Remove tudo o que não é dígito


    variavel=variavel.replace(/(\d{1})(\d)/,"$1.$2")

    variavel=variavel.replace(/(\d{3})(\d)/,"$1.$2")

    return variavel
}

function cep(variavel){
    variavel=variavel.replace(/\D/g,"") //Remove tudo o que não é dígito

    variavel=variavel.replace(/(\d{3})(\d{1,2})$/,"$1-$2")

    return variavel
}

function removeDigitos(variavel) {
    return variavel.replace(/\d/g, ""); // Remove todos os dígitos
}

function removeLetras(variavel) {
    return variavel.replace(/\D/g,""); // Remove todos os dígitos
}

