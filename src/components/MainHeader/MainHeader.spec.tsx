import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";

describe("MainHeader Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    await render(<MainHeader />);
    expect(screen.getByTestId("MainHeader")).not.toBeEmptyDOMElement();
  });
});
