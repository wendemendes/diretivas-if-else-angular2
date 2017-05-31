import { DiretivaIfForPage } from './app.po';

describe('diretiva-if-for App', () => {
  let page: DiretivaIfForPage;

  beforeEach(() => {
    page = new DiretivaIfForPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
