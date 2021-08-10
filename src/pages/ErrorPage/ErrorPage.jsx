import React from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  Grid,
  Header,
  Segment,
  Message,
  Button,
  Image,
} from "semantic-ui-react";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="imageContainer">
      <Image
        className="error"
        src={process.env.PUBLIC_URL + "app_images/404.png"}
      />
    </div>
  );
}
