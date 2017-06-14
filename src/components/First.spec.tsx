describe('Fake', () => {
  it('simple test', () => {
    expect(0).toBe(0);
  });

  it('shold be jasmine to global namespace', () => {
    const spy = jasmine.createSpy('');
    spy('first arg', 'second arg');
    expect(spy.calls.allArgs()).toEqual([
      ['first arg', 'second arg']
    ]);
  });
});
