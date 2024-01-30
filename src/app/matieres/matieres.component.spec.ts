import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatieresComponent } from './matieres.component';

describe('MatieresComponent', () => {
  let component: MatieresComponent;
  let fixture: ComponentFixture<MatieresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatieresComponent]
    });
    fixture = TestBed.createComponent(MatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
