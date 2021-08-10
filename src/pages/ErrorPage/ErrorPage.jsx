import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Grid,
  Header,
  Segment,
  Message,
  Button,
  Image
} from "semantic-ui-react";
import "./ErrorPage.css"

export default function ErrorPage() {
  return (
  <>
      {/* <Image
        className="errorBug"
        src={process.env.PUBLIC_URL + "app_images/bug.gif"}
      /> */}
      <div className='imageContainer'>
      <Image
        className="error"
        src={process.env.PUBLIC_URL + "app_images/error.gif"}
        />
        </div>
        <Header as='h1'>
        <span className="messageText"> hell</span>
        </Header>
   </>
  );
}
