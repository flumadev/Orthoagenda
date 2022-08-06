import {
  Avatar,
  Button,
  Flex,
  Text,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import ConfigLayout from '../../../components/config.layout.component';

function Index() {
  const [name, setName] = useState('');

  const handleNameChange = (value: string) => {
    setName(value);
  };

  return (
    <ConfigLayout
      breadCumbs={['Configurações', 'Sistema', 'Profissionais', 'Adicionar']}
    >
      <Grid
        gridTemplateColumns={'1fr'}
        gridTemplateRows={'100px 1fr'}
        height="100%"
      >
        <Flex alignItems={'center'} gap="8">
          <Avatar size="xl" name={name} src="https://bit.ly/prosper-babsa" />
          <Flex flexDirection={'column'}>
            <Text fontSize={'2xl'} fontWeight="medium">
              {name}
            </Text>
            <Text fontSize={'xl'}>{}</Text>
          </Flex>
        </Flex>

        <Formik
          initialValues={{}}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Grid
            as={Form}
            gridTemplateColumns={'2fr 1fr'}
            gridTemplateRows={'1fr'}
            gap={8}
          >
            <Flex flexDir={'column'} gap={2}>
              <Text fontSize={'xl'} fontWeight="bold" mt={4}>
                Dados
              </Text>
              <Flex gap={4}>
                <Field name="name" validate={handleNameChange}>
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Nome</FormLabel>
                      <Input {...field} placeholder="Nome" />
                    </FormControl>
                  )}
                </Field>
                <Field name="specialty">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>Especialidade</FormLabel>
                      <Input {...field} placeholder="Especialidade" />
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Flex gap={4}>
                <Field name="CPF">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>CPF</FormLabel>
                      <Input {...field} placeholder="CPF" />
                    </FormControl>
                  )}
                </Field>
                <Field name="CRO">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>CRO</FormLabel>
                      <Input {...field} placeholder="CRO" />
                    </FormControl>
                  )}
                </Field>
              </Flex>
              <Text fontSize={'xl'} fontWeight="bold" mt={4}>
                Endereço
              </Text>
              <Flex gap={4}>
                <Field name="zipcode">
                  {({ field, form }: any) => (
                    <FormControl>
                      <FormLabel>CEP</FormLabel>
                      <Input {...field} placeholder="CEP" />
                    </FormControl>
                  )}
                </Field>
                <Field name="address">
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
              </Flex>
              <Flex gap={4}>
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
              </Flex>
              <Field name="details">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel>Complemento</FormLabel>
                    <Input {...field} placeholder="Complemento" />
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Flex flexDir={'column'} gap="2">
              <Text fontSize={'xl'} fontWeight="bold" mt={4}>
                Contato
              </Text>
              <Field name="email">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} placeholder="Email" />
                  </FormControl>
                )}
              </Field>
              <Field name="phone">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel>Celular</FormLabel>
                    <Input {...field} placeholder="Celular" />
                  </FormControl>
                )}
              </Field>
              <Text fontSize={'xl'} fontWeight="bold" mt={4}>
                Sistema
              </Text>
              <Field name="picture">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel>Foto</FormLabel>
                    <Input
                      {...field}
                      placeholder="Foto"
                      type="file"
                      border={'none'}
                      accept="image/png, image/jpeg"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="role">
                {({ field, form }: any) => (
                  <FormControl>
                    <FormLabel>Tipo de Acesso</FormLabel>
                    <Select {...field} defaultValue="0">
                      <option value="option1" disabled>
                        Selecione o tipo de acesso
                      </option>
                      <option value="option2">Dentista</option>
                      <option value="option1">Administrador</option>
                      <option value="option3">Secretário</option>
                    </Select>
                  </FormControl>
                )}
              </Field>
              <Button
                justifySelf={'flex-end'}
                alignSelf="flex-end"
                gridColumnStart={2}
                mt="4"
              >
                Salvar
              </Button>
            </Flex>
          </Grid>
        </Formik>
      </Grid>
    </ConfigLayout>
  );
}

export default Index;
