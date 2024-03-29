import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';
import FromUtdCardList from './components/FromUtdCardList/FromUtdCardList';
import ToUtdCardList from './components/ToUtdCardList/ToUtdCardList';
import CreatePostBtn from './components/CreatePostBtn';
import HomeBtn from './components/HomeBtn';
import NewPost from './components/NewPost/NewPost';
import Intro from './components/Intro/Intro';
import React, {useState, useEffect} from 'react';
import CityCardslist from './components/CityCardsList/CityCardsList';
import CityPage from './components/CityPage/CityPage';


const App = () => {

  const [location, setLocation] = useState("UTD");
  const [page, setPage] = useState("home");
  const [city,setCity] = useState("");
  const [utdPosts, setUtdPosts] = useState([
    {
      from: "UTD",
      to: "Austin" ,
      price: "20",
      name: "Robin",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
    {
      from: "UTD",
      to: "Houston" ,
      price: "15",
      name: "Jack",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
    {
      from: "UTD",
      to: "College Station" ,
      price: "22",
      name: "Daniel",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
    {
      from: "UTD",
      to: "Round Rock" ,
      price: "19",
      name: "Sam",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    }
  ])
  const [otherPosts, setOtherPosts] = useState([
    {
      from: "Austin",
      to: "UTD" ,
      price: "20",
      name: "Robin",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
    {
      from: "Houston",
      to: "UTD" ,
      price: "18",
      name: "Robin",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
    {
      from: "Round Rock",
      to: "UTD" ,
      price: "20",
      name: "Robin",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
    {
      from: "College Station",
      to: "UTD" ,
      price: "22",
      name: "Robin",
      description: "Hello there, nice to meet you. I'm a senior at UTD studying computer science..."
    },
  ])

  useEffect(() => {}, [location,page, utdPosts, otherPosts])

  return (
    <div className="app">
        <Intro/>
        <HomeBtn setPage={setPage}/>
        {
          (page === "home") ?
          <div>
            <h1 className="title"> To explore rides, choose a city! </h1>
            <CityCardslist setCity={setCity} setPage={setPage}/>
          </div>
          :
          <CityPage city={city}/>
            
          
          
        }
        
        
{/*        <div className="everythingelse">
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
              <FromUtdCardList className="fromutd" posts = {utdPosts}/>
              :
              <ToUtdCardList posts = {otherPosts}/>
            }
            </div>
            :
            <div>
              <div className = "topright">
                <HomeBtn setPage={setPage}/>
              </div>
              <NewPost setPage = {setPage} utdPosts = {utdPosts} setUtdPosts = {setUtdPosts} otherPosts = {otherPosts} setOtherPosts = {setOtherPosts} />
            </div>
          }
        </div>*/}
    </div>
  );
}

export default App;
