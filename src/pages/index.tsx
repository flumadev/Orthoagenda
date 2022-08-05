import {
  Center,
  Flex,
  Hide,
  Input,
  Image,
  VStack,
  Link,
  Button,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push('/agenda');
    console.log('login');
  };

  return (
    <Flex h={'100vh'}>
      <Hide below="md">
        <Center w={'50vw'} bg="green.500">
          <Image
            src={'/hero.jpg'}
            objectFit="cover"
            height={'100vh'}
            alt={`Photo by Candid on Unsplash`}
          />
        </Center>
      </Hide>
      <Center w={['100vw', '100vw', '50vw']} bgColor="gray.50">
        <form onSubmit={(e) => handleSubmit(e)}>
          <VStack width={['300px']} gap={1}>
            <Input placeholder="Usuário" />
            <Input placeholder="Password" type="password" />
            <Button width={['300px']} type="submit">
              Entrar
            </Button>
            <Link fontSize={'sm'}>Problemas com login?</Link>
          </VStack>
        </form>
      </Center>
    </Flex>
  );
};

export default Home;
