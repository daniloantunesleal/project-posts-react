import { Posts } from "."
import { render, screen } from "@testing-library/react"

const props = {
    posts: [
        {
            title: "this is the title",
            body: "this is the body",
            id: 1,
            cover: "img/daniloaleal.png"
        },
        {
            title: "this is the title 2",
            body: "this is the body 2",
            id: 2,
            cover: "img/daniloaleal2.png"
        },
        {
            title: "this is the title 3",
            body: "this is the body 3",
            id: 3,
            cover: "img/daniloaleal3.png"
        }
    ]
}

describe("<Posts />", () => {
    it("should render posts", () => {
        render(<Posts {...props} />)

        expect(screen.getAllByRole("heading", { name: /this is the title/i })).toHaveLength(props.posts.length)
        expect(screen.getAllByRole("img", { name: /this is the title/i })).toHaveLength(props.posts.length)
        expect(screen.getAllByText(/this is the body/i)).toHaveLength(props.posts.length)
    
    })

    it("should not render posts", () => {
        render(<Posts />)

        expect(screen.queryAllByRole("heading", { name: /this is the title/i })).not.toBeInTheDocument()
    })

    it("should match snapshot", () => {
        const { container } = render(<Posts {...props} />)

        // eslint-disable-next-line testing-library/no-node-access
        expect(container.firstChild).toMatchSnapshot()
    
    })
})