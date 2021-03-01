import { APP_NAME } from "../config/audius";
import { getUrlWithAppNameQuery } from "./audius";

describe("getUrlWithAppNameQuery", () => {
  it("returns url with app name without other query prams", () => {
    expect(getUrlWithAppNameQuery("https://test.me")).toBe(
      `https://test.me?app_name=${APP_NAME}`
    );
  });

  it("returns url with app name with other query params", () => {
    expect(getUrlWithAppNameQuery("https://test.me?test=test")).toBe(
      `https://test.me?app_name=${APP_NAME}&test=test`
    );
  });
});
