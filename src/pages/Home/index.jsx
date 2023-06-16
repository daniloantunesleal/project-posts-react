import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { SearchValue } from '../../components/SearchInput';
import { SearchResult } from '../../components/SearchResult';

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState("")

  const noMorePosts = page + postsPerPage >= allPosts.length

  const filteredPosts = !!searchValue ? 
  allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
  : 
  posts

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts()

    setPosts(postsAndPhotos.slice(page, postsPerPage))
    setAllPosts(postsAndPhotos)
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage)
  }, [handleLoadPosts, postsPerPage])

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value)
    
    setSearchValue(value)
  }

  return (
    <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
            <>
            <h1>Search value: {searchValue}</h1>
            <SearchResult result={filteredPosts.length} />
            </>
          )}
          
          <SearchValue handleChange={handleChange} value={searchValue} />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <p>Não existem posts =(</p>
        )}
        
        <div className='button-container'>
          {!searchValue && (
            <Button onClick={loadMorePosts} text="Load More Posts" disabled={noMorePosts} />
          )}
        </div>
      </section>
  )
}

// class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: ""
//   }

//   async componentDidMount() {
//     console.log("COMPONENTE CRIADO")
//     await this.loadPosts()
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state

//     const postsAndPhotos = await loadPosts()
//     this.setState({ 
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos 
//     })
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts
//     } = this.state
//     const nextPage = page + postsPerPage
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
//     posts.push(...nextPosts)

//     this.setState({ posts, page: nextPage })
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     console.log(value)
//     this.setState({ searchValue: value })
//   }

//   componentDidUpdate() { 
//   }

//   componentWillUnmount() {
//     console.log("COMPONENTE DESTRUIDO")
//   }

//   render(){
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state
//     const noMorePosts = page + postsPerPage >= allPosts.length

//     const filteredPosts = !!searchValue ? 
//     allPosts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()))
//     : 
//     posts

//     return (
//       <section className='container'>
//         <div className='search-container'>
//           {!!searchValue && (
//             <>
//             <h1>Search value: {searchValue}</h1>
//             <SearchResult result={filteredPosts.length} />
//             </>
//           )}
          
//           <SearchValue handleChange={this.handleChange} value={searchValue} />
//         </div>

//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts} />
//         )}

//         {filteredPosts.length === 0 && (
//           <p>Não existem posts =(</p>
//         )}
        
//         <div className='button-container'>
//           {!searchValue && (
//             <Button onClick={this.loadMorePosts} text="Load More Posts" disabled={noMorePosts} />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

// export default Home;
