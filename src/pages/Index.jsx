import { Container, Box, VStack, HStack, Text, Image, Button, IconButton, Link, Heading, SimpleGrid } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="red.600" color="white" py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Man Utd Collectibles
          </Heading>
          <HStack spacing={4}>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} />
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" py={8} textAlign="center">
        <VStack spacing={4}>
          <Heading as="h2" size="xl">
            Exclusive Man Utd NFTs
          </Heading>
          <Text fontSize="lg">Own a piece of history with our exclusive NFT collectibles.</Text>
          <Button colorScheme="red" size="lg">
            Explore Now
          </Button>
        </VStack>
      </Box>

      {/* Featured NFTs */}
      <Box as="section" py={8}>
        <Heading as="h3" size="lg" mb={4}>
          Featured NFTs
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB1dGQlMjBuZnQlMjAxfGVufDB8fHx8MTcxNzI1MzUxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="NFT 1" />
            <Box p={4}>
              <Text fontWeight="bold">NFT Title 1</Text>
              <Text>Short description of the NFT.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB1dGQlMjBuZnQlMjAyfGVufDB8fHx8MTcxNzI1MzUxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="NFT 2" />
            <Box p={4}>
              <Text fontWeight="bold">NFT Title 2</Text>
              <Text>Short description of the NFT.</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB1dGQlMjBuZnQlMjAzfGVufDB8fHx8MTcxNzI1MzUxNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="NFT 3" />
            <Box p={4}>
              <Text fontWeight="bold">NFT Title 3</Text>
              <Text>Short description of the NFT.</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <VStack spacing={2}>
          <Text>&copy; 2023 Man Utd Collectibles. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Contact Us</Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
