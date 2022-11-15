import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';
import FromUtdCardList from './components/FromUtdCardList/FromUtdCardList';
import ToUtdCardList from './components/ToUtdCardList/ToUtdCardList';
import CreatePostBtn from './components/CreatePostBtn';
import NewPost from './components/NewPost/NewPost';
import React, {useState, useEffect} from 'react';


const App = () => {

  const [location, setLocation] = useState("UTD");
  const [page, setPage] = useState("home");

  useEffect(() => {}, [location,page])

  return (
    <div>
        <h1 className = "title tc courier pt2"> UTD Carpool </h1>
        {
          (page === "home") ? 
          <div>
          <div className = "createpost">
            <CreatePostBtn setPage={setPage}/>
          </div>
          <div className = "flex justify-center pt2 pb3"> 
            <FromButton setLocation={setLocation}/>
            <ToButton setLocation={setLocation}/>
          </div>
          {
            (location === "UTD") ?
            <FromUtdCardList/>
            :
            <ToUtdCardList/>
          }
          </div>
          : 
          <NewPost/> 
        }        
    </div>
  );
}

export default App;
