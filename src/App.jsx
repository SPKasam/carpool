import './App.css';
import FromButton from './components/FromButton';
import ToButton from './components/ToButton';
import CreatePostBtn from './components/CreatePostBtn';
import HomeBtn from './components/HomeBtn';
import NewPost from './components/NewPost/NewPost';
import Intro from './components/Intro/Intro';
import React, {useState, useEffect} from 'react';
import CityCardslist from './components/CityCardsList/CityCardsList';
import CityPage from './components/CityPage/CityPage';


const App = () => {

  const [page, setPage] = useState("home");
  const [city,setCity] = useState("UTD");
  const [toUTD, setToUTD] = useState(false)

  const [data, setData] = useState([ 
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

  // useEffect(() => {}, [location,page, utdPosts, otherPosts])
  let overallPageData; 
  if (page === "home") // home
  {
    overallPageData =  
    <div>   
        <Intro/>
            <div>
              <h1 className="title"> To explore rides, choose a city! </h1>
              <div className = "topright">

                <CreatePostBtn setPage={setPage}/>
                </div>

              <CityCardslist setCity={setCity} setPage={setPage}/>
            </div>
      </div>
  }
  else if (page === "new_post") //create post
  {
    overallPageData =   
     <div>
      <div className = "topright">
        <HomeBtn setPage={setPage}/>
      </div>
      <NewPost setPage = {setPage} data = {data} setData = {setData} />
    </div>
  }
  else //city page
  { 
    overallPageData = 
    <div>
      <div className = "topright">
        <HomeBtn setPage={setPage}/>
      </div>
      <div className = "flex justify-center pt2 pb3">
        <FromButton city =  {city} setToUTD = {setToUTD}/>
        <ToButton  city =  {city} setToUTD = {setToUTD}/>
      </div>
        <CityPage city={city} data={data}  toUTD ={toUTD}/>
    </div>
  }
  return (
    <div>
      {overallPageData}
    </div>
  )
  
}
export default App;
