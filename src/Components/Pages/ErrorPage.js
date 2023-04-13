import { Button } from "@mui/material";
import errorImage from "../../Images/error.png";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navi = useNavigate();
  return (
    <div className="error">
      <img src={errorImage} alt="Error" className="errimg" />
      <p>Error Not a Valid Page</p>
      <Button
        variant="outlined"
        className="border-3 border-primary"
        onClick={() => navi("/")}
      >
        Go To Main Page
      </Button>
    </div>
  );
};
