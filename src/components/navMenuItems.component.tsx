import { VStack, Flex, Icon, Text, Link } from '@chakra-ui/react';
import { indigoDark } from '@radix-ui/colors';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

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

interface SectionTitleI {
  title: string;
}

interface NavMenuItemI {
  items: Array<NavMenuItemArrayI>;
}

const SectionTitle = ({ title }: SectionTitleI) => {
  return (
    <Text fontSize={14} fontWeight="medium" color={'gray.500'} mt="3">
      {title}
    </Text>
  );
};

function NavMenuItems({ items }: NavMenuItemI) {
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
                      currentPage.includes(link.url) ? indigoDark.indigo3 : ''
                    }
                  >
                    <Flex
                      alignItems={'center'}
                      justifyContent="flex-start"
                      gap={'2'}
                      px="2"
                      _hover={{ color: 'white' }}
                      color={currentPage.includes(link.url) ? 'white' : ''}
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
}

export default NavMenuItems;
