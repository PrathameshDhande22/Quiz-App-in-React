import { useSelector, useDispatch } from "react-redux";
import { Button, Tooltip } from "@mui/material";
import { UserDetails } from "../UserDetails";
import { setOpen } from "../../States/Reducers/startbtn";
import { Typing } from "../Typing";
import { About } from "../About";

export const HomePage = () => {
  const dipatch = useDispatch();
  const start = useSelector((state) => state.canStart);

  const handleModal = () => {
    dipatch(setOpen());
  };
  return (
    <div className="homepg">
      <Typing />
      {start ? (
        <UserDetails />
      ) : (
        <span className="startbtn">
          <Tooltip title="Click Here to Start the Quiz" arrow={true}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={handleModal}
            >
              Start Quiz
            </Button>
          </Tooltip>
        </span>
      )}
      <About />
    </div>
  );
};
