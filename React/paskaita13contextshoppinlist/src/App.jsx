import './App.css'
import ThemeProvider from './components/Context/ThemeProvider';
import Header from './components/Layout/Header';
import MainContent from './components/Layout/MainContent';
import ThemeToggleButton from './components/UI/ThemeToggleButton';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <ThemeToggleButton />
        <MainContent />
      </ThemeProvider>
    </>
  );
}

export default App;
