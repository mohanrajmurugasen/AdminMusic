import { Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import authAxios from "../../interceptors/authAxios";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import "./musicList.css";
import Table from "react-bootstrap/Table";
import Audios from "../../assets/music.mp3";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import baseURL from "../../interceptors/baseurl";

export default function MusicList() {
  const id = JSON.parse(JSON.stringify(localStorage.getItem("id")));
  const [datas, setDatas] = useState([]);
  const [playBack, setplayBack] = useState(null);

  useEffect(() => {
    authAxios
      .get(`getAllUploads/${id}`)
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((err) => console.error(err.message));
  }, [id]);

  const audioTune = new Audio(`${baseURL}/${playBack}`);

  // variable to play audio in loop
  const [playInLoop, setPlayInLoop] = useState(false);

  // load audio file on component load
  useEffect(() => {
    audioTune.load();
  }, []);

  // set the loop of audio tune
  useEffect(() => {
    audioTune.loop = playInLoop;
  }, [playInLoop]);

  const player = (x) => {
    setplayBack(x);
    alert(`${baseURL}/${playBack}`);
    audioTune.play();
  };
  const player1 = () => {
    audioTune.pause();
    audioTune.currentTime = 0;
  };
  return (
    <div style={{ paddingTop: "100px", width: "100%" }} className="music">
      <Container>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th className="center">No</th>
              <th className="center">Title</th>
              <th className="center">Album Name</th>
              <th className="center">Movie Name</th>
              <th className="center">Singer Name</th>
              <th className="center">Genre</th>
              <th className="center">Song</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((itm, index) => (
              <tr key={index}>
                <td className="top center">{index + 1}</td>
                <td className="top center">{itm.tittle}</td>
                <td className="top center">{itm.albumName}</td>
                <td className="top center">{itm.movieName}</td>
                <td className="top center">{itm.singerName}</td>
                <td className="top center">{itm.genre}</td>
                <td className="center">
                  <Button variant="inlined" onClick={() => player(itm.video)}>
                    <PlayCircleOutlineIcon />
                  </Button>
                  <Button variant="inlined" onClick={player1}>
                    <StopCircleIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
