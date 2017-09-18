import { SharedModule } from './shared.module';

describe('SharedModule', () => {
  let translateSharedModule: SharedModule;

  beforeEach(() => {
    translateSharedModule = new SharedModule();
  });

  it('should create an instance', () => {
    expect(translateSharedModule).toBeTruthy();
  });
});
