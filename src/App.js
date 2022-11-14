import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';

function App() {
  return (
    <div>
        <h1 className = "tc courier pt2"> UTD Carpool </h1>
        <div className = "flex justify-center pt2"> 
          <FromButton/>
          <ToButton/>
        </div>
        {/*
          <ToButton/>
          <ToUtdCardList/>
          <FromUtdCardList/>
        */}
    </div>
  );
}

export default App;
