import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import AOS from "aos";

import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
AOS.init();
export default function HomePage() {
  return (
    <Box>
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
                src="https://mdbootstrap.com/img//Slides/img%20(19).webp"
                alt="..."
              />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement
                src="https://mdbootstrap.com/img/Photos//img%20(40).webp"
                alt="..."
              />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </Paper>
      <Box sx={{ padding: "5%" }}>
        <h1>Popular</h1>
        <Box>
          <Card
            data-aos="zoom-out"
            data-aos-duration="1000"
            sx={{
              width: "20vw",
              height: "25vw",
              backgroundColor: "#252734",
              borderRadius: "10px",
              borderRadius: "0",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://mdbootstrap.com/img/Photos/Slides/img%20(40).webp"
              alt="green iguana"
            />
            <Typography
              sx={{ padding: "5%" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              name
            </Typography>
            <Typography
              sx={{ padding: "5%" }}
              variant="body2"
              color="text.secondary"
            >
              descr
            </Typography>
          </Card>
          <Card
            data-aos="zoom-out"
            data-aos-duration="1000"
            sx={{
              width: "20vw",
              height: "25vw",
              backgroundColor: "#252734",
              borderRadius: "10px",
              borderRadius: "0",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://mdbootstrap.com/img/Photos/Slides/img%20(40).webp"
              alt="green iguana"
            />
            <Typography
              sx={{ padding: "5%" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              name
            </Typography>
            <Typography
              sx={{ padding: "5%" }}
              variant="body2"
              color="text.secondary"
            >
              descr
            </Typography>
          </Card>
          <Card
            data-aos="zoom-out"
            data-aos-duration="1000"
            sx={{
              width: "20vw",
              height: "25vw",
              backgroundColor: "#252734",
              borderRadius: "10px",
              borderRadius: "0",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://mdbootstrap.com/img/Photos/Slides/img%20(40).webp"
              alt="green iguana"
            />
            <Typography
              sx={{ padding: "5%" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              name
            </Typography>
            <Typography
              sx={{ padding: "5%" }}
              variant="body2"
              color="text.secondary"
            >
              descr
            </Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
