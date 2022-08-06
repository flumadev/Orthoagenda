import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Text,
  Grid,
  Flex,
  VStack,
  HStack,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FileIcon,
  InfoCircledIcon,
  PersonIcon,
  ReaderIcon,
} from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { Header, NavMenuItems } from './';
import Layout from './layout.component';
import { Octokit } from '@octokit/core';
import { useEffect, useState } from 'react';

interface NavMenuItemArrayI {
  section: string;
  links: Array<NavMenuItemLinkArrayI>;
}

interface NavMenuItemLinkArrayI {
  icon: any;
  name: string;
  url: string;
}

interface LayoutI {
  children: any;
  button?: any;
  breadCumbs: Array<String>;
}

const teste: Array<NavMenuItemArrayI> = [
  {
    section: 'Sistema',
    links: [
      {
        icon: PersonIcon,
        name: 'Profissionais',
        url: '/config/professional',
      },
      {
        icon: PersonIcon,
        name: 'Especialidades',
        url: '/config/specialty',
      },
    ],
  },
  {
    section: 'Clínica',
    links: [
      {
        icon: FileIcon,
        name: 'Documentos',
        url: '/receituario',
      },
      {
        icon: ReaderIcon,
        name: 'Dados',
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

const ConfigLayout = ({ children, breadCumbs, button }: LayoutI) => {
  const [repoVersion, setRepoVersion] = useState('');
  const [browser, setBrowser] = useState('');

  const getSysInfo = async () => {
    const octokit = new Octokit({
      auth: process.env.GHTOKEN,
    });

    const data = await octokit.request('GET /repos/{owner}/{repo}/releases', {
      owner: 'flumadev',
      repo: 'Orthoagenda',
    });
    setRepoVersion(data.data[0].tag_name);
  };

  function detectBrowser() {
    if (
      (navigator.userAgent.indexOf('Opera') ||
        navigator.userAgent.indexOf('OPR')) != -1
    ) {
      return 'Opera';
    } else if (navigator.userAgent.indexOf('Chrome') != -1) {
      return 'Chrome';
    } else if (navigator.userAgent.indexOf('Safari') != -1) {
      return 'Safari';
    } else if (navigator.userAgent.indexOf('Firefox') != -1) {
      return 'Firefox';
    } else if (
      navigator.userAgent.indexOf('MSIE') != -1 ||
      !!document.DOCUMENT_NODE == true
    ) {
      return 'IE'; //crap
    } else {
      return 'Unknown';
    }
  }

  useEffect(() => {
    setBrowser(detectBrowser());
    getSysInfo();
    console.log(navigator.userAgent);
  }, []);
  return (
    <>
      <Layout>
        <Header title="Configurações">
          {breadCumbs && (
            <Box>
              <Breadcrumb>
                {breadCumbs.map((breadCumb, i) => {
                  return (
                    <BreadcrumbItem key={i}>
                      <BreadcrumbLink href="#">{breadCumb}</BreadcrumbLink>
                    </BreadcrumbItem>
                  );
                })}
              </Breadcrumb>
            </Box>
          )}
          {button && <Box justifySelf={'flex-end'}>{button}</Box>}
        </Header>
        <Grid gridTemplateColumns={'210px 1fr'} gap="8">
          <VStack
            background="white"
            borderRadius={6}
            padding="4"
            justifyContent={'space-between'}
          >
            <Box>
              <NavMenuItems items={teste} />
            </Box>
            <VStack opacity={0.5} w="100%">
              <Tooltip
                label={`Sua versão do sistema é a ${repoVersion}`}
                aria-label="A tooltip"
              >
                <Flex justifyContent={'center'} alignItems="center">
                  <Icon as={InfoCircledIcon} mr="2" />
                  <Text>{repoVersion}</Text>
                </Flex>
              </Tooltip>
              <Text>{browser}</Text>
            </VStack>
          </VStack>
          <Box background="white" borderRadius={6} padding="4">
            {children}
          </Box>
        </Grid>
      </Layout>
    </>
  );
};

export default ConfigLayout;
