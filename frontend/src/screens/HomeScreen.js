import { Grid, Heading } from "@chakra-ui/react";
import React from "react";
import products from "../products";
import ProductCard from "../components/ProductCard";

const HomeScreen = () => {
  return (
    <>
      <Heading as="h2" mb="8" fontSize="xl">
        Latest Products
      </Heading>
      <Grid templateColumns="1fr 1fr 1fr 1fr" gap="8">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
