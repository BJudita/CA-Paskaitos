import React from "react";
import PropTypes from "prop-types";

const UserItem = React.memo(({ user }) => {
  return (
    <li>
      <p><strong>{user.name}</strong></p>
      <p>{user.email}</p>
    </li>
  );
});

UserItem.displayName = "UserItem";
UserItem.propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };
export default UserItem;