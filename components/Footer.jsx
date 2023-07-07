import React, { useState } from "react";
import style from "../styles/Footer.module.css";
import {
  FaEnvelope,
  FaHome,
  FaMobileAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Footer = () => {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };

  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setOpenSecond(false);
    setOpenThird(false);
  };

  return (
    <div>
      <div className={style.ContactLinks} id="contactLinks">
        <div className={style.ContactLinksIcons}>
          <div>
            <FaHome size="35px" onClick={() => setOpen(true)} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Adress:"}</DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Biblioteksgången 8, lgh 1304, 183 70 Täby
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <FaEnvelope size="35px" onClick={() => setOpenSecond(true)} />
            <Dialog
              open={openSecond}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Mail:"}</DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  sofia.montgomery@gmail.com
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <FaMobileAlt size="35px" onClick={() => setOpenThird(true)} />
            <Dialog
              open={openThird}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Mobil:"}</DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  070-468 20 76
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
          <FaGithub
            size="35px"
            onClick={handleURL("https://github.com/fiamont")}
          />
          <FaLinkedin
            size="35px"
            onClick={handleURL(
              "https://www.linkedin.com/in/sofia-montgomery-3175a821a"
            )}
          />
        </div>
      </div>
      <div className={style.Footer}>
        <p>Copyright &copy; 2022 Sofia Montgomery Portfolio</p>
      </div>
    </div>
  );
};

export default Footer;
