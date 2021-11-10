import DayList from "./component/DayList";
import Day from "./component/Day";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route pat="/day">
            <Day />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
