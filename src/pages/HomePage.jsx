import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { Paper } from "@mui/material";

export default function HomePage() {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "90%",
        margin: "0 auto",
        marginTop: "2%",
      }}
    >
      <MDBCarousel interval={2000} showIndicators dark fade>
        <MDBCarouselInner style={{ borderRadius: "5px" }}>
          <MDBCarouselItem className="active">
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).webp"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).webp"
              alt="..."
            />
            <MDBCarouselCaption></MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </Paper>
  );
}
