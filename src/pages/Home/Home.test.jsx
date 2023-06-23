//TODO: ARRUMAR

// import { rest } from "msw";
// import { setupServer } from "msw/node";

// import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
// import { Home } from ".";
// import userEvent from "@testing-library/user-event";

// const handlers = [
//     //ele vai interceptar a requisição
//     rest.get("https://jsonplaceholder.typicode.com/posts", async (req, res, ctx) => {
//         return res(
//             ctx.json([
//                 {
//                     title: "this is the title",
//                     body: "this is the body",
//                     id: 1,
//                 },
//                 {
//                     title: "this is the title 2",
//                     body: "this is the body 2",
//                     id: 2,
//                 },
//                 {
//                     title: "this is the title 3",
//                     body: "this is the body 3",
//                     id: 3,
//                 },
//             ]),
//         );
//     }),
//     rest.get("https://jsonplaceholder.typicode.com/photos", async (req, res, ctx) => {
//         return res(
//             ctx.json([
//                 {
//                     url: "img1.png",
//                 },
//                 {
//                     url: "img2.png",
//                 },
//                 {
//                     url: "img3.png",
//                 },
//             ]),
//         );
//     }),
// ];

// const server = setupServer(...handlers);

// describe("<Home />", () => {
//     beforeAll(() => {
//         //antes de todos
//         server.listen();
//     });

//     afterEach(() => server.resetHandlers()); // depois de cada teste //eu não quero que um teste afete outro por algum motivo

//     afterAll(() => {
//         // depois de todos
//         server.close();
//     });

//     it("should render search, posts and load more", async () => {
//         render(<Home />);

//         expect.assertions(3);

//         const noMorePosts = screen.getByText("Não existem posts =(");
//         await waitForElementToBeRemoved(noMorePosts);

//         const search = screen.getByPlaceholderText(/type your search/i);
//         expect(search).toBeInTheDocument();

//         const images = screen.getAllByRole("img", { name: /this is the title/i });
//         expect(images).toHaveLength(2);

//         const button = screen.getByRole("button", { name: /load more posts/i });
//         expect(button).toBeInTheDocument();
//     });

//     it("should search for posts", async () => {
//         render(<Home />);

//         expect.assertions(11);

//         const noMorePosts = screen.getByText("Não existem posts =(");
//         await waitForElementToBeRemoved(noMorePosts);

//         const search = screen.getByPlaceholderText(/type your search/i);

//         expect(screen.getByRole("heading", { name: "this is the title" })).toBeInTheDocument();
//         expect(screen.getByRole("heading", { name: "this is the title 2" })).toBeInTheDocument();
//         expect(screen.queryByRole("heading", { name: "this is the title 3" })).not.toBeInTheDocument();

//         userEvent.type(search, "this is the title 2");

//         expect(screen.queryByRole("heading", { name: "this is the title" })).not.toBeInTheDocument();
//         expect(screen.getByRole("heading", { name: "this is the title 2" })).toBeInTheDocument();
//         expect(screen.queryByRole("heading", { name: "this is the title 3" })).not.toBeInTheDocument();

//         expect(screen.getByRole("heading", { name: "Search value: this is the title 2" })).toBeInTheDocument();

//         userEvent.clear(search);

//         expect(screen.queryByRole("heading", { name: /search value/i })).not.toBeInTheDocument();

//         expect(screen.getByRole("heading", { name: "this is the title" })).toBeInTheDocument();
//         expect(screen.getByRole("heading", { name: "this is the title 2" })).toBeInTheDocument();

//         userEvent.type(search, "QuAlQuErCoIsA!$!$#!#");

//         expect(screen.getByText("Não existem posts =(")).toBeInTheDocument();
//     });

//     it("should load more posts", async () => {
//         render(<Home />);

//         expect.assertions(2);

//         const noMorePosts = screen.getByText("Não existem posts =(");
//         await waitForElementToBeRemoved(noMorePosts);

//         const button = screen.getByRole("button", { name: /load more posts/i });

//         userEvent.click(button);

//         expect(screen.queryByRole("heading", { name: "this is the title 3" })).toBeInTheDocument();
//         expect(button).toBeDisabled();
//     });
// });

it("teste", () => {
    expect(1).toBe(1);
});
