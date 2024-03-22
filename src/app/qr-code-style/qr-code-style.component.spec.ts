import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeStyleComponent } from './qr-code-style.component';

describe('QrCodeStyleComponent', () => {
  let component: QrCodeStyleComponent;
  let fixture: ComponentFixture<QrCodeStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
