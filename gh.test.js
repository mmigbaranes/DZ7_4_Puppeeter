let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page TEAM tests", () => {
  test("The h1 header content'", async () => {
    // jest.setTimeout(5000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 15000);

  test("The first link attribute", async () => {
    // jest.setTimeout(5000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 5000);

  test("The page contains Sign in button", async () => {
    // jest.setTimeout(5000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 5000);
});

test ("The topics title", async () => {
  // jest.setTimeout(5000);
  page = await browser.newPage();
  await page.goto("https://github.com/topics");
  const titleTopics = '.f4.color-fg-muted.col-md-6.mx-auto';
  await page.waitForSelector(titleTopics, {
    visible: true,
  });
  const actual = await page.$eval(titleTopics, link => link.textContent);
  // await firstLink.click();
  // await page.waitForSelector('h1');
  // const title2 = await page.title();
  expect(actual).toEqual('Browse popular topics on GitHub.');
page.close();
}, 5000);
