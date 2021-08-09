import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Embed, Image } from "semantic-ui-react";
import ReactPlayer from "react-player";

export default function Home({ user }) {
  const [toggle, setToggle] = useState(true);
  const [open, setOpen] = useState(true);
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };
  const history = useHistory();
  useEffect(() => {
    setOpen(true);
  }, []);

  if (toggle == true) {
    return (
      <Modal
        open={open}
        onClose={() => setToggle(false)}
        onOpen={() => setOpen(true)}
      >
        {/* <Embed
          source="vimeo"
          id='582223853'
          autoplay='1'
          aspectRatio='4:3'
        /> */}
        <Image src={process.env.PUBLIC_URL + 'app_images/Share.gif'}/>
        {/* <ReactPlayer
          url={videoFilePath}
          width="100%"
          height="100%"
          controls={true}
        /> */}
      </Modal>
    );
  } else {
    if (user) {
      history.push("/mainPhoto");
    } else {
      history.push("/login");
    }
    return <h1>...Redirecting</h1>;
  }
}
