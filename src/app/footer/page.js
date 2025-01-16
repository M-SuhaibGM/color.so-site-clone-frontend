
import {
    Box, Text, Button, Input, Flex, VStack, Image, Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuIcon,
} from '@chakra-ui/react';
import React from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
const Footer = () => {


    const navigationLinks = [

        "Home",
        "Pricing",
        "Careers",
        "Affiliate program",
        "Partner program",
        "Circle Plus"
    ];

    const legalLinks = [

        "Start Your Free Trial",
        "Terms",
        "Privacy Notice",
        "Cookie Policy",
        "DPA "
    ];


    const features = [
        "Chat",
        "Payments",
        "Discussions",
        "Customization",
        "Courses",
        "Workflows",
        "Events",
        "Gamification",
        "Analytics",
        "Integrations",
        "Community AI"
    ];

    const resources = [
        "Knowledge Base",
        "Product Updates",
        "Blog",
        "Event Hub",
        "Customer Stories",
        "Customer Community",
        "Payment Migration"
    ];

    return (
        <>
            <Flex
                mt="50px"
                h="30vh"
                w="100vw"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Text
                    color="black"
                    fontSize={{ base: "20px", sm: "35px", lg: "50px" }}
                    fontWeight="650"
                    w={{ base: "92vw", lg: "55vw", 'xl': "45VW" }}
                >
                    Loved by thousands of creators and brands
                </Text>
            </Flex>

            <Flex
                width="100vw"
                minH="100vh"
                gap="50px"
                p="30px"
                overflowX="scroll"
                sx={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}
                align="flex-start"
                cursor="pointer"
            >
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (1).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (2).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (3).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (4).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (5).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (6).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (7).png" />
                <Image boxShadow="dark-lg" borderRadius="10px" src="s1 (8).png" />
            </Flex>

            <Box
                h="80vh"
                bg="#506cf0"
                w="100vw"
                display="flex"
                justifyContent="center"
                gap="10px"
                flexDir="column"
                alignItems="center"
            >
                <Text
                    px="20px"
                    fontSize={{ base: "25px", sm: "35px", lg: "55px" }}
                    fontWeight="700"
                    mb="50px"
                    color="white"
                >
                    Ready to get started?
                </Text>

                <Flex
                    display={{ base: "none", sm: "flex" }}
                    w={{ base: "0px", sm: "475px", md: "600px" }}
                    justify="center"
                    h={{ base: "0px", sm: "70px" }}
                    bg="white"
                    borderRadius="10px"
                    align="center"
                    textAlign="center"
                    gap={{ sm: "40px", md: "0px" }}
                >
                    <Input
                        color="black"
                        ml={{ base: "5px", sm: "20px", md: "40px" }}
                        type="text"
                        w={{ base: "200px", sm: "200px", md: "300px" }}
                        variant="unstyled"
                        fontSize="18px"
                        fontWeight="500"
                        _placeholder={{ color: "#42464d" }}
                        placeholder="Enter your email address"
                    />
                    <Button
                        type="submit"
                        color="white"
                        bgGradient="linear(to-tl, #471aff 40% ,  #aec5f9)"
                        _hover={{ bgGradient: 'linear(to-br, #471aff 40% ,  #aec5f9)' }}
                        width={{ base: "200px", sm: "200px", md: "250px" }}
                        h={{ base: "50px", sm: "60px" }}
                    >
                        Start your 14-day free trial
                    </Button>
                </Flex>
                <Flex gap="20px" display={{ base: "flex", sm: "none" }} flexDir="column">
                    <Input
                        color="black"

                        pl="40px"
                        bg="white"
                        h="60px"
                        type="text"
                        w="90vw"
                        variant="unstyled"
                        fontSize="18px"
                        fontWeight="500"
                        _placeholder={{ color: "#42464d" }}
                        placeholder="Enter your email address"
                    />

                    <Button
                        type="submit"
                        color="white"

                        bgGradient="linear(to-tl, #471aff 40% ,  #aec5f9)"
                        _hover={{ bgGradient: 'linear(to-br, #471aff 40% ,  #aec5f9)' }}
                        width="90vw"
                        h="60px"
                    >
                        Start your 14-day free trial
                    </Button>
                </Flex>
                <Text color="white">Try Circle free. No credit card required.</Text>
            </Box>



            <Box maxH="100%" w="100vw" display="flex" flexWrap="wrap">
                <Flex px="30px" pt="100px" flexDir="column" w="40vw" >
                    <Image boxSize="200" src="logo3.svg" h="80px"  />
                    <Text w={{ base: "70vw", lg: "40vw", xl: "25vw" }} fontSize="24px" color="black" fontWeight="600">The all-in-one community platform for creators and brands.</Text>
                </Flex>
                <Flex pl="30px" gap={{ base: "20px", sm: "85px" }} flexWrap="wrap" >
                    <Flex pt="100px" gap="10px" flexDir="column" >
                        <Text color="black" fontWeight="500" fontSize="16px">Website</Text>
                        {navigationLinks.map((item) => (
                            <Text key={item} color="black" fontWeight="400" fontSize="16px">{item}</Text>
                        ))}
                    </Flex>
                    <Flex pt="100px" gap="10px" flexDir="column" >
                        <Text color="black" fontWeight="500" fontSize="16px">Features</Text>
                        {features.map((item) => (
                            <Text key={item} color="black" fontWeight="400" fontSize="16px">{item}</Text>
                        ))}
                    </Flex>
                    <Flex pt="100px" gap="10px" flexDir="column" >
                        <Text color="black" fontWeight="500" fontSize="16px">Resources</Text>
                        {resources.map((item) => (
                            <Text key={item} color="black" fontWeight="400" fontSize="16px">{item}</Text>
                        ))}
                    </Flex>
                    <Flex pt="100px" gap="10px" flexDir="column" w={{ base: "110px", sm: "140px" }} >
                        <Text color="black" fontWeight="500" fontSize="16px">Login</Text>
                        {legalLinks.map((item) => (
                            <Text key={item} color="black" fontWeight="400" fontSize="16px">{item}</Text>
                        ))}
                    </Flex>

                </Flex>

            </Box>
            <Flex px="30px" w="100vw" h="70px" mt={{base:"250px",sm:"230px",md:"10px",lg:"10px"}} borderTop="1px" borderBottom="1px" borderColor="blackAlpha.300" justify="space-between" align="center">
                <Text color="#5e6066" fontSize="14px">© 2024 Circle. All rights reserved.</Text>
                <Menu>
                    <Flex justify="center" align="center" textAlign="center">
                        <Image  src="len.svg" />
                        <MenuButton  fontSize={{base:"12px",sm:"18px"}} cursor="pointer" color="black" fontWeight="400" >
                            Language
                        </MenuButton>
                        <ChevronDownIcon color="black" fontSize="20px" />
                    </Flex>
                    <MenuList>
                        <MenuItem>
                            <Text fontSize="18px" cursor="pointer" color="black" fontWeight="400">English</Text>
                        </MenuItem>
                        <MenuItem>
                            <Text fontSize="18px" cursor="pointer" color="black" fontWeight="400">log in</Text>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>z
        </>
    );
};

export default Footer;