import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";

export default function Rotas() {
  const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed ? <Item /> : <Signin />;
  };
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
