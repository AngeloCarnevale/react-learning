import { Component } from 'react'
import './App.css'


class App extends Component {

  state = {
    count: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O cortpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O cortpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O cortpo 3'
      },
    ]
  }

  componentDidMount() {
    this.handleTimeOut()
  }

  componentDidUpdate(){
    this.handleTimeOut()
  }

  handleTimeOut = () => {
    const { posts, count } = this.state
    posts[0].title = 'O título mudou'
    

    setTimeout(() => {
      this.setState({posts, count: count + 1})
    }, 0.00001)
  }

  render() {

    const { posts, count } = this.state

    return (
      <div className='App'>
        <h1>{count}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>

        ))}
      </div>
    )
  }
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
