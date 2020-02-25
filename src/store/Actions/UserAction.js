export const UPDATE_USER = "UPDATE_USER";

const fetchUsers = dispatch => {
  fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(res => dispatch({ type: UPDATE_USER, payload: res.data }));
};

const userUpdate = { type: UPDATE_USER, payload: "Taha" };
export default fetchUsers;
