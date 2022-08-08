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
import { ComponentToPrint, Header, WhiteBox } from '../components';
import Layout from '../components/layout.component';

import { useReactToPrint } from 'react-to-print';

const Home: NextPage = () => {
  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, []);

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
            w={['100%', 'min-content']}
            rightIcon={<FileTextIcon />}
            onClick={() => handlePrint()}
          >
            Imprimir
          </Button>
        </Header>
        <WhiteBox>
          <Flex
            w={['100%', '100%', '600px']}
            flexDirection="column"
            overflowY={'auto'}
            maxHeight="600px"
            pr={[0, 8]}
          >
            <FormControl mt={4}>
              <FormLabel>Paciente</FormLabel>
              <Input placeholder="Paciente" />
            </FormControl>
            <Flex gap={4} flexDirection={['column', 'row']}>
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
        </WhiteBox>
      </Layout>
      <ComponentToPrint ref={componentRef} text={'aaki'} />
    </>
  );
};

export default Home;
