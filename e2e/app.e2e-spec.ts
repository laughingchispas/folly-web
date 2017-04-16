import { FollyWebPage } from './app.po';

describe('folly-web App', () => {
  let page: FollyWebPage;

  beforeEach(() => {
    page = new FollyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
