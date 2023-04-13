import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from "@mui/icons-material/GitHub";
import { MDBCol, MDBFooter } from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <div className="footer">
      <MDBFooter
        bgColor="dark"
        className="text-left text-white text-lg-left fixed-botton"
      >
        <MDBCol className="d-flex justify-content-between p-3 flex-wrap">
          <span>
            Made With <FavoriteIcon style={{ color: "red" }} /> By Prathamesh
            Dhande
          </span>
          <a href="https://github.com/prathameshdhande22">
            <GitHubIcon style={{ color: "white" }} />
          </a>
        </MDBCol>
      </MDBFooter>
    </div>
  );
};
