import { OmozonePage } from './app.po';

describe('omozone App', function() {
  let page: OmozonePage;

  beforeEach(() => {
    page = new OmozonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
