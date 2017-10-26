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
    public turmas: Array<Turma>;
    public turma: Turma;
    public alunoTurma: Array<AlunoTurma>;
    public alunoTurmaBackup: Array<AlunoTurma>;
    public novaTurma: Turma = new Turma(null, '', '');
    public listarAlunos : boolean;
    public novo: AlunoTurma = new AlunoTurma('',new Turma(null, '', ''));
    public editando = false;
    public mediaTurma: string;
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
            new AlunoTurma('Ana Clara', this.turmas[0],5, 8, 7, 8, 8, 200),
            new AlunoTurma('Camila Dias', this.turmas[1], 6, 5, 6, 7, 9, 160),
            new AlunoTurma('João Carlos', this.turmas[0], 5, 6, 8, 7, 8, 80)
        ];
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
        this.novo = new AlunoTurma('',new Turma(null, '', ''));
    }

    editTurma(turma: Turma): void{
        this.alteraForm('turma');
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

    calcularMediaDaTurma(alunos) {
        let acumulador: number = 0;
        let denominador: number = 0;
        let final: number = 0;
        for (let i = 0; i < alunos.length; i++) {
            let media = alunos[i].calculaMediaFinal();
            if (media) {
                acumulador += media;
                denominador++;
            }
        }
        if (acumulador == 0 && denominador == 0) {
            this.mediaTurma = null;
        } else {
            final = acumulador / denominador;
            this.mediaTurma = final.toFixed(2);
        }
    }

    viewAlunosTurma(turma: Turma): void{
        this.alunoTurmaBackup = this.alunoTurma.filter(alunoTurma => alunoTurma.turma.numeroTurma == turma.numeroTurma);
        this.listarAlunos = true;
        this.btnCadastrarAluno = true;
        this.turma = turma;
        this.calcularMediaDaTurma(this.alunoTurmaBackup);
    }

    createAluno(): void {  
        if (!this.editando) {           
            this.alunoTurma.push(new AlunoTurma(this.novo.nome, this.turma, this.novo.periodo,this.novo.nota1,this.novo.nota2,this.novo.nota3, this.novo.nota4, this.novo.totalFrequencia));
            this.novo = new AlunoTurma('',new Turma(null, '', ''));
            this.viewAlunosTurma(this.turma);
        } else {
            this.novo = new AlunoTurma('',new Turma(null, '', ''));
            this.viewAlunosTurma(this.turma);
            this.editando = false;
        }
    }

    editAluno(alunoTurma: AlunoTurma): void{
        this.alteraForm('aluno');
        this.novo = alunoTurma;
        this.editando = true;  
    }

    deleteAluno(alunoTurma: AlunoTurma): void{ 
        this.alunoTurma.splice(this.alunoTurma.indexOf(alunoTurma), 1); 
        this.alunoTurmaBackup.splice(this.alunoTurmaBackup.indexOf(alunoTurma), 1); 
        this.calcularMediaDaTurma(this.alunoTurmaBackup)
        this.novo = new AlunoTurma('',new Turma(null, '', ''));
    }
}


