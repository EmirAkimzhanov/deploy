import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import AOS from "aos";
import image from "../assets/mug_mockup.jpg";
import image2 from "../assets/t_shirt_and_tote_bag_mockup.jpg";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
AOS.init();
export default function HomePage() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          margin: "0 auto",
        }}
        className="paper"
      >
        <MDBCarousel interval={2000} showIndicators dark fade>
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBCarouselElement src={image} alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement src={image2} alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem>
              <MDBCarouselElement src={image} alt="..." />
              <MDBCarouselCaption></MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </Paper>
      <Box sx={{ padding: "5%" }}>
        <h1>Popular</h1>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Card data-aos="flip-left" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Somthing about mug
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card data-aos="flip-left" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Somthing about mug
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card data-aos="flip-left" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Somthing about mug
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
          <Card data-aos="flip-left" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mugs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Somthing about mug
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
