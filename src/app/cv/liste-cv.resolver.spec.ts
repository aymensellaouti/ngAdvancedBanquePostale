import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { listeCvResolver } from './liste-cv.resolver';

describe('listeCvResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => listeCvResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
