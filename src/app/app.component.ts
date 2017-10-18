import { Component, OnInit } from '@angular/core';
import { Turma } from './turma';
import { AlunoTurma } from './alunoTurma';
import '../assets/css/style.css';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public idAluno: number = null;
    public nome: string;
    public periodo: number = null;
    public turmas: Array<Turma>;
    public turma: Turma;
    public alunoTurma: Array<AlunoTurma>;
    public alunoTurmaBackup: Array<AlunoTurma>;
    public novaTurma: Turma = new Turma(null, '', '') ;
    public listarAlunos : boolean;
    public novo: AlunoTurma = new AlunoTurma(null, '', null, new Turma(null, '', ''), null, null, null, null, null, null);
    public editando = false;
    public id : number;
    public mediaFinalAluno : any;
    public situacao : any;
    public btnCadastrarAluno: boolean;
    public cadastrarTurma: boolean;
    public cadastrarAluno: boolean;
    public registrosAluno: boolean;

    constructor() {
        this.listarAlunos = false;
        this.btnCadastrarAluno = false;
        this.cadastrarTurma = true;
        this.cadastrarAluno = false;
        this.registrosAluno = false;

        this.turmas = [
            new Turma(1, 'LPWEB', 'Ativa'),
            new Turma(2, 'LPC', 'Ativa')
        ];

        this.alunoTurma = [
            new AlunoTurma(1,'Ana Clara', 5, this.turmas[0], 8, 7, 8, 8, 200, 7.7, 'Aprovado'),
            new AlunoTurma(2, 'Karol Dias', 6, this.turmas[1], 7, 5, 7, 7, 160, 6.5, 'Reprovado'),
            new AlunoTurma(3,'João Carlos', 6, this.turmas[0], 9, 5, 6, 8, 80, 7, 'Reprovado por Falta')
        ];
        console.log(this.alunoTurma);
    }

    ngOnInit(): void {
    }

    alteraForm(formulario){
        if(formulario == 'turma'){
            this.cadastrarTurma = true;
            this.cadastrarAluno = false;
        }
        if(formulario == 'aluno'){
            this.cadastrarTurma = false;
            this.cadastrarAluno = true;
        }
    }

    limpar(){
        this.novaTurma = new Turma(null, '', '');
        this.novo = new AlunoTurma(null, '', null, new Turma(null, '', ''), null, null, null, null, null, null );
    }

    editTurma(turma: Turma): void{
        this.novaTurma = turma;
        this.editando = true;
    }

    createTurma(): void {
        if (!this.editando) {
            this.turmas.push(new Turma(this.novaTurma.numeroTurma,this.novaTurma.nome,this.novaTurma.status,this.novaTurma.qtdAlunos=0));
            this.novaTurma = new Turma(null, '', '');
        } else {
            this.novaTurma = new Turma(null, '', '');
            this.editando = false;
        }
    }

    deleteTurma(turma: Turma): void{ 
        this.turmas.splice(this.turmas.indexOf(turma), 1); 
        this.novaTurma = new Turma(null, '', '');
    }

    viewAlunosTurma(turma: Turma): void{
        this.alunoTurmaBackup = this.alunoTurma.filter(alunoTurma => alunoTurma.turma.numeroTurma == turma.numeroTurma);
        this.listarAlunos = true;
        this.btnCadastrarAluno = true;
        this.turma = turma;
    }

    createAluno(): void {  
        if (!this.editando) {
            const idAluno: number = this.alunoTurma.length + 1;
            this.mediaFinalAluno = this.novo.calculaMediaFinal(this.novo.nota1, this.novo.nota2, this.novo.nota3, this.novo.nota4);
            this.situacao = this.novo.situacaoFinal(this.mediaFinalAluno, this.novo.totalFrequencia);
           
            this.alunoTurma.push(new AlunoTurma(idAluno,this.novo.nome,this.novo.periodo, this.turma,this.novo.nota1,this.novo.nota2,this.novo.nota3, this.novo.nota4, this.novo.totalFrequencia,this.mediaFinalAluno, this.situacao));
            this.novo = new AlunoTurma(null, '', null, new Turma(null, '', ''), null, null, null, null, null, null);

            this.viewAlunosTurma(this.turma);
        } else {
            this.mediaFinalAluno = this.novo.calculaMediaFinal(this.novo.nota1, this.novo.nota2, this.novo.nota3, this.novo.nota4);
            this.situacao = this.novo.situacaoFinal(this.mediaFinalAluno, this.novo.totalFrequencia);
            // this.alunoTurma.push(new AlunoTurma(null,this.novo.nome,this.novo.periodo, this.turma,this.novo.nota1,this.novo.nota2,this.novo.nota3, this.novo.nota4, this.novo.totalFrequencia,this.mediaFinalAluno, this.situacao));            
            this.novo = new AlunoTurma(null, '', null, new Turma(null, '', ''), null, null, null, null, null, null);
            this.editando = false;
        }
    }

    editAluno(alunoTurma: AlunoTurma): void{
        console.log(alunoTurma);
        this.alteraForm('aluno');
        this.novo = alunoTurma;
        this.editando = true;  
    }

    deleteAluno(alunoTurma: AlunoTurma): void{ 
        this.alunoTurma.splice(this.alunoTurma.indexOf(alunoTurma), 1); 
        this.alunoTurmaBackup.splice(this.alunoTurmaBackup.indexOf(alunoTurma), 1); 
        this.novo = new AlunoTurma(null, '', null, new Turma(null, '', ''), null, null, null, null, null, null );
    }
}
