import { render, screen } from "@testing-library/react";
import { SearchResult } from ".";

describe("<SearchResult />", () => {
    it("should have message of results found", () => {
        render(<SearchResult result={101} />);

        expect(screen.getByText("Foi encontrado 101 resultados")).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { container } = render(<SearchResult result={101} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
