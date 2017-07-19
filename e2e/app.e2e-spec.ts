import { LunchbotPage } from './app.po';

describe('lunchbot App', () => {
  let page: LunchbotPage;

  beforeEach(() => {
    page = new LunchbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
