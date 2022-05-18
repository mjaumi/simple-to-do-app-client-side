import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Todo from './components/Todo/Todo';

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
