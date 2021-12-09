import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useHistory, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { AddUser } from "./AddUser";
import { UserDetails } from "./UserDetails";
import { EditUser } from "./EditUser";
import { UsersList } from "./Users";
import { createContext } from "react";

//creating a context 
export const context = createContext();

export default function App() {
  const usersList = [
    {
      name: "Douglas Upton",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhF-ShyYEEC-Mf0kZATO78rTccg5rMY-URCilv2uakAwp496pO1RRvz8SdHhPLfTpIY98&usqp=CAU",
      EmailId: "Blaze40@hotmail.com",
      phoneNo: "(476) 585-5243",
      jobRole: "Representative",
      id: "1",
    },
    {
      name: "Constance Runte",
      pic: "https://cdn.fakercloud.com/avatars/newbrushes_128.jpg",
      EmailId: "Flatley86@gmail.com",
      phoneNo: "233.265.9802 ",
      jobRole: " Director",
      id: "2",
    },
    {
      name: "Michelle Murray",
      pic: "https://cdn.fakercloud.com/avatars/francis_vega_128.jpg",
      EmailId: "Friesen38@yahoo.com",
      phoneNo: "1-260-900-8511 ",
      jobRole: " Liaison",
      id: "3",
    },
    {
      name: "Wm Bailey",
      pic: "https://cdn.fakercloud.com/avatars/ryanmclaughlin_128.jpg",
      EmailId: "Wiegand@gmail.com",
      phoneNo: "309.402.0994 ",
      jobRole: "Analyst",
      id: "4",
    },
    {
      name: "Jesus Schoen",
      pic: "https://cdn.fakercloud.com/avatars/markjenkins_128.jpg",
      EmailId: "Homenick@hotmail.com",
      phoneNo: "(396) 772-1478 ",
      jobRole: "Representative",
      id: "5",
    },
    {
      name: "John Krajcik",
      pic: "https://cdn.fakercloud.com/avatars/kevinjohndayy_128.jpg",
      EmailId: "Treutel88@yahoo.com",
      phoneNo: "(460) 383-1653 ",
      jobRole: "Technician",
      id: "6",
    },
    {
      name: "Tommy Stracke Jr.",
      pic: "https://cdn.fakercloud.com/avatars/janpalounek_128.jpg",
      EmailId: "Williamson@yahoo.com",
      phoneNo: "1-428-323-1876",
      jobRole: "Orchestrator",
      id: "7",
    },
    {
      name: "Amanda Weber",
      pic: "https://cdn.fakercloud.com/avatars/ninjad3m0_128.jpg",
      EmailId: "Clementina51@hotmail.com",
      phoneNo: "(400) 599-9763",
      jobRole: "Analyst",
      id: "8",
    },
    {
      name: "Carl Witting",
      pic: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture-986x1024.jpg",
      EmailId: "Swift@hotmail.com",
      phoneNo: "(675) 516-9790",
      jobRole: "Developer",
      id: "9",
    },
    {
      name: "Ms. Dora Hoppe",
      pic: "https://cdn.fakercloud.com/avatars/jennyyo_128.jpg",
      EmailId: "Muller64@hotmail.com",
      phoneNo: "(562) 693-5465",
      jobRole: " Coordinator",
      id: "10",
    },
  ];

  const history = useHistory();

  const [users, setUsers] = useState(usersList);
  return (
    
//     providing components in the parent component for giving values to the child components
    
    <context.Provider value={{ users, setUsers }}>
      <div className="App">
        <AppBar position="static" color="success">
          <Toolbar>
            <header className="app-title"> FRIEND BOOK </header>
            <Button
              className="txt-btn"
              color="inherit"
              onClick={() => history.push("/")}
              variant="text"
            >
              Home
            </Button>
            <Button
              className="txt-btn"
              color="inherit"
              onClick={() => history.push("/users")}
              variant="text"
            >
              Users
            </Button>
            <Button
              className="txt-btn"
              color="inherit"
              onClick={() => history.push("/create-user")}
              variant="text"
            >
              AddUser
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/edit-user/:id">
            <EditUser />
          </Route>
          <Route exact path="/users">
            <UsersList />
          </Route>
          <Route path="/profile/:id">
            <UserDetails />
          </Route>
          <Route path="/create-user">
            <AddUser />
          </Route>
        </Switch>
      </div>
    </context.Provider>
  );
}

function Welcome() {
  return (
    <div className="welcome">
      <h1 className="welcome-note">
        Welcome to <span className="board">FRIEND BOOK</span>
      </h1>
    </div>
  );
}
