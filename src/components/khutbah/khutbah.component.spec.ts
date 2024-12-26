import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhutbahComponent } from './khutbah.component';

describe('KhutbahComponent', () => {
  let component: KhutbahComponent;
  let fixture: ComponentFixture<KhutbahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KhutbahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhutbahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
