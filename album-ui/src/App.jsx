import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register";
import UploadPhotosForm from "./components/UploadPhotosForm";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
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
    </Router>
  );
}

export default App;
