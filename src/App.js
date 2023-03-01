import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Terms from "./components/Terms";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Insert from "./components/Insert";
import Update from "./components/Update";
import View from "./components/View";
import Donations from "./components/Donations";
import Donationcard from "./components/Donationcard";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
//Agent Pages
import Agentlogin from "./components/Agentlogin";
import Agentprofile from "./components/Agentprofile";
import UpdateAgent from "./components/UpdateAgent";
import AgentNavBar from "./components/AgentNavbar";
import AgentHome from "./components/AgentHome";
//Admin pages
import Adminnav from "./components/Adminnav";
import Adminreq from "./components/Adminreq";
import Adminview from "./components/Adminview";
import Adminusers from "./components/Adminusers";
import Hireagent from "./components/Hireagent";
import Adminagents from "./components/Adminagents";
import CityAgents from "./components/admincitywise";
import Paymentinsert from "./components/Paymentinsert";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div>
            <Login></Login>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/forget"
        element={
          <div>
            <Forget></Forget>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/register"
        element={
          <div>
            <Register></Register>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/home"
        element={
          <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/home"
        element={
          <div>
            <Navbar></Navbar>
            <Home></Home>
            <Footer></Footer>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/aboutus"
        element={
          <div>
            <Navbar></Navbar>
            <About></About>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/termsandconditions"
        element={
          <div>
            <Terms></Terms>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/donate"
        element={
          <div>
            <Navbar></Navbar>
            <Insert></Insert>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/update"
        element={
          <div>
            <Navbar></Navbar>
            <Update></Update>
            <Footer></Footer>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/view"
        element={
          <div>
            <Navbar></Navbar>
            <View></View>
            <Footer></Footer>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/donations"
        element={
          <div>
            <Navbar></Navbar>
            <Donations></Donations>
            <Footer></Footer>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/card"
        element={
          <div>
            <Donationcard></Donationcard>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/profile"
        element={
          <div>
            <Navbar></Navbar>
            <Profile></Profile>
            <Footer></Footer>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/Agentlogin"
        element={
          <div>
            <Agentlogin></Agentlogin>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/agenthome"
        element={
          <div>
            <AgentNavBar></AgentNavBar>
            <AgentHome></AgentHome>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/agentprofile"
        element={
          <div>
            <AgentNavBar></AgentNavBar>
            <Agentprofile></Agentprofile>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/updateagent"
        element={
          <div>
            <UpdateAgent></UpdateAgent>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/admin"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminreq></Adminreq>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/adminview"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminview></Adminview>
          </div>
        }
      ></Route>

      <Route
        exact
        path="/adminusers"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminusers></Adminusers>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/Hireagent"
        element={
          <div>
            <Adminnav></Adminnav>
            <Hireagent></Hireagent>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/Adminagents"
        element={
          <div>
            <Adminnav></Adminnav>
            <Adminagents></Adminagents>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/admincitywise"
        element={
          <div>
            <Adminnav></Adminnav>
            <CityAgents></CityAgents>
          </div>
        }
      ></Route>
      <Route
        exact
        path="/payment"
        element={
          <div>
            <Adminnav></Adminnav>
            <Paymentinsert></Paymentinsert>
          </div>
        }
      ></Route>
    </Routes>
  );
}
export default App;
