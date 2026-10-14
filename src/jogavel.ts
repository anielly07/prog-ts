import personagem from "./personagem.js"
import jogo from "./jogo.js"
import type controle from "./controle.js"


export default class jogavel extends personagem implements controle{
    private nivel: number

    constructor(nome:string, vitalidade:number, jogo:jogo, nivel:number){
        super(nome, vitalidade, jogo)
        this.nivel = nivel
    }

    aplicarGolpeEspecial(adiversario: personagem): void {
        console.log(`golpe especial aplicado no adversario ${adiversario}`)
    }

    aplicarGolpeNormal(adiversario: personagem): void {
        console.log(`golpe normal aplicado no adiversario ${adiversario}`)
    }

    botaoA(personagem: personagem): void {
       console.log(`${personagem} apertou o botao a`) 
    }

    botaoB(personagem: personagem): void {
        console.log(`${personagem} apertou o botao b`) 
    }
    }
