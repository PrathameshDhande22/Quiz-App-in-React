import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { setOpen } from "../States/Reducers/startbtn";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../States/Reducers/name";
import { useNavigate } from "react-router-dom";

export const UserDetails = ({ start }) => {
  const startModal = useSelector((state) => state.canStart);
  const dispatch = useDispatch();
  const nameField = useRef();
  const navigate = useNavigate();

  return (
    <div className="modalpopup">
      <Dialog open={startModal} onClose={() => dispatch(setOpen())}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter Your Name :</DialogContentText>
          <TextField
            ref={nameField}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate("/quiz")}>Proceed</Button>
          <Button onClick={() => dispatch(setOpen())}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
