import './App.css';
import { NoteData } from './hooks/contextAPI/noteContext';
import { ThemeProvider } from './hooks/contextAPI/ThemeContext';
// import Form from './pages/Form';
import Index from './pages/Index';
import MyForm from './pages/myForm';

function App() {
  return (
    <ThemeProvider>
      <NoteData>
        <Index />
        <MyForm/>
      </NoteData>
    </ThemeProvider>
  );
}

export default App;
