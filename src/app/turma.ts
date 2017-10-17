/* TURMA */
import { AlunoTurma } from './alunoTurma';
export class Turma{
    public numeroTurma: number = null;
    public nome: string;
    public status: string;
    public qtdAlunos: number = null;
    public alunos: Array<AlunoTurma>; //verifcar se é necessário e fazer a quantidade de alunos

    constructor(numeroTurma: number, nome: string, status: string, qtdAlunos?: number, alunos?: Array<AlunoTurma>) {
       this.numeroTurma = numeroTurma;
       this.nome = nome;
       this.status = status;
       this.qtdAlunos = qtdAlunos;
       this.alunos = alunos;
    }
}