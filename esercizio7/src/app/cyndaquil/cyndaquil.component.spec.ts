import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyndaquilComponent } from './cyndaquil.component';

describe('CyndaquilComponent', () => {
  let component: CyndaquilComponent;
  let fixture: ComponentFixture<CyndaquilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyndaquilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyndaquilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
