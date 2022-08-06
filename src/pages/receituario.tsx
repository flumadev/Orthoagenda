import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { red, redDark } from '@radix-ui/colors';
import {
  ChevronDownIcon,
  FileTextIcon,
  MinusIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useRef, useState } from 'react';
import { Header } from '../components';
import Layout from '../components/layout.component';

const Home: NextPage = () => {
  const [medicines, setMedicines] = useState([] as Array<String>);
  const [error, setError] = useState('');

  function handleAddMedicine(e: any) {
    e.preventDefault();
    const data = e.target[0].value;

    if (e.target[0].value === '' || e.target[0].value === undefined) {
      setError('Medicamento não pode estar vazio');
      return;
    }

    setMedicines([...medicines, data]);
  }

  function handleRemoveMedicine(name: String) {
    setMedicines((old) => old.filter((medicine) => medicine !== name));
  }

  return (
    <>
      <Layout>
        <Header title="Receituário">
          <Box></Box>
          <Button
            justifySelf={'flex-end'}
            w="min-content"
            rightIcon={<FileTextIcon />}
            onClick={}
          >
            Imprimir
          </Button>
        </Header>
        <Flex bg={'white'} borderRadius="6" p={8} justifyContent="center">
          <Flex
            w={'600px'}
            flexDirection="column"
            overflowY={'auto'}
            maxHeight="600px"
            pr={8}
          >
            <Flex gap={4}>
              <FormControl mt={4}>
                <FormLabel>Paciente</FormLabel>
                <Input placeholder="Paciente" />
              </FormControl>
              <FormControl mt={4} w="200px">
                <FormLabel>Data</FormLabel>
                <Input placeholder="Data" type="date" />
              </FormControl>
            </Flex>
            <form onSubmit={handleAddMedicine}>
              <FormControl mt={4} isInvalid={!!error}>
                <Flex gap={4} justifyContent="center" alignItems="flex-end">
                  <Box w={'100%'}>
                    <FormLabel>Medicamento</FormLabel>
                    <Input
                      placeholder="Medicamento"
                      onChange={() => setError('')}
                    />
                  </Box>
                  <Button type="submit">Adicionar</Button>
                </Flex>
                {!!error && <FormErrorMessage>{error}</FormErrorMessage>}
              </FormControl>
            </form>
            {medicines.map((medicine) => {
              return (
                <>
                  <Flex
                    justifyContent={'space-between'}
                    alignItems="center"
                    mt="4"
                  >
                    <Text fontSize={'md'} fontWeight="bold">
                      {medicine}
                    </Text>
                    <Menu>
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            isActive={isOpen}
                            as={Button}
                            variant="icon"
                          >
                            <MinusIcon />
                          </MenuButton>
                          <MenuList>
                            <MenuItem>Cancelar</MenuItem>

                            <MenuItem
                              bgColor={red.red5}
                              onClick={() => handleRemoveMedicine(medicine)}
                              icon={<TrashIcon />}
                            >
                              Excluir
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                  </Flex>

                  <Flex gap={4}>
                    <FormControl mt={4}>
                      <FormLabel>Concentração</FormLabel>
                      <Input placeholder="500mg" />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Quantidade</FormLabel>
                      <Input placeholder="1 (uma)" />
                    </FormControl>
                    <FormControl mt={4}>
                      <FormLabel>Medida</FormLabel>
                      <Input placeholder="Caixa" />
                    </FormControl>
                  </Flex>
                  <FormControl mt={4}>
                    <FormLabel>Posologia</FormLabel>
                    <Input placeholder="Tomar 9,5 ml de 12/12 horas durante 10 (dez) dias." />
                  </FormControl>
                </>
              );
            })}
          </Flex>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
