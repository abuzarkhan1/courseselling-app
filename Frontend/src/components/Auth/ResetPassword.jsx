import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState, useParams } from 'react'

const ResetPassword = () => {
    const [password, setPassword] = useState('');

        const params = useParams();
        console.log(params.token);

  return <Container py={'16'} h="90vh">
    <Heading
     children={"Reset Password"}
     my="16"
     textTransform={"uppercase"}
     textAlign={['center','left']}   
     />
     <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter New Password"
            type={'password'}
            focusBorderColor="yellow.500"
          />

          <Button
            type="submit"
            w={'full'}
            colorScheme="yellow"
          >
           Update Password
          </Button>
        </VStack>
  </Container>
}

export default ResetPassword;