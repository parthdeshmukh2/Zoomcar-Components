import React from 'react'
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import Logo from "../Assets/Zmslogowhite.png";

const NavbarHost = () => {
  return (
    <Box width='100%' height='60px' bg='black' border='1px solid black' >

        <Flex width='80%' height='100%' border='1px solid red' margin='auto' justifyContent='space-between' flexWrap='wrap'>
            <Flex width='20%' height='100%' alignItems='center' flexWrap='wrap'>
            <Image
              boxSize="65%"
              objectFit="cover"
              src={Logo}
              alt="Hero Banner"
            />
            </Flex>
            <Flex width='40%' border='1px solid yellow' color='white' justifyContent='space-between' alignItems='center ' flexWrap='wrap'>
                <Text>Contact Us</Text>
                <Text>FAQ</Text>
                <Text>Contact Us</Text>
                <Text>Logout</Text>
                <Button bg='rgb(16,163,16)'>Start Earning</Button>
            </Flex>

        </Flex>
      
    </Box>
  )
}

export default NavbarHost
