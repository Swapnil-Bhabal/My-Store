import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" py="5">
      <Text>
        Copyright {new Date().getFullYear()}. RST Store. All Rights Reserved.
      </Text>
    </Flex>
  );
};

export default Footer;
