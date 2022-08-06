import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Grid,
} from '@chakra-ui/react';
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FileIcon,
  PersonIcon,
  ReaderIcon,
} from '@radix-ui/react-icons';
import type { NextPage } from 'next';
import { Header, NavMenuItems } from './';
import Layout from './layout.component';

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
          <Box background="white" borderRadius={6} padding="4">
            <NavMenuItems items={teste} />
          </Box>
          <Box background="white" borderRadius={6} padding="4">
            {children}
          </Box>
        </Grid>
      </Layout>
    </>
  );
};

export default ConfigLayout;
