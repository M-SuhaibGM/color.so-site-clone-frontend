"use client"
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Input,
} from '@chakra-ui/react';
import Tabis from "./tabs/page"
import Navbar from './nevbar/page';
import { TypeAnimation } from 'react-type-animation';

function FrontPage() {



    return (
        <Box m="0px" p="0px" w='100vw' h={{base:"1000px",  sm:"1050px",md:"1500px"}} bgGradient='linear(to-tl, #1b0d3e 50%  ,  #495fff )'
            color="white"
        >
            <Navbar />
            <Box bgImage={{sm:"",md:"url(bg.svg)"}}
                h={{sm:"",md:"700px"}}
                w="100vw"
                zIndex={4}
                bgSize="cover"
                overflow="hidden"
                bgPosition="center" mb="150px">
                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    maxW="1200px"
                    mx="auto"

                    px={4}
                >
                    <Heading as="h1"  justifyContent="center"
                        align="center" fontSize={{ base:"25px",sm:"30px", md:"50px", lg: '60px' }}  width={{base:"300px",sm:"470px", md:"740px", lg: '850px' }} fontWeight="900" mb={4}>
                        The all-in-one community platform for     <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Innovation',
                                2000,
                                'Technology',
                                2000,
                                'Enterprises',
                                2000,
                                'non-profits',
                                2000,
                                'educaters',
                                2000
                            ]}
                            wrapper="span"
                            speed={30}
                            style={{ color: '#ffa1df' }}
                            repeat={Infinity}
                        />

                    </Heading>
                    <Text fontSize="20px" mb={{base:2,sm:4,md:8}} w={{base:"80vw",md:"70vw" ,lg:"40vw"}} >
                        Create a space for your members to connect, share, and learn.
                    </Text>
                    <Flex zIndex="0" w={{base:"300px",   sm:"400px", md:"500px"  }} justify="center"  h={{base:"60px",sm:"70px"}} bg="white" borderRadius="10px" align="center"  textAlign="center">
                        <Input ml={{base:"5px",sm:"40px"}} type='text' w={{base:"200px",   sm:"200px", md:"300px"  }} variant='unstyled'  fontSize="18px" fontWeight="500" _placeholder={{ color: "#42464d" }} placeholder='Enter your amail adress' />
                        <Button type="submit"
                            color="white"
                            bgGradient='linear(to-tl, #471aff 40% ,  #aec5f9)'
                            _hover={{ bgGradient: 'linear(to-br, #471aff 40% ,  #aec5f9)' }}
                            width={{base:"90px",   sm:"150px",  }} h={{base:"50px",sm:"60px"}} >
                            Get Started
                        </Button>
                    </Flex>
                </Flex>
            </Box>
            <Tabis />
            
        </Box>
    );
}

export default FrontPage;

