import Board from './components/Board'

function App() {
  return (
    <div className="App">

      <ul className='nav'>
        <li className='nav-item'>
          <a href='https://giancastle.com' className='nav-link'>
            My Blog
          </a>
        </li>
        <li className='nav-item'>
          <a href='https://www.linkedin.com/in/gco-c/' className='nav-link'>
            Linkedin
          </a>
        </li>
      </ul>
     <Board />
    </div>
  )
}

export default App
