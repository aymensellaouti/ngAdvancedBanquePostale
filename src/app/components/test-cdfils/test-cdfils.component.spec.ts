import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCDFilsComponent } from './test-cdfils.component';

describe('TestCDFilsComponent', () => {
  let component: TestCDFilsComponent;
  let fixture: ComponentFixture<TestCDFilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCDFilsComponent]
    });
    fixture = TestBed.createComponent(TestCDFilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
