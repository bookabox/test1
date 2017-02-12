import { BookABoxPage } from './app.po';

describe('book-a-box App', function() {
  let page: BookABoxPage;

  beforeEach(() => {
    page = new BookABoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
