import React from 'react'
import {Box, Flex, Image, Grid, Text, GridItem} from "@chakra-ui/react"
import NavbarHost from '../Components/NavbarHost'
import { PhoneIcon } from '@chakra-ui/icons'

const ContactUs = () => {
  return (
    <Box>
        <NavbarHost/>
        <Box width={{base:"90%", md:"70%", lg:"40%"}} height='500px' margin='auto' >
        <Image
        
          boxSize="100%"
          objectFit="cover"
          src="https://www.zoomcar.com/zap/subscribe/build/a5a9b25f3cb492c507d39cc0134cb0c6.svg"
          alt="Hero Banner"
        />
        </Box>
        <Grid templateColumns={{base:'repeat(1, 1fr)', md:"repeat(2, 1fr)"}} templateRows="repeat(200px)" width={{base:"90%",lg:'60%'}} border='0.02px solid gray' margin='auto' boxShadow='2xl' > 
            <Flex direction='column' ml='5' p='4'>
                <Text textAlign='left' mt='4 ' fontSize='xl' fontWeight='600'> Write an email</Text>
                <Text textAlign='left' fontSize='md' color='gray'>Expect Reply in 24 hours</Text>
                <Text textAlign='left' fontSize='md' mt='12' fontWeight='bold' color='rgb(16,163,16)'>hot.sales.in@zoomcar.com</Text>

            </Flex>
            <Flex direction='column' ml='5' p='4'>
            <PhoneIcon mt='4 '/>
                <Text textAlign='left'  fontSize='xl' fontWeight='600'>Call Us</Text>
                <Text textAlign='left' fontSize='md' color='gray'>Available from 9am to 9pm</Text>
                <Text textAlign='left' fontSize='md' mt='8' fontWeight='bold' color='rgb(16,163,16)'>0806-897-2200</Text>

            </Flex>
        </Grid>
      
    </Box>
  )
}

export default ContactUs
