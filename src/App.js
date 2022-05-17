import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Chat";

import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  console.log("the value of user=====>",user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Header />
            <div className="app__body">
              <Sidebar />

              <Switch>
                <Route path="/" exact>
                  <div className="app__welcome">
                  <h1 className="app__header">WELCOME</h1>
                  <p className="app__p">Please Select a Channel to start Chatting</p> 
                  </div>
                  
                </Route>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
