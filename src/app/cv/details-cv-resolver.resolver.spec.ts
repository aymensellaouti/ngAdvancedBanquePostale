import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { detailsCvResolverResolver } from './details-cv-resolver.resolver';

describe('detailsCvResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => detailsCvResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
