import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import UploadPhotosForm from "./components/UploadPhotosForm";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <div className="content">
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/upload-photos">
              <UploadPhotosForm />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
