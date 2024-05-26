import "./styles.scss";
import backWardArrow from "../../assets/backward-arrow.svg";
import cancelIcon from "../../assets/cancel-icon.svg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { useFormik } from "formik";
import { OgSizeList, JobFunctionList } from "../../utils/constant";
import { contactDetailSchema } from "../../utils/validators";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import Snackbar from "@mui/material/Snackbar";

export const FormDialog = ({ open, setOpenDialog }) => {
  const [step, setStep] = useState(0);
  const [ogSize, setOgSize] = useState(null);
  const [jobFunction, setJobFunction] = useState(null);
  const [snackBar, setSnackBar] = useState(false);
  const contactDetailsForm = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: contactDetailSchema,
  });

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleOgSizeClick = (chip) => {
    setOgSize(chip);
  };

  const handleJobFunctionClick = (chip) => {
    setJobFunction(chip);
  };

  const submitData = async () => {
    try {
      await addDoc(collection(db, "users"), {
        name: contactDetailsForm.values.name,
        email: contactDetailsForm.values.email,
        org_size: ogSize.value,
        job_function: jobFunction.value,
      });
      setStep(3);
    } catch (e) {
      setSnackBar(true);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} className="form-dialog">
        <DialogContent>
          <DialogTitle>
            <div className="cancel-button-container">
              <img
                src={cancelIcon}
                alt="cancel icon"
                className="cursor-pointer"
                onClick={handleClose}
              />
            </div>
          </DialogTitle>
          <DialogContentText component="div">
            {step === 0 && (
              <div>
                <h3 className="form-dialog-head">Contact details</h3>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  className="name"
                  autoComplete="off"
                  value={contactDetailsForm.values.name}
                  onChange={contactDetailsForm.handleChange}
                  onBlur={contactDetailsForm.handleBlur}
                  helperText={
                    contactDetailsForm.touched.name &&
                    contactDetailsForm.errors.name
                  }
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  className="email"
                  autoComplete="off"
                  value={contactDetailsForm.values.email}
                  onChange={contactDetailsForm.handleChange}
                  onBlur={contactDetailsForm.handleBlur}
                  helperText={
                    contactDetailsForm.touched.email &&
                    contactDetailsForm.errors.email
                  }
                />
                <Button
                  variant="contained"
                  disabled={
                    !contactDetailsForm.isValid ||
                    !contactDetailsForm.values.name ||
                    !contactDetailsForm.values.email
                  }
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Next{""}
                  <svg
                    className="forward-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                  </svg>
                </Button>
              </div>
            )}

            {step === 1 && (
              <div>
                <div className="flex-row items-center">
                  <img
                    src={backWardArrow}
                    alt="Backword Arrow"
                    className="mr-10 cursor-pointer"
                    onClick={() => setStep(0)}
                  />
                  <h3 className="form-dialog-head">What is your org size</h3>
                </div>
                <div className="chip-container">
                  {OgSizeList.map((chip) => (
                    <Chip
                      key={chip.id}
                      label={chip.value}
                      clickable
                      onClick={() => handleOgSizeClick(chip)}
                      style={{
                        backgroundColor:
                          chip.id === ogSize?.id ? "#C87C3C" : "transparent",
                        color:
                          chip.id === ogSize?.id
                            ? "#fff"
                            : "rgba(0, 0, 0, 0.87)",
                      }}
                    />
                  ))}
                </div>
                <Button
                  variant="contained"
                  disabled={!ogSize?.id}
                  onClick={() => {
                    setStep(2);
                  }}
                >
                  Next{" "}
                  <svg
                    className="forward-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                  </svg>
                </Button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex-row items-center">
                  <img
                    src={backWardArrow}
                    alt="Backword Arrow"
                    className="mr-10 cursor-pointer"
                    onClick={() => setStep(1)}
                  />
                  <h3 className="form-dialog-head">
                    What is your job function
                  </h3>
                </div>
                <div className="chip-container">
                  {JobFunctionList.map((chip) => (
                    <Chip
                      key={chip.id}
                      label={chip.value}
                      clickable
                      onClick={() => handleJobFunctionClick(chip)}
                      style={{
                        backgroundColor:
                          chip.id === jobFunction?.id
                            ? "#C87C3C"
                            : "transparent",
                        color:
                          chip.id === jobFunction?.id
                            ? "#fff"
                            : "rgba(0, 0, 0, 0.87)",
                      }}
                    />
                  ))}
                </div>
                <Button
                  variant="contained"
                  disabled={!jobFunction?.id}
                  onClick={submitData}
                >
                  Next{" "}
                  <svg
                    className="forward-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                  </svg>
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="align-center">
                <h3 className="form-dialog-head">
                  Thank you for showing interest!
                </h3>
                <p className="form-dialog-subhead">
                  We will get back to you shortly
                </p>

                <div className="img-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                  >
                    <path
                      d="M117 60C117 64.8638 115.151 69.7279 111.439 73.4392C109.653 75.2254 108.26 77.3152 107.31 79.5953C106.36 81.8754 105.866 84.3453 105.866 86.866C105.866 92.1225 103.738 96.8601 100.305 100.305C96.8601 103.738 92.1227 105.866 86.866 105.866C84.3454 105.866 81.8754 106.36 79.5954 107.31C77.3154 108.26 75.2254 109.653 73.4393 111.439C69.9687 114.91 65.4974 116.747 60.9627 116.975C60.646 116.987 60.3167 117 60 117C55.136 117 50.272 115.151 46.5607 111.439C44.7747 109.653 42.6847 108.26 40.4047 107.31C38.1247 106.36 35.6547 105.866 33.1341 105.866C27.8774 105.866 23.14 103.738 19.6947 100.305C16.262 96.8601 14.1341 92.1225 14.1341 86.866C14.1341 84.3453 13.64 81.8754 12.69 79.5953C11.74 77.3152 10.3467 75.2254 8.56069 73.4392C4.84936 69.7279 3 64.8638 3 60C3 55.1359 4.84936 50.2721 8.56069 46.5608C10.3467 44.7747 11.74 42.6848 12.69 40.4047C13.64 38.1246 14.1341 35.6547 14.1341 33.1341C14.1341 27.8775 16.262 23.1399 19.6947 19.6946C23.14 16.262 27.8774 14.1341 33.1341 14.1341C35.6547 14.1341 38.1247 13.6399 40.4047 12.6899C42.6847 11.7399 44.7747 10.3467 46.5607 8.56084C50.272 4.84928 55.136 3 60 3C60.3167 3 60.646 3.01268 60.9627 3.02536C65.4974 3.25327 69.9687 5.08988 73.4393 8.56084C76.9987 12.1326 81.8247 14.1341 86.866 14.1341C92.1227 14.1341 96.8601 16.262 100.305 19.6946C103.738 23.1399 105.866 27.8775 105.866 33.1341C105.866 35.6547 106.36 38.1246 107.31 40.4047C108.26 42.6848 109.653 44.7747 111.439 46.5608C115.151 50.2721 117 55.1359 117 60Z"
                      fill="#5ADBAD"
                    />
                    <path
                      d="M50.3363 81.2724C49.1606 81.2724 48.0331 80.8054 47.2012 79.9742L32.8491 65.6221C31.118 63.8903 31.118 61.0836 32.8491 59.3519C34.5809 57.6213 37.3876 57.6213 39.1194 59.3519L50.3363 70.5694L80.8786 40.0259C82.6103 38.2954 85.417 38.2954 87.1488 40.0259C88.88 41.7577 88.88 44.5644 87.1488 46.2956L53.4714 79.9742C52.6396 80.8054 51.5121 81.2724 50.3363 81.2724Z"
                      fill="white"
                    />
                    <path
                      opacity="0.25"
                      d="M116.998 60C116.998 64.8638 115.149 69.7279 111.438 73.4392C109.652 75.2254 108.258 77.3153 107.308 79.5953C106.358 81.8754 105.864 84.3453 105.864 86.866C105.864 92.1225 103.736 96.8602 100.304 100.305C96.8583 103.738 92.1209 105.866 86.8643 105.866C84.3436 105.866 81.8736 106.36 79.5936 107.31C77.3137 108.26 75.2236 109.653 73.4376 111.439C69.9669 114.91 65.4956 116.747 60.9609 116.975V3.02539C65.4956 3.2533 69.9669 5.08991 73.4376 8.56087C76.997 12.1327 81.823 14.1341 86.8643 14.1341C92.1209 14.1341 96.8583 16.262 100.304 19.6946C103.736 23.1399 105.864 27.8775 105.864 33.1341C105.864 35.6547 106.358 38.1247 107.308 40.4047C108.258 42.6848 109.652 44.7747 111.438 46.5609C115.149 50.2721 116.998 55.1359 116.998 60Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Button variant="contained" onClick={handleClose}>
                  Done
                </Button>
              </div>
            )}
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Snackbar
        className="snackbar"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        open={snackBar}
        onClose={() => {
          setSnackBar(false);
        }}
        message="Something went wrong! Try Again"
        key={"topcenter"}
      />
    </>
  );
};
