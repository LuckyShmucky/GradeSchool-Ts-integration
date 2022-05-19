import logo from "./logo.svg";
import "./App.css";
import NavBar from "./views/NavBar";
import Main from "./views/Main";
import Footer from "./views/Footer";
import District from "./views/Pages/District";
import School from "./views/Pages/School";

function App() {
  const fetchURL_API = async () => {
     const response = await fetch('https://back-end-for-grade-school.herokuapp.com/schools')
     const schools = await response.json()
     console.log(schools)
  }
  fetchURL_API()
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
