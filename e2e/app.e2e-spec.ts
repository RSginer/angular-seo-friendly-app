import { AngularSeoAppPage } from './app.po';

describe('angular-seo-app App', () => {
  let page: AngularSeoAppPage;

  beforeEach(() => {
    page = new AngularSeoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
