import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
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
import { useRef, useState } from 'react';
import { Header } from '../../components';
import Layout from '../../components/layout.component';
import NextLink from 'next/link';
import { Field, Form, Formik } from 'formik';

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
  const [underAge, setUnderAge] = useState(false);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  function validateDate(value) {
    const date = new Date(value)
      .toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      })
      .split('/')[2];

    const currentYear = new Date().getFullYear();

    if (currentYear - parseInt(date) < 18) {
      setUnderAge(true);
    } else {
      setUnderAge(false);
    }
  }

  function handleAddPatient(values, actions) {
    console.log(values);
    console.log(actions);

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
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
              {users.map((user, i) => {
                return (
                  <Tr key={i}>
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
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo paciente</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{}}
              onSubmit={(values, actions) => handleAddPatient(values, actions)}
            >
              {(props) => (
                <Form>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl>
                        <FormLabel>Nome</FormLabel>
                        <Input {...field} placeholder="Nome completo" />
                      </FormControl>
                    )}
                  </Field>

                  <Flex gap={4}>
                    <Field name="CPF">
                      {({ field, form }) => (
                        <FormControl mt={4}>
                          <FormLabel>CPF</FormLabel>
                          <Input {...field} placeholder="CPF" />
                        </FormControl>
                      )}
                    </Field>

                    <Field name="RG">
                      {({ field, form }) => (
                        <FormControl mt={4}>
                          <FormLabel>RG</FormLabel>
                          <Input {...field} placeholder="RG" />
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Flex gap={4}>
                    <Field name="birthdate" validate={validateDate}>
                      {({ field, form }) => (
                        <FormControl mt={4}>
                          <FormLabel>Nascimento</FormLabel>
                          <Input
                            {...field}
                            placeholder="Nascimento"
                            type="date"
                          />
                        </FormControl>
                      )}
                    </Field>
                    <Field name="phone">
                      {({ field, form }) => (
                        <FormControl mt={4}>
                          <FormLabel>Telefone</FormLabel>
                          <Input {...field} placeholder="Telefone" />
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Field name="address">
                    {({ field, form }) => (
                      <FormControl mt={4}>
                        <FormLabel>Endereço</FormLabel>
                        <Input {...field} placeholder="Endereço" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="plan">
                    {({ field, form }) => (
                      <FormControl mt={4}>
                        <FormLabel>Plano</FormLabel>
                        <Input {...field} placeholder="Plano" />
                      </FormControl>
                    )}
                  </Field>
                  {underAge && (
                    <Field name="responsible">
                      {({ field, form }) => (
                        <FormControl mt={4}>
                          <FormLabel>Nome do responsável</FormLabel>
                          <Input {...field} placeholder="Nome do responsável" />
                        </FormControl>
                      )}
                    </Field>
                  )}
                  <ModalFooter>
                    <Button variant="outline" mr="3" onClick={onClose}>
                      Cancelar
                    </Button>
                    <Button isLoading={props.isSubmitting} type="submit">
                      Salvar
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
