import React from 'react'
import { Grid, GridItem, Flex, Text, Image, Box } from '@chakra-ui/react'

const Product = () => {
  return (
    <>
      <Box p={{ sm: 0, md: 3 }} display="flex" h="100%"  flexWrap="wrap"  >
        <Grid mt={3} templateColumns={{ sm: "repeat(1,1fr)", md: 'repeat(2, 1fr)' }} w={{ md: "90vw", lg: "50vw" }} h={{ sm: "1000px", md: "100vh" }}    >
          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}  >
              <Box w="40px">
                <Image mb={5} src='chat.svg' />
              </Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700">Chat</Text>
                <Text fontSize="12px " fontWeight="500">Engage members with discussions</Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem color="#545861" w='250px' h='80px' >

            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}   >
              <Box w="40px">
                <Image mb={5} src='wol.svg' />
              </Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700">payment</Text>
                <Text fontSize="12px " fontWeight="500">Charge for your community and content</Text>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem color="#545861" w='250px' h='80px' >

            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}   >
              <Box w="40px">
                <Image w="20px" mb={5} src='person.svg' /></Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700"> Discussion  </Text>
                <Text fontSize="12px " fontWeight="500">Hold engaging conversations</Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}   >
              <Box w="40px">
                <Image w="20px" mb={5} src='books.svg' />
              </Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700"> Customization </Text>
                <Text fontSize="12px " fontWeight="500">Bring your community vision to life</Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}  >
              <Box w="40px">
                <Image w="20px" mb={5} src='book.svg' /></Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700"> Courses </Text>
                <Text fontSize="12px " fontWeight="500">Bring your community vision to life</Text>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}  >
              <Box w="40px">
                <Image w="20px" mb={5} src='light.svg' />
              </Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700"> Workflows </Text>
                <Text fontSize="12px " fontWeight="500"> Automate personalized experiences  </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}   >
              <Box w="40px">
                <Image w="20px" mb={5} src='box.svg' /></Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700"> Events </Text>
                <Text fontSize="12px " fontWeight="500"> Host virtual events, anywhere </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}  >
              <Box w="40px">
                <Image w="20px" mb={5} src='game.svg' /></Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700">Gamification </Text>
                <Text fontSize="12px " fontWeight="500"> Keep your members coming back for more</Text>
              </Flex>
            </Flex>
          </GridItem> <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}  >
              <Box w="40px">
                <Image w="20px" mb={5} src='graph.svg' /></Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700">Analytics </Text>
                <Text fontSize="12px " fontWeight="500"> Get all your community data</Text>
              </Flex>
            </Flex>
          </GridItem>

          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}  >
              <Box w="40px">
                <Image w="20px" mb={5} src='setting.svg' />
              </Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700"> Integrations  </Text>
                <Text fontSize="12px " fontWeight="500">Integrate your favorite tools with Circle </Text>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem color="#545861" w='250px' h='80px' >
            <Flex _hover={{ color: "blue", '& img': { width: '25px', } }}   >
              <Box w="40px">
                <Image w="20px" mb={5} src='ai.svg' /></Box>
              <Flex flexDir="column">
                <Text fontSize="18px " fontWeight="700">  Community AI </Text>
                <Text fontSize="12px " fontWeight="500"> AI-powered connections, and learning  </Text>
              </Flex>
            </Flex>
          </GridItem>

        </Grid>
        <Box bg={{ md: "white", lg: "transparent" }} h="100%" pos={{ lg: "absolute" }} top="10px"
          right="20px">
          <Flex ml={{ md: "0px", lg: "230px" }} flexDirection="column" gap={5}>
            <Text color="#545861" pl={3} pt={8} fontSize="16px" fontWeight="500">
              Circle Plus
            </Text>
            <Image w={{ md: "100vw", lg: "400px" }} src='p1.webp' />
            <Image w={{ md: "100vw", lg: "400px" }} src='p2.webp' />

          </Flex>
        </Box>
      </Box>

    </>
  )
}

export default Product   