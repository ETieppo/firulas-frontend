var rateNumber = 0;
function rateSelection(num){
    num = String(num);
    rateNumber = num;
    const botao = document.getElementById(num);
    botao.classList.add('laranja');
    for (let x = 1; x <= 5; x++){
        if(x != num){
            var remover = document.getElementById(String(x));
            remover.classList.remove('laranja');
        }
    }
}

function redireciona(){
    window.location.href = 'rated.html?rate=' + rateNumber;
}
