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
  Textarea,
} from '@chakra-ui/react';
import { red, redDark } from '@radix-ui/colors';
import {
  ChevronDownIcon,
  FileTextIcon,
  MinusIcon,
  TrashIcon,
} from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { useCallback, useRef, useState } from 'react';
import { ComponentToPrint, Header } from '../components';
import Layout from '../components/layout.component';

import { useReactToPrint } from 'react-to-print';

const Home: NextPage = () => {
  const [medicines, setMedicines] = useState([] as Array<String>);
  const [error, setError] = useState('');

  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: 'AwesomeFileName',
    removeAfterPrint: true,
  });

  return (
    <>
      <Layout>
        <Header title="Atestado">
          <Box></Box>
          <Button
            justifySelf={'flex-end'}
            w="min-content"
            rightIcon={<FileTextIcon />}
            onClick={() => handlePrint()}
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
            <FormControl mt={4}>
              <FormLabel>Paciente</FormLabel>
              <Input placeholder="Paciente" />
            </FormControl>
            <Flex gap={4}>
              <FormControl mt={4}>
                <FormLabel>Data do atestado</FormLabel>
                <Input placeholder="Data do atestado" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Quantidade em dias</FormLabel>
                <Input placeholder="Quantidade em dias" />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>CID</FormLabel>
              <Textarea placeholder="CID" />
            </FormControl>
          </Flex>
        </Flex>
      </Layout>
      <ComponentToPrint ref={componentRef} text={'aaki'} />
    </>
  );
};

export default Home;
