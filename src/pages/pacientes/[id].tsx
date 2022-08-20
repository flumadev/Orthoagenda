import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Grid,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

import Timeline from 'antd/lib/timeline';
import { CircleIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next';
import { Header, WhiteBox } from '../../components';
import Layout from '../../components/layout.component';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Header title="Agenda" />
        <Grid
          gridTemplateColumns={['1fr', '0.5fr 1fr']}
          gridTemplateRows={'1fr'}
          width="100%"
          height={'100%'}
          gap={6}
        >
          <WhiteBox>
            <Box height="100%" width={'100%'}>
              <Text fontSize={'2xl'}>Dados</Text>
              <Flex gap={6} flexDir="column">
                <Flex justifyContent="space-between">
                  <Flex flexDir={'column'}>
                    <FormLabel>Nome</FormLabel>
                    <Input
                      placeholder="Luis Felipe Amorim d"
                      variant={'unstyled'}
                      disabled
                    />
                  </Flex>
                  <Flex flexDir={'column'}>
                    <FormLabel>Nascimento</FormLabel>
                    <Input
                      placeholder="18/03/97"
                      variant={'unstyled'}
                      disabled
                    />
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between">
                  <Flex flexDir={'column'}>
                    <FormLabel>Email</FormLabel>
                    <Input
                      placeholder="isabellechediak@gmail.com"
                      variant={'unstyled'}
                      disabled
                    />
                  </Flex>
                  <Flex flexDir={'column'}>
                    <FormLabel>Telefone</FormLabel>
                    <Input
                      placeholder="21 9 3618 5656"
                      variant={'unstyled'}
                      disabled
                    />
                  </Flex>
                </Flex>
                <Flex justifyContent="space-between">
                  <Flex flexDir={'column'}>
                    <FormLabel>CPF</FormLabel>
                    <Input
                      placeholder="185.905.377-73"
                      variant={'unstyled'}
                      disabled
                    />
                  </Flex>
                  <Flex flexDir={'column'}>
                    <FormLabel>RG</FormLabel>
                    <Input
                      placeholder="18/03/97"
                      variant={'unstyled'}
                      disabled
                    />
                  </Flex>
                </Flex>
                <Flex flexDir={'column'}>
                  <FormLabel>Endereço</FormLabel>
                  <Input
                    placeholder="Rua Engenheiro Jacinto Lameira Filho, 110, Apto 85"
                    variant={'unstyled'}
                    disabled
                  />
                </Flex>
              </Flex>
            </Box>
          </WhiteBox>
          <WhiteBox>
            <Tabs w={'100%'}>
              <TabList>
                <Tab>Histórico</Tab>
                <Tab>Receitas</Tab>
                <Tab>Recomendações</Tab>
              </TabList>

              <TabPanels>
                <TabPanel p={'12'}>
                  <Timeline>
                    <Timeline.Item>
                      <Flex gap={'24px'}>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>25/11/20</Text>
                          <Text>13:00 - 13:30</Text>
                        </Flex>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>Tratamento Realizado</Text>
                          <Text>Consulta </Text>
                        </Flex>
                        <Flex flexDir={'column'}>
                          <Text fontWeight={'bold'}>Dentista</Text>
                          <Text>Luis Gustavo </Text>
                        </Flex>
                        <Flex flexDir={'column'}></Flex>
                      </Flex>
                    </Timeline.Item>
                    <Timeline.Item>
                      <Flex gap={'24px'}>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>25/11/20</Text>
                          <Text>13:00 - 13:30</Text>
                        </Flex>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>Tratamento Realizado</Text>
                          <Text>Consulta </Text>
                        </Flex>
                        <Flex flexDir={'column'}>
                          <Text fontWeight={'bold'}>Dentista</Text>
                          <Text>Luis Gustavo </Text>
                        </Flex>
                        <Flex flexDir={'column'}></Flex>
                      </Flex>
                    </Timeline.Item>
                    <Timeline.Item>
                      <Flex gap={'24px'}>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>25/11/20</Text>
                          <Text>13:00 - 13:30</Text>
                        </Flex>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>Tratamento Realizado</Text>
                          <Text>Consulta </Text>
                        </Flex>
                        <Flex flexDir={'column'}>
                          <Text fontWeight={'bold'}>Dentista</Text>
                          <Text>Luis Gustavo </Text>
                        </Flex>
                        <Flex flexDir={'column'}></Flex>
                      </Flex>
                    </Timeline.Item>
                    <Timeline.Item>
                      <Flex gap={'24px'}>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>25/11/20</Text>
                          <Text>13:00 - 13:30</Text>
                        </Flex>
                        <Flex flexDir={'column'} borderRight="1px" pr={'16px'}>
                          <Text fontWeight={'bold'}>Tratamento Realizado</Text>
                          <Text>Consulta </Text>
                        </Flex>
                        <Flex flexDir={'column'}>
                          <Text fontWeight={'bold'}>Dentista</Text>
                          <Text>Luis Gustavo </Text>
                        </Flex>
                        <Flex flexDir={'column'}></Flex>
                      </Flex>
                    </Timeline.Item>
                  </Timeline>
                </TabPanel>
                <TabPanel p={'12'}>
                  <Timeline>
                    <Timeline.Item>
                      <Flex gap={'24px'} justifyContent="space-between">
                        <Flex gap={'24px'}>
                          <Flex
                            flexDir={'column'}
                            borderRight="1px"
                            pr={'16px'}
                          >
                            <Text fontWeight={'bold'}>Emitido em </Text>
                            <Text>25/11/20</Text>
                          </Flex>
                          <Flex flexDir={'column'}>
                            <Text fontWeight={'bold'}>Dentista</Text>
                            <Text>Luis Gustavo </Text>
                          </Flex>
                        </Flex>
                        <Flex gap={6}>
                          <Text>Ver</Text>
                          <Text>Imprimir </Text>
                        </Flex>
                      </Flex>
                    </Timeline.Item>
                  </Timeline>
                </TabPanel>
                <TabPanel p={'12'}></TabPanel>
              </TabPanels>
            </Tabs>
          </WhiteBox>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
