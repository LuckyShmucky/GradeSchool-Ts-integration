import logo from "./logo.svg";
import "./App.css";
import NavBar from "./views/NavBar";
import Main from "./views/Main";
import Footer from "./views/Footer";
import District from "./views/Pages/District";
import School from "./views/Pages/School";

// import Edit from "./views/Pages/Edit";

function App() {
//   const createSchool = async () =>{
//     const response = await fetch('fff', {
//         method: 'POST',
//         mode: 'cors',
//         header: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "name": "schoolyschool",
//             "image:": "pic of a prison",
//             "city": "somewhere you don't want to be"
//         })
//     })
//     const newSchool = await response.json()
//     console.log(newSchool)
// }
const createSchool =  async () =>{
  const response = await fetch('http://localhost:3003/schools',{
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
            },
      body: JSON.stringify({
        "name": "schoolyschool",
        "city": "somewhere",
        "image:": "pic of a prison"
        })
  })
  const newSchool = await response.json()
  console.log(newSchool)
}

createSchool()
  // handlePost()
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
