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
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  }, 15000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 5000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 5000);
});

test ("The topics title", async () => {
  // page = await browser.newPage();
  await page.goto("https://github.com/topics");
  const titleTopics = '.f4.color-fg-muted.col-md-6.mx-auto';
  await page.waitForSelector(titleTopics, {
    visible: true,
  });
  const actual = await page.$eval(titleTopics, link => link.textContent);
  expect(actual).toEqual('Browse popular topics on GitHub.');
  // page.close();
}, 5000);

describe("Github/topics/angular page tests", () => {
    beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/topics/angular");
  });

  // afterEach(() => {
  //   page.close();
  // });
  test ("The angular selector", async () => {
    const selectorAngular = await page.$("button[aria-label='Star this topic'] span[class='d-inline']", (link) => link.textContent);
    expect(selectorAngular).toEqual(null);
    }, 5000);

    test ("The angular title", async () => {
      const titleAngular = await page.title();
      expect(titleAngular).toEqual("angular · GitHub Topics · GitHub");
      }, 5000);
    });
