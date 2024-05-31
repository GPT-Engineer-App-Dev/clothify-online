import { Box, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack, Select } from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const products = [
    { id: 1, name: "Product 1", price: "$49.99", category: "Men", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Product 2", price: "$59.99", category: "Women", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Product 3", price: "$69.99", category: "Kids", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Product 4", price: "$79.99", category: "Accessories", image: "https://via.placeholder.com/300" },
    // Add more products as needed
  ];

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

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

      {/* Category Filter */}
      <Box as="section" bg="gray.100" py={4} textAlign="center">
        <Container maxW="container.xl">
          <Select
            placeholder="Select Category"
            onChange={handleCategoryChange}
            value={selectedCategory}
            mb={6}
            maxW="300px"
            mx="auto"
          >
            <option value="All">All</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
            <option value="Accessories">Accessories</option>
          </Select>
        </Container>
      </Box>

      {/* Product Grid */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h3" size="lg" mb={6}>Featured Products</Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          {filteredProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Text fontWeight="bold" fontSize="xl">{product.name}</Text>
                <Text mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
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