import { BitbanPage } from './app.po';

describe('bitban App', () => {
  let page: BitbanPage;

  beforeEach(() => {
    page = new BitbanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
