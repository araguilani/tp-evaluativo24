import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioGComponent } from './inicio-g.component';

describe('InicioGComponent', () => {
  let component: InicioGComponent;
  let fixture: ComponentFixture<InicioGComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioGComponent]
    });
    fixture = TestBed.createComponent(InicioGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
