/* ALUNO-TURMA */
import { Turma } from './turma';

export class AlunoTurma{
    
    constructor(
        public nome: string,
        public turma: Turma,
        public periodo: number = null,
        public nota1: number = null,
        public nota2: number = null,
        public nota3: number = null,
        public nota4: number = null,
        public totalFrequencia: number = null,
        public situacao: any = null ){    
    }

    calculaMediaFinal():number{
        let mediaFinal: number = null;
        let somaNotas: number = null;
        let notas: Array<any>;
        let divisor: number = 0;
        
        if(!this.nota1 && !this.nota2 && !this.nota3 && !this.nota4){
           return mediaFinal = null;
        }
        else{
            notas = [this.nota1, this.nota2, this.nota3, this.nota4]; //insere as 4 notas no Array
            for(let nota of notas){  //executa um for passando o array com as notas
                if(nota != null){ //verifica se a nota está setada
                    somaNotas += nota;  //se sim, incrementa cada nota na variável somaNotas que irá somar todas que entrarem na condição
                    ++divisor;  //aqui será definido o divisor
                }
            }
            if(somaNotas != null){ //verifica se há algo na variável somaNotas
               return mediaFinal = somaNotas/divisor   //se sim, realiza a divisão com o divisor, e atribui a variável mediaFinal
            }
        }
    }

    situacaoFinal(): string{ 
        if(!this.calculaMediaFinal() && !this.totalFrequencia){
          return  this.situacao = null;
        }
        else{
            if(this.totalFrequencia < 150){
                return this.situacao = 'Reprovado por Falta';
            }
            if(this.calculaMediaFinal() >= 7){
                return this.situacao = 'Aprovado';
            } else{
                return this.situacao = 'Reprovado';
            }
        }
    }
}