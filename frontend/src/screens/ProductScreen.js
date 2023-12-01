import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

import { Link as RouterLink, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productAction";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id)); //api call
  }, [id, dispatch]);

  return (
    <>
      <Flex mb="5">
        <Button as={RouterLink} to="/" colorScheme="gray">
          Go Back
        </Button>
      </Flex>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid templateColumns="5fr 4fr 3fr" gap="10">
          <Image src={product.image} alt={product.name} borderRadius="md" />

          <Flex direction="column">
            <Heading as="h5" fontSize="base" color="gray.500">
              {product.brand}
            </Heading>
            <Heading as="h2" fontSize="4xl" mb="4">
              {product.name}
            </Heading>
            <Rating
              value={product.rating}
              color="yellow.500"
              text={`${product.numReviews} reviews`}
            />
            <Heading
              as="h5"
              fontSize="4xl"
              fontWeight="bold"
              color="teal.600"
              my="5"
            >
              ₹{product.price}
            </Heading>

            <Text>{product.description}</Text>
          </Flex>

          <Flex direction="column">
            <Flex justifyContent="space-between" py="2">
              <Text>Price: </Text>
              <Text fontWeight="bold">{product.price}</Text>
            </Flex>
            <Flex justifyContent="space-between" py="2" pb="10">
              <Text>Status: </Text>
              <Text fontWeight="bold">
                {product.countInStock > 0 ? "In stock" : "Not available"}
              </Text>
            </Flex>
            <Button
              bg="gray.800"
              colorScheme="teal"
              my="2"
              textTransform="uppercase"
              letterSpacing="wide"
              isDisabled={product.countInStock === 0}
            >
              Add to cart
            </Button>
          </Flex>
        </Grid>
      )}
    </>
  );
};

export default ProductScreen;
