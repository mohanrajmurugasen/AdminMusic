import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import "../../assets/css/oneRelease.css";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";
import authAxios from "../../interceptors/authAxios";
import { CCol, CModal, CRow } from "@coreui/react";
import { CModalBody } from "@coreui/react";
import { CModalHeader } from "@coreui/react";
import { CModalTitle } from "@coreui/react";
import DatePicker from "react-date-picker";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function OneRelease() {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  const [datas, setDatas] = useState();
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState(new Date());
  const [value1, setValue1] = useState(new Date());
  const [language, setlanguage] = useState(null);

  const [tittle, setTittle] = useState();
  const [image, setImage] = useState();
  const [song, setSong] = useState();
  const [video, setVideo] = useState();

  const onSubmit = (data) => {
    setDatas(data);
    setVisible(false);
    console.log(data, language);
  };

  const submiting = () => {
    // const formData = new FormData();
    // formData.append("tittle", tittle);
    // formData.append("image", image);
    // formData.append("song", song);
    // formData.append("video", video);
    // authAxios
    //   .post("upload", formData)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
  };

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  return (
    <div
      style={{
        paddingTop: "5%",
        width: "100%",
        paddingBottom: "3%",
        overflow: "auto",
      }}
    >
      <Box component="form" noValidate sx={{ margin: "auto", maxWidth: "50%" }}>
        <h1
          style={{
            marginBottom: "10px",
            textAlign: "center",
            color: "rgb(0 0 48)",
          }}
        >
          Release Information
        </h1>
        <p style={{ marginBottom: "5px" }}>Title Content</p>
        <TextField
          id="filled-basic"
          label="Enter tittle content"
          name="tittle"
          variant="filled"
          fullWidth
          margin="normal"
          required
          sx={{ mt: 0, mb: 1 }}
          onChange={(e) => setTittle(e.target.value)}
        />
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={() => setVisible(!visible)}
            style={{ backgroundColor: "#383a50", margin: "15px 0px" }}
            endIcon={<BrowserUpdatedIcon />}
          >
            Meta Data
          </Button>
        </Stack>
        <p style={{ marginBottom: "5px" }}>Album Cover</p>
        <FilledInput
          margin="normal"
          required
          fullWidth
          name="image"
          type="file"
          sx={{ mb: 3 }}
          onChange={(e) => setImage(e.target.value)}
        />
        <p style={{ marginBottom: "5px" }}>Song</p>
        <FilledInput
          margin="normal"
          required
          fullWidth
          name="song"
          type="file"
          sx={{ mb: 3 }}
          onChange={(e) => setSong(e.target.value)}
        />
        <p style={{ marginBottom: "5px" }}>Music Video</p>
        <FilledInput
          margin="normal"
          required
          fullWidth
          name="video"
          type="file"
          sx={{ mb: 3 }}
          onChange={(e) => setVideo(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Click to confirm for upload"
          sx={{ mb: 3 }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ backgroundColor: "#383a50" }}
          onClick={submiting}
        >
          Upload
        </Button>
      </Box>
      <CModal fullscreen visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle
            style={{
              margin: "auto",
              width: "100%",
              marginBottom: "10px",
              textAlign: "center",
              color: "rgb(0 0 48)",
            }}
          >
            Release Information
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ margin: "auto", maxWidth: "60%" }}
          >
            <CRow
              className="align-items-start"
              sm={{ gutter: 5 }}
              lg={{ gutter: 5 }}
              md={{ gutter: 5 }}
            >
              <CCol>
                <p style={{ marginBottom: "5px" }}>Hero</p>
                <TextField
                  {...register("hero")}
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  label="Enter tittle content"
                  name="tittle"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Heroine</p>
                <TextField
                  {...register("heroine")}
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  label="Enter tittle content"
                  name="tittle"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Singer Name</p>
                <TextField
                  {...register("singerName")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Movie Name</p>
                <TextField
                  {...register("movieName")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Album Name</p>
                <TextField
                  {...register("albumName")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Music Director</p>
                <TextField
                  {...register("musicDirector")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Movie Director</p>
                <TextField
                  {...register("movieDirector")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
              </CCol>
              <CCol>
                <p style={{ marginBottom: "5px" }}>Lyricist</p>
                <TextField
                  {...register("lyricist")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Feelings</p>
                {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                  size="small"
                  sx={{ mb: 1 }}
                /> */}
                <p style={{ marginBottom: "5px" }}>Mood</p>
                {/* <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                  size="small"
                  sx={{ mb: 1 }}
                /> */}
                <p style={{ marginBottom: "5px" }}>Language</p>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                  size="small"
                  sx={{ mb: 1 }}
                />
                <p style={{ marginBottom: "5px" }}>Album Release Date</p>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Album Release Date"
                    type="date"
                    defaultValue={value}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
                <p style={{ marginBottom: "5px", marginTop: " 0px" }}>
                  Movie Release Date
                </p>
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Movie Release Date"
                    type="date"
                    fullWidth
                    defaultValue={value}
                    onChange={(e) => setValue1(e.target.value)}
                    value={value1}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </CCol>
              <CCol>
                <p style={{ marginBottom: "5px" }}>Banner</p>
                <TextField
                  {...register("banner")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Vendor Name</p>
                <TextField
                  {...register("vendorName")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Pline</p>
                <TextField
                  {...register("pline")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Cline</p>
                <TextField
                  {...register("cline")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Category</p>
                <TextField
                  {...register("category")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
                <p style={{ marginBottom: "5px" }}>Genre</p>
                <TextField
                  {...register("genre")}
                  id="outlined-basic"
                  label="Enter tittle content"
                  name="tittle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  margin="normal"
                  required
                  sx={{ mt: 0 }}
                />
              </CCol>
            </CRow>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Click to confirm for upload"
              sx={{ mb: 2 }}
            />
            <CRow className="align-items-start">
              <CCol>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: "#d91a25" }}
                  onClick={() => setVisible(false)}
                >
                  Close
                </Button>
              </CCol>
              <CCol>
                <Button
                  className="save"
                  fullWidth
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Save
                </Button>
              </CCol>
            </CRow>
          </Box>
        </CModalBody>
      </CModal>
    </div>
  );
}
