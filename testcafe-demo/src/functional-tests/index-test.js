import { Selector, ClientFunction } from "testcafe";

fixture`My Website Homepage`.page("http://vinnakota.co.in");

test("Page should load and display the correct title", async t => {
  const actual = Selector("h2").innerText;
  const expected = "Saikrishna Vinnakota";
  await t.expect(actual).eql(expected);
});

const getLocation = ClientFunction(() => window.location.href);

test("User should be able to open resume", async t => {
  // Cannot track across tabs in testcafe
  /* const resumeButton = Selector("a").withText("Curriculum Vitae");
  const expected = "http://vinnakota.co.in/resume/Saikrishna_Resume.pdf";

  await t.click(resumeButton);
  await t.expect(getLocation()).eql(expected); */
});
