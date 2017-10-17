import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turma } from '../turma';

@Component({
  selector: 'app-lista-de-turmas',
  templateUrl: './lista-de-turmas.component.html',
  styleUrls: ['./lista-de-turmas.component.css']
})
export class ListaDeTurmasComponent implements OnInit {
  @Input()
  listaTurmas: Array<Turma>;

  @Output()
  onEditar = new EventEmitter<Turma>();

  @Output()
  onExcluir = new EventEmitter<Turma>();

  @Output()
  onViewAlunos = new EventEmitter<Turma>();
  
  constructor() { }

  ngOnInit() {
  }

  editTurma(turma: Turma): void{
    this.onEditar.emit(turma);
  }

  deleteTurma(turma: Turma): void{
    this.onExcluir.emit(turma);
  }

  viewAlunos(turma: Turma): void{
    this.onViewAlunos.emit(turma);
  }
}
