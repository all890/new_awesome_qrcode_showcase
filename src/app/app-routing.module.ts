import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeStyleComponent } from './qr-code-style/qr-code-style.component';
import { EasyQrJsComponent } from './easy-qr-js/easy-qr-js.component';
import { ZxingComponent } from './zxing/zxing.component';

const routes: Routes = [
  {path: '', redirectTo: 'qrcodestyle', pathMatch: 'full'},
  {path: 'qrcodestyle', component: QrCodeStyleComponent},
  {path: 'easyqrjs', component: EasyQrJsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
