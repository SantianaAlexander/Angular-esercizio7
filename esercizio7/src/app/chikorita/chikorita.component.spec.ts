import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChikoritaComponent } from './chikorita.component';

describe('ChikoritaComponent', () => {
  let component: ChikoritaComponent;
  let fixture: ComponentFixture<ChikoritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChikoritaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChikoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
