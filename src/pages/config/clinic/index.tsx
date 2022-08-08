import { Box, Button } from '@chakra-ui/react';
import { PlusIcon } from '@radix-ui/react-icons';
import React from 'react';
import ConfigLayout from '../../../components/config.layout.component';
import NextLink from 'next/link';

function Index() {
  return (
    <ConfigLayout
      breadCumbs={['Configurações', 'Sistema', 'Profissionais']}
      button={
        <NextLink href="professional/add/">
          <Button rightIcon={<PlusIcon />}>Adicionar Profissional</Button>
        </NextLink>
      }
    >
      <Box>teste</Box>
    </ConfigLayout>
  );
}

export default Index;
