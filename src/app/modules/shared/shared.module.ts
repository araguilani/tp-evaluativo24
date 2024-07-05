import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';

//material
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    //declaramos componentes de navbar y footer
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    ],
exports:[
NavbarComponent,
FooterComponent,
MatIconModule,
MatButtonModule,
MatToolbarModule
]
})
export class SharedModule { }
