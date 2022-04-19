import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CreateTasks from './Pages/Create-task'
import App from './App';

render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='home' element={<Home />} />
      <Route path='create-task' element={<CreateTasks />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
); 
