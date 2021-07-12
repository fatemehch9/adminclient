import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/services/auth.service';
import { PanelRoutingModule } from './panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    PanelRoutingModule
  ],
  declarations: [PanelComponent],
  providers: [AuthService]
})
export class PanelModule { }
