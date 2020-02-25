import "./App.css";

import { connect } from "react-redux";
import personUpdate from "./store/Actions/PersonActions";
import updateGame from "./store/Actions/GameActions";
import fetchUsers from "./store/Actions/UserAction";

import React from "react";
import SideBarComp from "./Components/Fixed/SideBar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <SideBarComp />
      </div>
    );
  }
}

{
  /* <h2>Person:{props.person.name}</h2> */
}
{
  /* <button onClick={props.updatePerson}>Update Person</button> */
}
{
  /* <br />
        Users : <button onClick={props.fetchUsers}>Get From Api Users</button>
        {props.users.length === 0 ? (
          <p>No Users Found</p>
        ) : (
          props.users.map(user => (
            <p>
              {user.id} --- {user.first_name}
            </p>
          ))
        )} */
}
const mapStateToProps = state => {
  return {
    person: state.person,
    game: state.game,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePerson: () => {
      dispatch(personUpdate);
    },
    updateGame: () => {
      dispatch(updateGame);
    },
    fetchUsers: () => dispatch(fetchUsers)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
