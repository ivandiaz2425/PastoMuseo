import { PastoMuseoPage } from './app.po';

describe('pasto-museo App', function() {
  let page: PastoMuseoPage;

  beforeEach(() => {
    page = new PastoMuseoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
