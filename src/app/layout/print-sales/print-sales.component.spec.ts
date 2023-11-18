import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSalesComponent } from './print-sales.component';

describe('PrintSalesComponent', () => {
  let component: PrintSalesComponent;
  let fixture: ComponentFixture<PrintSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
