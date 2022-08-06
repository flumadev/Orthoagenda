import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  Hide,
  Icon,
  Flex,
  Input,
  Text,
  useDisclosure,
  VStack,
  WrapItem,
  Avatar,
  GridItem,
  Link,
  Box,
  Show,
} from '@chakra-ui/react';

import { indigo, indigoDark } from '@radix-ui/colors';

import {
  BellIcon,
  CalendarIcon,
  EnvelopeClosedIcon,
  FileIcon,
  GearIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import NextLink from 'next/link';
import React, { useRef } from 'react';
import NavMenuItems from './navMenuItems.component';

interface NavMenuItemArrayI {
  section: string;
  links: Array<NavMenuItemLinkArrayI>;
}

interface NavMenuItemLinkArrayI {
  icon: any;
  name: string;
  url: string;
}

const teste: Array<NavMenuItemArrayI> = [
  {
    section: 'Sistema',
    links: [
      {
        icon: CalendarIcon,
        name: 'Agenda',
        url: '/agenda',
      },
    ],
  },
  {
    section: 'Pacientes',
    links: [
      {
        icon: CalendarIcon,
        name: 'Pacientes',
        url: '/pacientes',
      },

      {
        icon: FileIcon,
        name: 'Receituário',
        url: '/receituario',
      },
      {
        icon: EnvelopeClosedIcon,
        name: 'Atestado',
        url: '/atestado',
      },
      {
        icon: EnvelopeClosedIcon,
        name: 'Recomendações',
        url: '/recomendacoes',
      },
      {
        icon: EnvelopeClosedIcon,
        name: 'Orçamento',
        url: '/orcamento',
      },
    ],
  },
];

const NavMenu = () => {
  return (
    <>
      <VStack
        py={9}
        px={5}
        w="210px"
        h={'100vh'}
        alignItems={'flex-start'}
        justifyContent="space-between"
      >
        <Box>
          <WrapItem alignItems={'center'} gap="3" mb={20} alignSelf="center">
            <Avatar name="Dan Abrahmov" src="/pp.jpg" />
            <Text fontSize={18} fontWeight="medium">
              Paçoca
            </Text>
          </WrapItem>
          <NavMenuItems items={teste} />
        </Box>
        <NextLink href={'/config/'}>
          <Button
            variant={'icon'}
            rightIcon={<GearIcon />}
            borderRadius="24"
            fontWeight={'normal'}
          >
            Configurações
          </Button>
        </NextLink>
      </VStack>
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = useRef();

  function getCurrentHour(): String {
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes();
    return time;
  }
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" px={4} height={'60px'}>
        <Hide above="lg">
          <Flex align={'center'}>
            <Button
              ref={btnRef}
              onClick={onOpen}
              background="none"
              variant="icon"
              justifySelf={'self-start'}
            >
              <Icon as={HamburgerMenuIcon} fontSize={20} />
            </Button>
          </Flex>
        </Hide>
        <Flex
          align="center"
          gap={4}
          justifySelf={'self-end'}
          gridColumnStart="2"
          gridColumnEnd={'3'}
        >
          <Text fontSize={24} fontWeight="bold">
            {getCurrentHour()}
          </Text>
          <Icon as={BellIcon} fontSize={20} />
        </Flex>
      </Grid>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={'xs'}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <NavMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Layout = ({ children }: any) => {
  return (
    <>
      <Grid
        h="100vh"
        templateRows="60px 1fr"
        templateColumns={{ lg: '210px 1fr' }}
      >
        <Show above="lg">
          <GridItem
            gridColumnStart={1}
            gridColumnEnd={2}
            gridRowStart={1}
            gridRowEnd={-1}
          >
            <NavMenu />
          </GridItem>
        </Show>

        <GridItem
          gridColumnStart={2}
          gridColumnEnd={-2}
          gridRowStart={1}
          gridRowEnd={-2}
        >
          <Navbar />
        </GridItem>

        <GridItem
          gridColumnStart={2}
          gridColumnEnd={-2}
          gridRowStart={2}
          gridRowEnd={-1}
          bg={indigo.indigo2}
          p={8}
        >
          <Grid
            templateRows={'150px  1fr'}
            templateColumns="1fr"
            height={'100%'}
            gap="12px"
          >
            {children}
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
