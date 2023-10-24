import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCDComponent } from './test-cd.component';

describe('TestCDComponent', () => {
  let component: TestCDComponent;
  let fixture: ComponentFixture<TestCDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCDComponent]
    });
    fixture = TestBed.createComponent(TestCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
