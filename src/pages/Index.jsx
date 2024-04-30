import { Box, VStack, Text, Button, Image } from '@chakra-ui/react';
import { FaEnvelope, FaBlog, FaUser } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={8} align="stretch" p={5}>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold">Andrew Jackson</Text>
        <Text mt={4}>Welcome to my personal website! Here you can find information about my work, read my blog posts, and get in touch with me.</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold"><FaUser /> Bio</Text>
        <Text mt={4}>[Placeholder for bio]</Text>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold"><FaBlog /> Blog</Text>
        <Text mt={4}>[Placeholder for recent blog posts]</Text>
        <Button mt={4} leftIcon={<FaBlog />}>Visit Blog</Button>
      </Box>
      <Box p={5} shadow="md" borderWidth="1px">
        <Text fontSize="2xl" fontWeight="bold"><FaEnvelope /> Contact</Text>
        <Text mt={4}>[Placeholder for contact information]</Text>
        <Button mt={4} leftIcon={<FaEnvelope />}>Get in Touch</Button>
      </Box>
    </VStack>
  );
};

export default Index;