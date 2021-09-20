import "./App.css";
import SongOverview from "./components/SongOverview";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={SongOverview} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
