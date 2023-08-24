import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../Redux/actions";

const UsersDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.userName}</h1>
      ))}
    </div>
  );
};

export default UsersDashboard;
