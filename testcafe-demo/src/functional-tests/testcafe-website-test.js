import { Selector, ClientFunction } from "testcafe";

fixture`Testcafe Website`.page("https://devexpress.github.io/testcafe/");

const getLocation = ClientFunction(() => window.location.href);

test("User should be able to go to get started page", async t => {
  const getStartedButton = Selector(".get-started-button").withText(
    "Get Started"
  );
  const expected =
    "https://devexpress.github.io/testcafe/documentation/getting-started/";

  await t.click(getStartedButton);
  await t.expect(getLocation()).eql(expected);
});
