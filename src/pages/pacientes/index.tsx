import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { indigoDark } from '@radix-ui/colors';
import {
  ChevronRightIcon,
  EyeOpenIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { useRef } from 'react';
import { Header } from '../../components';
import Layout from '../../components/layout.component';
import NextLink from 'next/link';

const users = [
  {
    id: '1',
    avatar: '/pp.jpg',
    name: 'Paçoca',
    phone: '(21) 9 7899 8638',
    email: 'paçoca@gmail.com',
    plan: 'uniodonto',
  },
  {
    id: '2',

    avatar: '/pp.jpg',
    name: 'Isabelle',
    phone: '(21) 9 7899 8638',
    email: 'isabelle@gmail.com',
    plan: 'uniodonto',
  },
  {
    id: '3',

    avatar: '/pp.jpg',
    name: 'Luis',
    phone: '(21) 9 7899 8638',
    email: 'isabelle@gmail.com',
    plan: 'uniodonto',
  },
];

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  function handleAddPatient(e: any) {
    e.preventDefault();
  }

  return (
    <>
      <Layout>
        <Header title="Pacientes">
          <InputGroup
            justifyContent={'center'}
            w="540px"
            borderColor={indigoDark.indigo3}
          >
            <InputLeftElement children={<MagnifyingGlassIcon />} />
            <Input type="text" placeholder="Nome do paciente" />
          </InputGroup>
          <Button
            rightIcon={<PlusIcon />}
            w="min-content"
            justifySelf={'flex-end'}
            onClick={onOpen}
          >
            Adicionar paciente
          </Button>
        </Header>

        <TableContainer bg={'white'} borderRadius="6">
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Nome</Th>
                <Th>Telefone</Th>
                <Th>Email</Th>
                <Th>Plano</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => {
                return (
                  <Tr>
                    <Td>
                      <Avatar src={user.avatar} />
                    </Td>
                    <Td>{user.name}</Td>
                    <Td>{user.phone}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.plan}</Td>
                    <Td>
                      <NextLink href={`pacientes/${user.id}`} passHref>
                        <Link
                          display="flex"
                          w="35px"
                          h="35px"
                          justifyContent="center"
                          alignItems="center"
                          borderRadius={4}
                          _hover={{ bg: indigoDark.indigo3, color: 'white' }}
                        >
                          <Icon as={ChevronRightIcon} fontSize={24} />
                        </Link>
                      </NextLink>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Layout>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo paciente</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleAddPatient}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input ref={initialRef} placeholder="Nome completo" />
              </FormControl>

              <Flex gap={4}>
                <FormControl mt={4}>
                  <FormLabel>CPF</FormLabel>
                  <Input placeholder="CPF" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>RG</FormLabel>
                  <Input placeholder="RG" />
                </FormControl>
              </Flex>
              <Flex gap={4}>
                <FormControl mt={4}>
                  <FormLabel>Nascimento</FormLabel>
                  <Input placeholder="Nascimento" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Telefone</FormLabel>
                  <Input placeholder="Telefone" />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Endereço</FormLabel>
                <Input placeholder="Endereço" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Plano</FormLabel>
                <Input placeholder="Plano" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Nome do responsável</FormLabel>
                <Input placeholder="Nome do responsável" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
