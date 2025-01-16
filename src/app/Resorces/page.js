import React from 'react'
import { Grid, GridItem, Flex, Text, Image, Box } from '@chakra-ui/react'


const Resource = () => {
    return (
        <>
            <Box p={3} display="flex" h="100%" flexWrap="wrap" >
                <Grid mt={3} templateColumns="repeat(1,1fr)" h="30vh" w={{ md: "45vw", lg: "30vw" }}    >
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Blog</Text>
                            <Text fontSize="12px " fontWeight="500">Creator insights, stories, and trends</Text>
                        </Flex>
                    </GridItem>
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Event hub</Text>
                            <Text fontSize="12px " fontWeight="500">Learn from experts via summits and masterclasses</Text>
                        </Flex>
                    </GridItem>
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Customer stories</Text>
                            <Text fontSize="12px " fontWeight="500">Learn about exceptional Circle communities</Text>
                        </Flex>
                    </GridItem>
                </Grid>
                <Grid mt={3} templateColumns='repeat(1, 1fr)' maxH="70vh" w={{ md: "45vw", lg: "30vw" }}    >
                    <Text position="absolute" top="10px" css={{
                        '@media (max-width: 556px)': {
                            top: '270px',
                            left:"15px"
                        },
                    }}

                        color="#545861" pl={3} pt={8} fontSize="16px" fontWeight="500">
                        Get help
                    </Text>
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Community</Text>
                            <Text fontSize="12px " fontWeight="500">Learn about exceptional Circle communities</Text>
                        </Flex>
                    </GridItem>
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Knowledge base</Text>
                            <Text fontSize="12px " fontWeight="500">Guides to help you build communities</Text>
                        </Flex>
                    </GridItem>
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Customer success</Text>
                            <Text fontSize="12px " fontWeight="500">Unlock your community's potential</Text>
                        </Flex>
                    </GridItem>
                    <GridItem color="#545861" w='250px' h='80px' >
                        <Flex flexDir="column" _hover={{ color: "blue" }}  >
                            <Text fontSize="18px " fontWeight="700">Payment migration</Text>
                            <Text fontSize="12px " fontWeight="500">Let Circle migrate your memberships for free</Text>
                        </Flex>
                    </GridItem>

                </Grid>
                <Box pos={{ lg: "absolute" }} top="10px"
                    right="20px">
                    <Flex ml={{ md: "0px", lg: "230px" }} flexDirection="column" gap={5}>
                        <Text color="#545861" pl={3} pt={8} fontSize="16px" fontWeight="500">
                            Featured
                        </Text>
                        <Image w={{ md: "100vw", lg: "400px" }} src='re.webp' />

                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default Resource  