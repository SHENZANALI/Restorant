import React from "react";
import Layout from "../components/layout/Layout";
import menuList from "../components/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Meno() {
  return (
    <Layout>
       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.Name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.Name}
                </Typography>
                <Typography variant="body2">{menu.Descraption}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
}

export default Meno;
