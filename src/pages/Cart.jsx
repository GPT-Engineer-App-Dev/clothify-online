import { Box, Container, Flex, Heading, Image, Text, Button, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const updateQuantity = (productId, quantity) => {
    setCart(cart.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg" onClick={() => navigate('/')}>FashionHub</Heading>
            <Flex>
              <Link href="#" mx={2}>Home</Link>
              <Link href="#" mx={2}>Shop</Link>
              <Link href="#" mx={2}>About</Link>
              <Link href="#" mx={2}>Contact</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Cart Items */}
      <Container maxW="container.xl" py={10}>
        <Heading as="h2" size="xl" mb={6}>Shopping Cart</Heading>
        {cart.length === 0 ? (
          <Text>Your cart is empty.</Text>
        ) : (
          cart.map(item => (
            <Flex key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
              <Image src={item.image} alt={item.name} boxSize="150px" />
              <Box p={6} flex="1">
                <Text fontWeight="bold" fontSize="xl">{item.name}</Text>
                <Text mt={2}>{item.price}</Text>
                <Flex mt={4} align="center">
                  <Text mr={2}>Quantity:</Text>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    width="60px"
                    mr={4}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    aria-label="Remove"
                    onClick={() => removeFromCart(item.id)}
                  />
                </Flex>
              </Box>
            </Flex>
          ))
        )}
        <Button mt={6} colorScheme="blue" onClick={() => navigate('/')}>Continue Shopping</Button>
      </Container>
    </Box>
  );
};

export default Cart;