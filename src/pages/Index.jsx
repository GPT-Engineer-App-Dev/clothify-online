import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">FashionHub</Heading>
            <Flex>
              <Link href="#" mx={2}>Home</Link>
              <Link href="#" mx={2}>Shop</Link>
              <Link href="#" mx={2}>About</Link>
              <Link href="#" mx={2}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Container maxW="container.xl">
          <Heading as="h2" size="2xl" mb={4}>New Season Arrivals</Heading>
          <Text fontSize="lg" mb={6}>Discover the latest trends in fashion</Text>
          <Link href="#" bg="blue.500" color="white" px={6} py={3} borderRadius="md">Shop Now</Link>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="lg" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">Product 1</Text>
              <Text mt={2}>$49.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">Product 2</Text>
              <Text mt={2}>$59.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">Product 3</Text>
              <Text mt={2}>$69.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" mb={4}>
            <Text>&copy; 2023 FashionHub. All rights reserved.</Text>
            <Flex>
              <Link href="#" mx={2}><FaFacebook /></Link>
              <Link href="#" mx={2}><FaInstagram /></Link>
              <Link href="#" mx={2}><FaTwitter /></Link>
            </Flex>
          </Flex>
          <Flex justify="center">
            <Link href="#" mx={2}>Terms of Service</Link>
            <Link href="#" mx={2}>Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;