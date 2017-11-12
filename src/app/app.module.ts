import { ServiceService } from './service/service.service';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { ProduitsComponent } from './produits/produits.component';
import { ProduitLiverComponent } from './produit-liver/produit-liver.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpModule} from '@angular/http';


const appRoutes:Routes = [  
  {path:'', component:AcceuilComponent},
  {path:'questionnaire', component:QuestionaireComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'produit/:id', component:ProduitLiverComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    QuestionaireComponent,
    ProduitsComponent,
    ProduitLiverComponent,
    NavbarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServiceService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
