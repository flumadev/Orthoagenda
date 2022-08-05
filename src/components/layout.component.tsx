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
  HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

interface SectionTitleI {
  title: string;
}

interface NavMenuItemI {
  items: Array<NavMenuItemArrayI>;
}

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

const SectionTitle = ({ title }: SectionTitleI) => {
  return (
    <Text fontSize={14} fontWeight="medium" color={'gray.500'} mt="3">
      {title}
    </Text>
  );
};

const NavMenuItens = ({ items }: NavMenuItemI) => {
  const currentPage = useRouter().pathname;

  return (
    <>
      {items.map((item, i) => {
        return (
          <VStack key={i} alignItems={'flex-start'} w={'100%'}>
            <SectionTitle title={item.section} />
            {item.links.map((link, i) => {
              return (
                <NextLink key={i} href={link.url} passHref>
                  <Link
                    _hover={{ backgroundColor: indigoDark.indigo3 }}
                    w={'100%'}
                    h="32px"
                    borderRadius={6}
                    backgroundColor={
                      currentPage === link.url ? indigoDark.indigo3 : ''
                    }
                  >
                    <Flex
                      alignItems={'center'}
                      justifyContent="flex-start"
                      gap={'2'}
                      px="2"
                      _hover={{ color: 'white' }}
                      color={currentPage === link.url ? 'white' : ''}
                      height="100%"
                    >
                      <Icon as={link.icon} />
                      {link.name}
                    </Flex>
                  </Link>
                </NextLink>
              );
            })}
          </VStack>
        );
      })}
    </>
  );
};

const NavMenu = () => {
  return (
    <>
      <VStack py={9} px={5} w="210px" h={'100vh'} alignItems={'flex-start'}>
        <WrapItem alignItems={'center'} gap="3" mb={20} alignSelf="center">
          <Avatar name="Dan Abrahmov" src="/pp.jpg" />
          <Text fontSize={18} fontWeight="medium">
            Paçoca
          </Text>
        </WrapItem>
        <NavMenuItens items={teste} />
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
