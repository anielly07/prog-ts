import jogo from "./jogo.js"

export default abstract class personagem{
    protected nome: string
    protected vitalidade:number
    protected jogo : jogo

    constructor(nome:string, vitalidade:number, jogo:jogo){ 
        this.nome = nome
        this.vitalidade = vitalidade
        this.jogo = jogo 
    }

    abstract aplicarGolpeNormal(adiversario:personagem):void 
    abstract aplicarGolpeEspecial(adiversario:personagem):void 

}