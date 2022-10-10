import type { NextPage } from 'next'
import Link from 'next/link';
import {
  Box,
  Heading,
  Container,
  useColorModeValue,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={14}
        py={36}>
        <Heading
          color={'green.400'}
          fontWeight={600}
          fontSize={'6xl'}
          lineHeight={'110%'}>
          Welcome To <br />
          <Text as={'span'} fontFamily="monospace" fontWeight="bold" color={useColorModeValue('gray.900', 'gray.100')}>
            JS-DSA
          </Text>
        </Heading>
        <Text color={'gray.500'}>
          This website contains mostly used Data Structures with visual/functional representation in JavaScript. It contains methods, properties with their space and time complexity.
        </Text>
        <Stack
          direction={'column'}
          spacing={3}
          align={'center'}
          alignSelf={'center'}
          position={'relative'}>
          <Link href='/stack'>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Home
