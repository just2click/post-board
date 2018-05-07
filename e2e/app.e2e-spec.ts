import { PostBoardPage } from './app.po';

describe('post-board App', function() {
  let page: PostBoardPage;

  beforeEach(() => {
    page = new PostBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
