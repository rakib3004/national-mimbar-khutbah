import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitulMukarramComponent } from './baitul-mukarram.component';

describe('BaitulMukarramComponent', () => {
  let component: BaitulMukarramComponent;
  let fixture: ComponentFixture<BaitulMukarramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaitulMukarramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaitulMukarramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
