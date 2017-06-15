import First from './First';

describe('First', () => {
  it('simple test', () => {
    expect(0).toBe(1);
  });

  it('shold be jasmine to global namespace', () => {
    const spy = jasmine.createSpy('');
    spy('first arg', 'second arg');
    expect(spy.calls.allArgs()).toEqual([
      ['first arg', 'second arg']
    ]);
  });

  it('real test', () => {
    const instance = new First();
    const spy = jasmine.createSpy('');
    instance.makeErrorToConsoleLog.call({
      props: { error: spy }
    });
    expect(spy.calls.count()).toBe(1);
  });
});
