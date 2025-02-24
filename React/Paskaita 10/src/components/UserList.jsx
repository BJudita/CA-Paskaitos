import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";

const UserList = React.memo(({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
});

UserList.displayName = "UserList";
UserList.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired, // 
  };
export default UserList;
