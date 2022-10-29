import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoList from './Pages/TodoList';
import  {Home } from './Pages/Home';
import { About } from './Pages/About';
import { Timeline} from './Pages/Timeline';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <nav class = "navbar">
             <Link to='/Home' className='mylink'>Home</Link> 
            <Link to='/About' className='mylink'>About</Link>
            <Link to='/Todo' className='mylink'>Todo</Link>
            <Link to='/Timeline' className='mylink'>Timeline</Link>
          </nav>
            <Routes>
               <Route exact path='/Home' element={<Home/>} /> 
              <Route exact path='/About' element={<About />} />
              <Route exact path='/Todo' element={<TodoList/>} />
              <Route exact path='/Timeline' element={<Timeline/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;