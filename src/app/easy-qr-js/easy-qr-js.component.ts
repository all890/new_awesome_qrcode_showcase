import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import QRCode from 'easyqrcodejs';

@Component({
  selector: 'app-easy-qr-js',
  templateUrl: './easy-qr-js.component.html',
  styleUrls: ['./easy-qr-js.component.css']
})
export class EasyQrJsComponent implements AfterViewInit {

  // Your DOM Element
  @ViewChild('qrcode', {static: false}) qrcode!: ElementRef;

  qrCodeObj!: QRCode;

  constructor (private renderer:Renderer2) {

  }

  qrCodePropForm = new FormGroup({
    text: new FormControl('default'),
    width: new FormControl('250'),
    height: new FormControl('250'),
    logoWidth: new FormControl('80'),
    logoHeight: new FormControl('80'),
    bgImageAlpha: new FormControl('3'),
    bgImageTrans: new FormControl('checked'),
    dotScale: new FormControl('5'),
    PO: new FormControl('#000000'),
    PI: new FormControl('#000000')
  })

  ngAfterViewInit(){
    this.setQRCodeProperties();
  }

  setQRCodeProperties () {
    this.renderer.setProperty(this.qrcode.nativeElement,'innerHTML', '');
    const logoPath = '../assets/images/Manchester_United_FC_crest.svg.png';

    let options = {
      //Can change everytime
      text: this.qrCodePropForm.controls.text.value,
      width: Number(this.qrCodePropForm.controls.width.value),
      height: Number(this.qrCodePropForm.controls.height.value),
      //Can change before rendering
      //logo: logoPath,
      logoWidth: Number(this.qrCodePropForm.controls.logoWidth.value),
      logoHeight: Number(this.qrCodePropForm.controls.logoHeight.value),//Number(this.qrCodePropForm.controls.locoHeight.value),
      logoBackgroundTransparent: (this.qrCodePropForm.controls.bgImageTrans.value == "checked"),
      backgroundImage: logoPath,
      backgroundImageAlpha: Number(this.qrCodePropForm.controls.bgImageAlpha.value)/10,
      dotScale: Number(this.qrCodePropForm.controls.dotScale.value)/10,
      PO: this.qrCodePropForm.controls.PO.value,
      PI: this.qrCodePropForm.controls.PI.value
    }
    
    this.qrCodeObj = new QRCode(this.qrcode.nativeElement, options);
    
  }

}
