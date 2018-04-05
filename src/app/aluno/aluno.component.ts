import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../domain/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  Aluno: Aluno[];

  constructor(private AlunoService : AlunoService) {
    this.getAlunos();
   }

  ngOnInit() {
  }

  getAlunos(){
    this.AlunoService.getAlunos()
    .subscribe(response =>{
      this.Aluno = response["data"];
      console.log(response);
    })
  }
}
