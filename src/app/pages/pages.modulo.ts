 import {NgModule} from '@angular/core';

 import {DashboardComponent} from './dashboard/dashboard.component';
 import {ProgressComponent} from './progress/progress.component';
 import {Graficas1Component} from './graficas1/graficas1.component';
 import {PagesComponent} from './pages.component';
 import {SharedModule} from '../shared/shared.module';
 import {GraficoDonaComponent} from '../components/grafico-dona/grafico-dona.component';
 import {PAGES_ROUTE} from './pages.routes';
 import {FormsModule} from '@angular/forms';


 //temporal
 import {IncrementadorComponent} from '../components/incrementador/incrementador.component';

 //ng2-charts
 import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



 @NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccountSettingsComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PAGES_ROUTE,
    FormsModule,
    ChartsModule
  ]
})
export class PagesModule {}
