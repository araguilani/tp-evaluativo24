import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './component/card/card.component';
import { InicioGComponent } from './pages/inicio-g/inicio-g.component';


@NgModule({
  declarations: [
    CardComponent,
    InicioGComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
