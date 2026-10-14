import personagem from "./personagem.js"
import jogo from "./jogo.js"

export default class Njogavel extends personagem{
    private aliado: boolean

    constructor(nome:string, vitalidade:number, jogo:jogo, aliado: boolean){
        super(nome, vitalidade, jogo)
        this.aliado = aliado
    }

    aplicarGolpeEspecial(adiversario: personagem): void {
        console.log(`golpe especial aplicado no adversario ${adiversario}`)
    }

    aplicarGolpeNormal(adiversario: personagem): void {
        console.log(`golpe normal aplicado no adiversario ${adiversario}`)
    }
}