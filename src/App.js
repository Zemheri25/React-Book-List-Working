import "./App.css";
import BooksContextProvider, { BooksContext } from "./context/Context";
import Books from "./components/Books";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { useContext } from "react";

const options = {
  method: "POST",
  url: "https://books17.p.rapidapi.com/authors/8418015/works",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Host": "books17.p.rapidapi.com",
    "X-RapidAPI-Key": "ed40c2da34msh0bc7231943c2f02p1aca41jsn756f93460fa2",
  },
  data: '{"cursor":1}',
};

function App() {
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState();

  const { input } = useContext(BooksContext);

  const getApi = async () => {
    try {
      const response = await axios(options);
      setBooks(response.data.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    setUpdate(input)
  }, [input]);


  const updatedBooks = books.filter((item) => item.title.includes(update));

  const handleDelete = (id) => {
    const updatedBooks = books.filter((item) => item.id !== id);
    setBooks(updatedBooks);
  }


  return (
    <div className="App">
      <Navbar />
      <h1>Book List</h1>
      {update === ""  ?  books?.map((item, index) => {
        return <Books item={item} key={index} handleDelete = {handleDelete}/>;
      }) : updatedBooks.map((item, index) => {
        return <Books item = {item} key = {index}/>
      })}
    </div>
  );
}

export default App;
