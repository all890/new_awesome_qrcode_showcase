import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyQrJsComponent } from './easy-qr-js.component';

describe('EasyQrJsComponent', () => {
  let component: EasyQrJsComponent;
  let fixture: ComponentFixture<EasyQrJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyQrJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyQrJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
