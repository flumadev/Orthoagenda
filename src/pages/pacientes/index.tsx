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
  Show,
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
import { Header, WhiteBox } from '../../components';
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

  const finalRef = useRef(null);

  function validateDate(value: any) {
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

  function handleAddPatient(values: any, actions: any) {
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
            w={['100%', '540px']}
            borderColor={indigoDark.indigo3}
          >
            <InputLeftElement>
              <MagnifyingGlassIcon />
            </InputLeftElement>
            <Input type="text" placeholder="Nome do paciente" />
          </InputGroup>
          <Button
            rightIcon={<PlusIcon />}
            w={['100%', 'min-content']}
            justifySelf={'flex-end'}
            onClick={onOpen}
          >
            Adicionar paciente
          </Button>
        </Header>

        <WhiteBox>
          <TableContainer w={'100%'}>
            <Table>
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th>Nome</Th>
                  <Show above="lg">
                    <Th>Telefone</Th>
                    <Th>Email</Th>
                    <Th>Plano</Th>
                  </Show>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody w={'100%'}>
                {users.map((user, i) => {
                  return (
                    <Tr key={i}>
                      <Td px={'0'}>
                        <Avatar src={user.avatar} />
                      </Td>
                      <Td>{user.name}</Td>
                      <Show above="lg">
                        <Td>{user.phone}</Td>
                        <Td>{user.email}</Td>
                        <Td>{user.plan}</Td>
                      </Show>
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
        </WhiteBox>
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
                    {({ field, form }: any) => {
                      console.log(field, form);

                      return (
                        <FormControl>
                          <FormLabel>Nome</FormLabel>
                          <Input {...field} placeholder="Nome completo" />
                        </FormControl>
                      );
                    }}
                  </Field>

                  <Flex gap={4}>
                    <Field name="CPF">
                      {({ field, form }: any) => (
                        <FormControl mt={4}>
                          <FormLabel>CPF</FormLabel>
                          <Input {...field} placeholder="CPF" />
                        </FormControl>
                      )}
                    </Field>

                    <Field name="RG">
                      {({ field, form }: any) => (
                        <FormControl mt={4}>
                          <FormLabel>RG</FormLabel>
                          <Input {...field} placeholder="RG" />
                        </FormControl>
                      )}
                    </Field>
                  </Flex>

                  <Flex gap={4}>
                    <Field name="birthdate" validate={validateDate}>
                      {({ field, form }: any) => (
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
                      {({ field, form }: any) => (
                        <FormControl mt={4}>
                          <FormLabel>Telefone</FormLabel>
                          <Input {...field} placeholder="Telefone" />
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                  <Field name="address">
                    {({ field, form }: any) => (
                      <FormControl mt={4}>
                        <FormLabel>Endereço</FormLabel>
                        <Input {...field} placeholder="Endereço" />
                      </FormControl>
                    )}
                  </Field>
                  <Field name="plan">
                    {({ field, form }: any) => (
                      <FormControl mt={4}>
                        <FormLabel>Plano</FormLabel>
                        <Input {...field} placeholder="Plano" />
                      </FormControl>
                    )}
                  </Field>
                  {underAge && (
                    <Field name="responsible">
                      {({ field, form }: any) => (
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
