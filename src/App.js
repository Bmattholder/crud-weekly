import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PeopleList from "./components/PeopleList"
import Form from "./components/Form";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<PeopleList />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
