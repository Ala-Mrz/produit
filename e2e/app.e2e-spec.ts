import { ProduitsPage } from './app.po';

describe('produits App', () => {
  let page: ProduitsPage;

  beforeEach(() => {
    page = new ProduitsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
