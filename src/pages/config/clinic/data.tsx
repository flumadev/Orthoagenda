import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DiscIcon, FileIcon, PlusIcon } from '@radix-ui/react-icons';
import React from 'react';
import ConfigLayout from '../../../components/config.layout.component';
import NextLink from 'next/link';
import { Field, Form, Formik, useFormikContext } from 'formik';

function Index() {
  function handleSubmit(values: any, actions: any) {
    actions.setSubmitting(true);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  }

  return (
    <ConfigLayout
      breadCumbs={['Configurações', 'Sistema', 'Clínica', 'Dados']}
      button={
        <Button form="addForm" type="submit" rightIcon={<FileIcon />}>
          Salvar
        </Button>
      }
    >
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => handleSubmit(values, actions)}
      >
        {(props) => (
          <Form id="addForm">
            <Grid
              gap={4}
              gridTemplateColumns={['1fr', '1fr 1fr 1fr']}
              gridTemplateRows={'1fr'}
            >
              <VStack gap={4} alignItems="flex-start">
                <Text fontSize="3xl">Endereço</Text>
                <Field name="street">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Rua</FormLabel>
                      <Input {...field} placeholder="Rua" />
                    </FormControl>
                  )}
                </Field>
                <Field name="number">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>N°</FormLabel>
                      <Input {...field} placeholder="Número" />
                    </FormControl>
                  )}
                </Field>
                <Field name="district">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Bairro</FormLabel>
                      <Input {...field} placeholder="Bairro" />
                    </FormControl>
                  )}
                </Field>
                <Field name="city">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Cidade</FormLabel>
                      <Input {...field} placeholder="Cidade" />
                    </FormControl>
                  )}
                </Field>
                <Field name="state">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Estado</FormLabel>
                      <Input {...field} placeholder="Estado" />
                    </FormControl>
                  )}
                </Field>
              </VStack>
              <VStack gap={4} alignItems="flex-start">
                <Text fontSize="3xl">Contato</Text>

                <Field name="phone">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Telefone</FormLabel>
                      <Input {...field} placeholder="Telefone" />
                    </FormControl>
                  )}
                </Field>
                <Field name="cellphone">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Celular</FormLabel>
                      <Input {...field} placeholder="Celular" />
                    </FormControl>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input {...field} placeholder="Email" />
                    </FormControl>
                  )}
                </Field>
              </VStack>
              <VStack gap={4} alignItems="flex-start">
                <Text fontSize="3xl">Dados</Text>

                <Field name="CNPJ">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>CNPJ</FormLabel>
                      <Input {...field} placeholder="CNPJ" />
                    </FormControl>
                  )}
                </Field>
                <Field name="RT">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Responsável Técnico</FormLabel>
                      <Input {...field} placeholder="Responsável Técnico" />
                    </FormControl>
                  )}
                </Field>
                <Field name="CRORT">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>CRO - RT</FormLabel>
                      <Input {...field} placeholder="CRO - RT" />
                    </FormControl>
                  )}
                </Field>
              </VStack>
            </Grid>
          </Form>
        )}
      </Formik>
    </ConfigLayout>
  );
}

export default Index;
