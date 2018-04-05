import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContratoComponent } from './contrato/contrato.component';
import { ContratoService } from './services/contrato.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AlunoService } from './services/aluno.service';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    ContratoComponent,
    AlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContratoService, AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
