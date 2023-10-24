import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreListComponent } from './nombre-list.component';

describe('NombreListComponent', () => {
  let component: NombreListComponent;
  let fixture: ComponentFixture<NombreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreListComponent]
    });
    fixture = TestBed.createComponent(NombreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
