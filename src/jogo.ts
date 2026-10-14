import personagem from "./personagem.js"

export default class jogo {
    private dificuldade : number
    private listapersonagem:personagem[]

    constructor(dificuldade:number, listapersonagem :personagem[]){
        if(dificuldade<0){
            throw new Error (" a dificuldade não pode ser negativa")
        }
        if(listapersonagem==null){
            throw new Error (" a lista dos personagem não pode ser vazia")
        }
            this.dificuldade=dificuldade
            this.listapersonagem=listapersonagem
    }


}