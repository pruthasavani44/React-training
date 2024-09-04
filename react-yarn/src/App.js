import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <h1 className='text-gray-900 text-2xl'>React Component</h1>
     

      <Navbar />
      <Header title="Lending Page" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, id." />
    </>
  );
}

export default App;
