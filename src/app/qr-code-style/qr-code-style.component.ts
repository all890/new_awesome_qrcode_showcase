import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import  QRCodeStyling, { CornerDotType, CornerSquareType, DotType, DrawType, Extension } from 'new-awesome-qrcode'

@Component({
  selector: 'app-qr-code-style',
  templateUrl: './qr-code-style.component.html',
  styleUrls: ['./qr-code-style.component.css']
})
export class QrCodeStyleComponent implements OnInit {

  title = 'QR code styling for Angular';
  data = 'http://qr-code-styling.com';
  extension = 'png';
  qrCode!:QRCodeStyling;

  qrCodePropForm = new FormGroup({

    //Genetal session
    width: new FormControl('300'),
    height: new FormControl('300'),
    data: new FormControl('default'),
    qrMargin: new FormControl('10'),
    drawType: new FormControl('canvas'),

    //Logo session
    logoMargin: new FormControl('5'),
    logoSize: new FormControl('2'),

    //Dot session
    dotColor: new FormControl('#000000'),
    dotType: new FormControl('square'),

    //Dot type includes "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded";
    bgType: new FormControl("solidBg"),

    //Background session
    isSolidBackgroundEnabled: new FormControl('true'),
    solidBackgroundColor: new FormControl('#D3D3D3'),

    //Background image session
    isBackgroundImageEnabled: new FormControl('false'),
    backgroundImageOpacity: new FormControl('3'),

    //Corner square session
    cornerSquareColor: new FormControl('#000000'),
    cornerSquareType: new FormControl('square'),

    //Corner square type includes "dot" | "square" | "extra-rounded";

    //Corner dot session
    cornerDotColor: new FormControl('#000000'),
    cornerDotType: new FormControl('square'),

    //Corner dot type includes "dot" | "square";

    //Extension session
    extension: new FormControl('png')

    //Extension type include "png" | "jpeg";
  });

  @ViewChild('canvas', { static: true }) canvas!: ElementRef;

  constructor (private renderer:Renderer2) {

  }

  ngOnInit(): void {
    this.setQRCodeProperties();
  }

  setQRCodeProperties () {
    this.renderer.setProperty(this.canvas.nativeElement,'innerHTML', '');

    if (this.qrCodePropForm.controls.bgType.value == "solidBg") {
      this.qrCodePropForm.controls.isSolidBackgroundEnabled.patchValue("true");
      this.qrCodePropForm.controls.isBackgroundImageEnabled.patchValue("false");
    } else {
      this.qrCodePropForm.controls.isSolidBackgroundEnabled.patchValue("false");
      this.qrCodePropForm.controls.isBackgroundImageEnabled.patchValue("true");
    }

    const options = {
      width: Number(this.qrCodePropForm.controls.width.value!),
      height: Number(this.qrCodePropForm.controls.width.value!),
      data: this.qrCodePropForm.controls.data.value!,
      margin: Number(this.qrCodePropForm.controls.qrMargin.value!),
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      backgroundImage: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
      dotsOptions: {
        type: this.qrCodePropForm.controls.dotType.value! as DotType,
        color: this.qrCodePropForm.controls.dotColor.value!
      },
      cornersDotOptions: {
        type: this.qrCodePropForm.controls.cornerDotType.value! as CornerDotType,
        color: this.qrCodePropForm.controls.cornerDotColor.value!
      },
      cornersSquareOptions: {
        type: this.qrCodePropForm.controls.cornerSquareType.value! as CornerSquareType,
        color: this.qrCodePropForm.controls.cornerSquareColor.value!
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: Number(this.qrCodePropForm.controls.logoMargin.value!),
        imageSize: Number(this.qrCodePropForm.controls.logoSize.value!) / 10
      },
      backgroundOptions: {
        color: this.qrCodePropForm.controls.solidBackgroundColor.value!,
        enable: this.qrCodePropForm.controls.isSolidBackgroundEnabled.value == "true"? true : false,
      },
      backgroundImageOptions: {
        enable: this.qrCodePropForm.controls.isBackgroundImageEnabled.value == "true"? true : false,
        opacity: Number(this.qrCodePropForm.controls.backgroundImageOpacity.value),
        crossOrigin: 'anonymous'
      },
      //useLegacyDotRotation: true
    };

    this.qrCode = new QRCodeStyling(options);
    this.qrCode.append(this.canvas.nativeElement);
  }

  onDownloadClick () {
    this.qrCode.download({ extension: this.qrCodePropForm.controls.extension.value as Extension });
  }

}
