import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';
import FromUtdCardList from './components/FromUtdCardList/FromUtdCardList';
import ToUtdCardList from './components/ToUtdCardList/ToUtdCardList';
import CreatePostBtn from './components/CreatePostBtn';
import React, {useState, useEffect} from 'react';


const App = () => {

  const [location, setLocation] = useState("UTD");

  const onButtonClick = (loc) => {
    setLocation(loc);
  } 

  useEffect(() => {

  }, [location])

  return (
    <div>
        <h1 className = "title tc courier pt2"> UTD Carpool </h1>
        <div className = "createpost">
          <CreatePostBtn onButtonClick={onButtonClick}/>
        </div>
        <div className = "flex justify-center pt2 pb3"> 
          <FromButton onButtonClick={onButtonClick}/>
          <ToButton onButtonClick={onButtonClick}/>
        </div>
        {
          (location === "UTD") ?
          <FromUtdCardList/>
          :
          <ToUtdCardList/>
        }
        
        
    </div>
  );
}

export default App;
