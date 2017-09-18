import { NoContentModule } from './no-content.module';

describe('NoContentModule', () => {
  let noContentModule: NoContentModule;

  beforeEach(() => {
    noContentModule = new NoContentModule();
  });

  it('should create an instance', () => {
    expect(noContentModule).toBeTruthy();
  });
});
