import { When } from "@cucumber/cucumber";
import { DashboardPage } from "../../pages/dashboard.page.js";

let dashboardPage;

When("I click the deep Agent option", { timeout: 10000 }, async function () {
  dashboardPage = new DashboardPage(this.page);
  // await dashboardPage.clickRouteDropdown();
  // await dashboardPage.page.waitForTimeout(3000);
  // await dashboardPage.clickRouteDropdown();
  await dashboardPage.clickOnDeeAgent();

  // Handle new tab opening
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent("page"),
  ]);
  await newPage.waitForLoadState();
  this.page = newPage; // Switch context to new tab
});
