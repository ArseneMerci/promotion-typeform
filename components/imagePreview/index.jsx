import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";

const ImagePreview = ({ image, remove, update }) => {
    return (
        <Card sx={{ maxWidth: 300 }} style={{ margin: "5px" }}>
            <CardMedia
                component="img"
                height="140"
                image={image.data_url}
                alt="green iguana"
            />

            <CardActions>
                <Button size="small" color="primary" onClick={update}>
                    Update
                </Button>
                <Button size="small" color="primary" onClick={remove}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};
export default ImagePreview;
