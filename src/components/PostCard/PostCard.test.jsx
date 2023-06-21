import { render, screen } from "@testing-library/react";
import { PostCard } from ".";

const props = {
    title: "this is the title",
    body: "this is the body",
    id: 1,
    cover: "img/daniloaleal.png",
};

describe("<PostCard />", () => {
    it("should render PostCard correctly", () => {
        render(<PostCard {...props} />);

        expect(screen.getByRole("img", { name: props.title })).toHaveAttribute("src", props.cover);
        expect(screen.getByRole("heading", { name: props.title })).toBeInTheDocument();
        expect(screen.getByText(props.title)).toBeInTheDocument();
    });

    it("should match snapshot", () => {
        const { container } = render(<PostCard {...props} />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
