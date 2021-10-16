let nomeTimeA = prompt("Digite o nome do time A.");
let nomeTimeB = prompt("Digite o nome do time B.");


let nometimeAhtml = document.getElementById("nomeTimeA")
let nometimeBhtml = document.getElementById("nomeTimeB")

let pontoAhtml = document.getElementById("pontuacaoA")
let pontoBhtml = document.getElementById("pontuacaoB")

let rodadaAhtml = document.getElementById("rodadaA")
let rodadaBhtml = document.getElementById("rodadaB")

let pontoA = 0;
let pontoB = 0;
let rodadaA = 0;
let rodadaB = 0;

nometimeAhtml.innerText= nomeTimeA;
nometimeBhtml.innerText= nomeTimeB;
pontuacaoA.innerText = pontoA;
pontuacaoB.innerText = pontoB;

pontoAhtml.addEventListener('click', function(){
 pontoA = pontoA + 1
 pontuacaoA.innerText = pontoA;
 fimdarodada();

});

pontoBhtml.addEventListener('click', function(){
    pontoB = pontoB + 1
    pontuacaoB.innerText = pontoB;
    fimdarodada();
});

function fimdarodada() {
    if (pontoA >= 12){
        alert (`${nomeTimeA} Venceu a rodada`);
        rodadaA++
        rodadaAhtml.innerText = rodadaA;
        zerarplacar();
    } 
    
    if (pontoB >= 12){
        alert (`${nomeTimeB} Venceu a rodada`);
        rodadaB++
        rodadaBhtml.innerText= rodadaB;
        zerarplacar();
    } 
    if (rodadaA >= 3){
        alert (`${nomeTimeA} Venceu o Jogo! parabens!`)
        rodadaA = 0
        rodadaAhtml.innerText= rodadaA
    }
    if (rodadaB >= 3){
        alert (`${nomeTimeB} Venceu o Jogo! parabens!`)
        rodadaB = 0
        rodadaBhtml.innerText= rodadaB
    }

    
}

function zerarplacar (){
    pontoA = 0;
    pontoB = 0;

    pontoAhtml.innerText= pontoA;
    pontoBhtml.innerText= pontoB;
}
