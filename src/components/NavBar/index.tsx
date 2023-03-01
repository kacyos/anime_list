import { Flex, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Flex h="16" bg="gray.500" mb={2} w="full">
      <Link href="/">a</Link>
      <Link href="/about">a </Link>
      <InputGroup>
        <Input type="tel" placeholder="phone number" />
        <InputLeftAddon children={<button>s</button>} />
      </InputGroup>
    </Flex>
  );
};

export { NavBar };
