import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

function Header({ title, children }: { title: string; children?: any }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
      </Head>
      <Box>
        <Text fontSize={'5xl'} fontWeight={'medium'} height={28}>
          {title}
        </Text>
        {children && (
          <Grid
            width={'100%'}
            templateColumns={['1fr', '1fr', '1fr 1fr']}
            gap={[8, 0, 0]}
            templateRows={'1fr'}
            mb={8}
          >
            {children}
          </Grid>
        )}
      </Box>
    </>
  );
}

export default Header;
