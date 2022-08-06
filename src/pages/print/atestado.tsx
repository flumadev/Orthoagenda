import { Button, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Header } from '../../components';
import Layout from '../../components/layout.component';

const Home: NextPage = (props: any) => {
  useEffect(() => {
    window.print();
  }, []);
  return (
    <>
      <Layout>
        <Header title="Email" />
        <Text>{props.text}</Text>
      </Layout>
    </>
  );
};

export default Home;
