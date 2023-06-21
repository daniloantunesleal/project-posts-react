import { render, screen } from "@testing-library/react"
import UserEvent from "@testing-library/user-event"
import { SearchInput } from "."

describe("<SearchInput />", () => {
    it("should have a value of searchValue", () => {
        render(<SearchInput handleChange={() => null} searchValue={"testando"} />)
        
        const input = screen.getByPlaceholderText(/type your search/i)

        expect(input.value).toBe("testando")
    })

    it("should call handleChange function on each key pressed", () => {
        const fn = jest.fn()
        render(<SearchInput handleChange={fn} />)

        const input = screen.getByPlaceholderText(/type your search/i)
    
        const value = "o valor"

        UserEvent.type(input, value)
        
        expect(input.value).toBe(value)
        expect(fn).toHaveBeenCalledTimes(value.length)
    })

    it("should match snapshot", () => {
        const { container } = render(<SearchInput handleChange={() => null} searchValue={"testando"} />)

        expect(container).toMatchSnapshot()
    })
})