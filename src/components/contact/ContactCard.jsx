import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { contactContext } from "../../ContactContext";
import { Link } from "react-router-dom";

const ContactCard = ({ item }) => {
  const { deleteContact, editContact } = useContext(contactContext);
  // console.log(editContact);
  return (
    <div>
      <Card sx={{ mx: 2, backgroundColor: "beige", my: 2 }}>
        <CardMedia
          component="img"
          height="140"
          width="305"
          image={item.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.number}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/edit">
            <Button size="small" onClick={() => editContact(item.id)}>
              EDIT
            </Button>
          </Link>
          <Button size="small" onClick={() => deleteContact(item.id)}>
            DELETE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContactCard;
