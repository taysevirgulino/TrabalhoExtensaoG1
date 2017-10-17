/* ALUNO-TURMA */
// import { Aluno } from './aluno';
import { Turma } from './turma';

export class AlunoTurma{
    public idAluno: number = null;
    public nome: string;
    public periodo: number = null;
    public turma: Turma;
    public nota1: number = null;
    public nota2: number = null;
    public nota3: number = null;
    public nota4: number = null;
    public totalFrequencia: number = null;
    public mediaFinal: number = null;
    public notas: Array<any>;
    public somaNotas: number = null;
    public divisor: number = 0;
    public situacao: any;

    constructor(idAluno: number, nome: string, periodo: number,turma: Turma, nota1?: number, nota2?:number, nota3?: number, nota4?: number, totalFrequencia?: number, mediaFinal?: number, situacao?: any) {
        this.idAluno = idAluno;
        this.nome = nome;
        this.periodo = periodo;
        this.turma = turma;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.totalFrequencia = totalFrequencia;
        this.mediaFinal = mediaFinal;
        this.situacao = situacao;
    }

    calculaMediaFinal(nota1, nota2, nota3, nota4){
        if(nota1 == null && nota2 == null && nota3 == null && nota3 == null){
           return this.mediaFinal = null;
        }
        else{
            this.notas = [nota1, nota2, nota3, nota4]; //insere as 4 notas no Array
            for(let nota of this.notas){  //executa um for passando o array com as notas
                if(nota != null){ //verifica se a nota está setada
                    this.somaNotas += nota;  //se sim, incrementa cada nota na variável somaNotas que irá somar todas que entrarem na condição
                    ++this.divisor;  //aqui será definido o divisor
                }
            }
            if(this.somaNotas != null){ //verifica se há algo na variável somaNotas
               return this.mediaFinal = this.somaNotas/this.divisor   //se sim, realiza a divisão com o divisor, e atribui a variável mediaFinal
            }
        }
    }

    situacaoFinal(mediaFinalAluno, totalFrequenciaAluno){ 
        if(mediaFinalAluno == null && totalFrequenciaAluno == null){
          return  this.situacao = null;
        }
        else{
            if(totalFrequenciaAluno < 150){
                return this.situacao = 'Reprovado por Falta';
            }
            if(mediaFinalAluno >= 7){
                return this.situacao = 'Aprovado';
            }
            if(mediaFinalAluno < 7){
                return this.situacao = 'Reprovado';
            }
        }
    }
}