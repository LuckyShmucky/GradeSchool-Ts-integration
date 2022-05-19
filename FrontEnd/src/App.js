import logo from "./logo.svg";
import "./App.css";
import NavBar from "./views/NavBar";
import Main from "./views/Main";
import Footer from "./views/Footer";
import District from "./views/Pages/District";
import School from "./views/Pages/School";

// import Edit from "./views/Pages/Edit";

function App() {

// find all schools is working
const findAllSchools =  async () =>{
  const response = await fetch('http://localhost:3003/schools')
  const newSchool = await response.json()
  console.log(newSchool)
}
// findAllSchools()


// post is working 
const postASchool = async () => {
  const response = await fetch('http://localhost:3003/schools', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "name": "writer",
    "image": 'pic',
    "city": 'Place'
  })
  })
  const newSchool = await response.json()
  console.log(newSchool)
}
// postASchool()

// delete a school route is working
const deleteAschool = async () => {
  const response = await fetch(`http://localhost:3003/schools/628592f9c0e11bf078ef862b`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const deletedSchool = await response.json()
  console.log(deletedSchool)
}
// deleteAschool()
//update works
const updateASchool = async () => {
  const response = await fetch(`http://localhost:3003/schools/627fddaacb80e81a56b9ab4e`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      "name": "writer",
      "image": 'pic',
      "city": 'Place'
    })
  })
  const updatedSchool = await response.json()
  console.log(updatedSchool)
}
// updateASchool()

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
