import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Heading } from '@chakra-ui/react';

const Form = () => {
  return (
    <Box 
    p={5}
    >
      <Heading as="h2" size="lg" mb={6}>Informasi Peserta</Heading>
      <Flex direction="row" wrap="wrap" justify="space-between">
        <FormControl id="nama-lengkap" isRequired mb={4} flexBasis="45%">
          <FormLabel>Headline Company</FormLabel>
          <Input type="text" placeholder="M.RAPLI IYYAD" />
        </FormControl>

        <FormControl id="nama-perusahaan" isRequired mb={4} flexBasis="45%">
          <FormLabel>Nama Perusahaan</FormLabel>
          <Input type="text" placeholder="Xion1" />
        </FormControl>

        <FormControl id="nomor-kursi" isRequired mb={4} flexBasis="45%">
          <FormLabel>Nomor Kursi</FormLabel>
          <Input type="text" placeholder="A13" />
        </FormControl>

        <FormControl id="email" isRequired mb={4} flexBasis="45%">
          <FormLabel>E-mail</FormLabel>
          <Input type="email" placeholder="rapliyad@yahoo.com" />
        </FormControl>

        <FormControl id="nomor-telepon" isRequired mb={4} flexBasis="45%">
          <FormLabel>Nomor Telepon</FormLabel>
          <Input type="text" placeholder="12555335882" />
        </FormControl>

        <FormControl id="nama-relationship-manager" isRequired mb={4} flexBasis="45%">
          <FormLabel>Nama Relationship Manager</FormLabel>
          <Input type="text" placeholder="Aria Lesmana" />
        </FormControl>

        <FormControl id="makanan-yang-dihindari" isRequired mb={4} flexBasis="45%">
          <FormLabel>Makanan yang Dihindari</FormLabel>
          <Input type="text" placeholder="Non halal" />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Form;
