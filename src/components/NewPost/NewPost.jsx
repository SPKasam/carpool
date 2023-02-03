import React,{useState} from 'react';


const NewPost = ({setPage, data, setData}) => {

  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const createPost = () => {
    let post = {
      name: name,
      from: from,
      to: to,
      price: price,
      description: desc
    }

    setData(data => [...data,post])
    setPage("home")
  }

  return (
    <div className = "pl6 pt4">
        <div className="measure">
            <label
              htmlFor="name"
              className="f4 b db mb2"
            >
              Name:
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              onChange = {e => setName(e.target.value)}
            />
            <small
              id="name-desc"
              className="f6 black-60 db mb2"
            >
              Please enter your official full name
            </small>
        </div>


        <div className="measure pt3">
            <label
              htmlFor="name"
              className="f4 b db mb2"
            >
              Departing from:
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              onChange = {e => setFrom(e.target.value)}
            />
            <small
              id="name-desc"
              className="f6 black-60 db mb2"
            >
              Please enter "UTD" or the city you are departing from
            </small>
        </div>

        <div className="measure pt3">
            <label
              htmlFor="name"
              className="f4 b db mb2"
            >
              Departing to:
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              onChange = {e => setTo(e.target.value)}
            />
            <small
              id="name-desc"
              className="f6 black-60 db mb2"
            >
              Please enter "UTD" or the city you are departing from
            </small>
        </div>

        <div className="measure pt3">
            <label
              htmlFor="name"
              className="f4 b db mb2"
            >
              Price:
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              onChange = {e => setPrice(e.target.value)}
            />
            <small
              id="name-desc"
              className="f6 black-60 db mb2"
            >
              Please enter the price of the ride in USD. Exclude the $ symbol.
            </small>
        </div>

        <div className="measure pt3">
            <label
              htmlFor="name"
              className="f4 b db mb2"
            >
              Description:
            </label>
            <input
              id="name"
              className="input-reset ba b--black-20 pa2 mb2 db w-100"
              type="text"
              aria-describedby="name-desc"
              onChange = {e => setDesc(e.target.value)}
            />
            <small
              id="name-desc"
              className="f6 black-60 db mb2"
            >
              Please enter a brief description of yourself.
              Try to include information such as your major, year of college,
              and any hobbies.
            </small>
        </div>

        <div className = "pt3">
    			<input
    		        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
    		        type="submit"
    		        value="Post"
                onClick = {createPost}
    		    />
    		</div>
    </div>
  )
}

export default NewPost;
