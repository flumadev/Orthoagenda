// You can also use the more specific type for

import { ComponentStyleConfig } from '@chakra-ui/react';
import { indigoDark } from '@radix-ui/colors';

// a single part component: ComponentSingleStyleConfig
export const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },
  variants: {
    solid: {
      bg: indigoDark.indigo3,
      color: 'white',
    },
    icon: {
      bg: indigoDark.indigo12,
      color: indigoDark.indigo1,
    },
  },
};

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {},
  },
};

export const Flex: ComponentStyleConfig = {
  baseStyle: {
    gap: 4,
  },
};
