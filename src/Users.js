import { useHistory } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { context } from "./App.js";
import { useContext } from "react";

function Users({ id, name, EmailId, pic, phoneNo, jobRole, deleteButton, editButton, }) {
  const history = useHistory("");
  return (
    <div className="user-container">
      <img className="prof-pic" src={pic} alt={name} />
      <div className="id-name">
        <p>{name}</p>
        <IconButton
          aria-label="more info"
          onClick={() => history.push("/profile/" + id)}
          color="primary"
          className="info-button"
        >
          <InfoIcon />
        </IconButton>
      </div>
      <p>Email: {EmailId}</p>
      <p>PhoneNo : {phoneNo}</p>
      <p>JobRole : {jobRole}</p>
      <div className="edit-delete-btn">
        {editButton}{deleteButton}
      </div>

    </div>
  );
}
export function UsersList() {
  const history = useHistory("");
  const { users, setUsers } = useContext(context);
  return (
    <div className="user">
      {users.map(({ id, name, pic, EmailId, phoneNo, jobRole }, index) => (
        <Users
          id={index}
          name={name}
          pic={pic}
          EmailId={EmailId}
          phoneNo={phoneNo}
          jobRole={jobRole}
          editButton={<IconButton
            aria-label="edit movie"
            style={{ marginLeft: "auto" }}
            color="error"
            className="edit-button"
            onClick={() => history.push("/edit-user/" + index)}
          >
            <EditIcon />
          </IconButton>}
          deleteButton={<IconButton
            aria-label="delete movie"
            onClick={() => {
              console.log("deliting,..", index);

              //assign the index as deleteindex so it refers to the particular we can easyly undersatand
              const deleteIndex = index;

              // the filter function also send two parameter one is user another one is index
              const remainingUsers = users.filter(
                (mv, idx) => idx !== deleteIndex
              );

              //filtered movie show in the window
              console.log(remainingUsers);
              setUsers(remainingUsers);
            }}
            color="secondary"
            className="delete-button"
          >
            <DeleteIcon />
          </IconButton>} />
      ))}
    </div>
  );
}
