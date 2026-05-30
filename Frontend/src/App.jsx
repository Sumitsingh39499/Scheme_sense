import { useState } from "react";
import Form from "./FormComponent";
import Home from "./HomeComponent";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ResultComponent from "./ResultComponent";

function App() {
  const [result, setResult] = useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/form" element={<Form setResult={setResult} />}/>
          <Route path="/result" element={ <ResultComponent result = {result}/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;