import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotodileComponent } from './totodile.component';

describe('TotodileComponent', () => {
  let component: TotodileComponent;
  let fixture: ComponentFixture<TotodileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotodileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotodileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
