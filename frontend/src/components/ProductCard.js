import { Box, Flex, Image, Link, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`} _hover={{ textDecor: "none" }}>
      <Box>
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="430px"
          objectFit="cover"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
        />
        <Flex py="5" px="4" direction="column" justifyContent="space-between">
          <Heading as="h4" fontSize="lg" mb="3">
            {product.name}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating color="yellow.500" value={product.rating} />
            <Text fontSize="2xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
