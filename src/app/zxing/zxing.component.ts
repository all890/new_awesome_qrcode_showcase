import { Component, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-zxing',
  templateUrl: './zxing.component.html',
  styleUrls: ['./zxing.component.css']
})
export class ZxingComponent {

  @ViewChild('scanner')
  scanner!: ZXingScannerComponent;

  startScan () {
    this.scanner?.scanStart();
  }

  stopScan () {
    this.scanner?.scanStop();
  }

  sendVal (val: string) {
    console.log('VAL IS ' + val)
  }

}
