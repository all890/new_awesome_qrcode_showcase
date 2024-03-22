import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeStyleComponent } from './qr-code-style/qr-code-style.component';

const routes: Routes = [
  {path: '', redirectTo: 'qrcodestyle', pathMatch: 'full'},
  {path: 'qrcodestyle', component: QrCodeStyleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
