import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlunoTurma } from '../alunoTurma';

@Component({
  selector: 'app-lista-de-alunos',
  templateUrl: './lista-de-alunos.component.html',
  styleUrls: ['./lista-de-alunos.component.css']
})
export class ListaDeAlunosComponent implements OnInit {

  @Input()
  listaAlunos: Array<AlunoTurma>;

  @Input()
  mediaTurma: number;

  @Output()
  onEditar = new EventEmitter<AlunoTurma>();

  @Output()
  onExcluir = new EventEmitter<AlunoTurma>();

  constructor() { }

  ngOnInit() {
  }

  editAluno(alunoTurma: AlunoTurma): void{
    this.onEditar.emit(alunoTurma);
  }

  deleteAluno(alunoTurma: AlunoTurma): void{
    this.onExcluir.emit(alunoTurma);
  }

}
