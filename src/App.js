import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';
import FromUtdCardList from './components/FromUtdCardList/FromUtdCardList';
import ToUtdCardList from './components/ToUtdCardList/ToUtdCardList';
import CreatePostBtn from './components/CreatePostBtn';
import HomeBtn from './components/HomeBtn';
import NewPost from './components/NewPost/NewPost';
import React, {useState, useEffect} from 'react';


const App = () => {

  const [location, setLocation] = useState("UTD");
  const [page, setPage] = useState("home");
  const [utdPosts, setUtdPosts] = useState([
    {
      from: "UTD",
      to: "Austin" ,
      price: "20",
      name: "Robin"
    },
    {
      from: "UTD",
      to: "Houston" ,
      price: "15",
      name: "Jack"
    },
    {
      from: "UTD",
      to: "College Station" ,
      price: "22",
      name: "Daniel"
    },
    {
      from: "UTD",
      to: "Round Rock" ,
      price: "19",
      name: "Sam"
    }
  ])
  const [otherPosts, setOtherPosts] = useState([
    {
      from: "Austin",
      to: "UTD" ,
      price: "20",
      name: "Robin"
    },
    {
      from: "Houston",
      to: "UTD" ,
      price: "18",
      name: "Robin"
    },
    {
      from: "Round Rock",
      to: "UTD" ,
      price: "20",
      name: "Robin"
    },
    {
      from: "College Station",
      to: "UTD" ,
      price: "22",
      name: "Robin"
    },
  ])

  useEffect(() => {}, [location,page])

  return (
    <div>
        <h1 className = "title tc courier pt2"> UTD Carpool </h1>
        {
          (page === "home") ?
          <div>
          <div className = "topright">
            <CreatePostBtn setPage={setPage}/>
          </div>
          <div className = "flex justify-center pt2 pb3">
            <FromButton setLocation={setLocation}/>
            <ToButton setLocation={setLocation}/>
          </div>
          {
            (location === "UTD") ?
            <FromUtdCardList posts = {utdPosts}/>
            :
            <ToUtdCardList posts = {otherPosts}/>
          }
          </div>
          :
          <div>
            <div className = "topright">
              <HomeBtn setPage={setPage}/>
            </div>
            <NewPost/>
          </div>
        }
    </div>
  );
}

export default App;
