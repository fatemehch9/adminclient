import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from '../panel.component';

export const panelroutes: Routes = [
  { path:'panel' ,
  component:PanelComponent,
  pathMatch:'full'
 },
];
