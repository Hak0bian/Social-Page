import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "../LoginPage/LoginPage";

const Home = () => {
  const { userId } = useSelector((state) => state.auth);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");

    if(userId) {
      localStorage.setItem("userId", userId);
      setRedirect(userId);
    }else if (storedId) {
      setRedirect(storedId);
    }
  }, [userId]);

  if(redirect) {
    return <Navigate to={`/profile/${redirect}`} />;
  }

  return (
    <section>
      <LoginPage />
    </section>
  );
};

export default Home;
