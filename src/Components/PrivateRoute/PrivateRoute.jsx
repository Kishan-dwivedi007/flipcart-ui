import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const PrivateRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    let tokenData = localStorage.getItem("TOKEN");
    if (!tokenData) {
      navigate("/login");
    }
  });

  const { Component } = props;
  return (
    <div>
      <Component />
    </div>
  );
};

export default PrivateRoute;
