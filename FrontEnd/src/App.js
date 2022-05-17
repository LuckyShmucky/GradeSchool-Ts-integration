import logo from "./logo.svg";
import "./App.css";
import NavBar from "./views/NavBar";
import Main from "./views/Main";
import Footer from "./views/Footer";
import District from "./views/Pages/District";
import School from "./views/Pages/School";

// import Edit from "./views/Pages/Edit";

function App() {
 
  const handlePost = async () => {
    const response = await fetch(`http://localhost:3003/schools/627ff0233fecd55a84bdcfca`,{
      method: 'DELETE',
      mode: 'cors',
      headers:{
        'Content-Type': 'application/json'
              } 
    })
    const deletedData = await response.json()
    console.log(deletedData)
    }

  handlePost()
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
//D86FA3 text color
//fcf0cc background
//100406 accent
//TO DO
//Fix main page image
//Build "Add School" and "Add District" forms
//Build "Add School" and "Add District" forms
