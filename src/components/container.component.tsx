import { Flex } from '@chakra-ui/react';
import React from 'react';

function WhiteBox({ children, props }: any) {
  return (
    <Flex
      bg={'white'}
      borderRadius="6"
      p={[5, 8]}
      justifyContent="center"
      {...props}
    >
      {children}
    </Flex>
  );
}

export default WhiteBox;
