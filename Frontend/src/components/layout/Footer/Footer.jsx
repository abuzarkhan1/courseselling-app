import React from 'react';
import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children={'All Rights Reserved'} color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children={'@AbuzarKhan'}
            color={'yellow.400'}
          />
        </VStack>
        <HStack spacing={['2', '10']}
         justifyContent="center"
         color={"white"}
         fontSize={"50"}
         >
          <a href="https://www.instagram.com/abuzar__khan1/" target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=100012704685656"
            target={'_blank'}
          >
            <TiSocialFacebookCircular />
          </a>
          <a href="https://github.com/abuzarkhan1" target={'_blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
