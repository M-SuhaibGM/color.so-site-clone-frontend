import {
    Box, Text, Image, Accordion, Flex,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Heading,
} from '@chakra-ui/react'
import React from 'react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Footer from "../footer/page"
const Center = () => {
    return (
        <>
            <Box px={{ base: "10px", sm: "20px", md: "40px", lg: "70px" }} display="flex" flexDir="column" justifyContent="center" alignItems="center" mt="100px" h={{ base: "120vh", sm: "140vh", md: "160vh", lg: "210vh" }} w="100vw" bg="#22223b">
                <Text fontSize={{ base: "30px", sm: "40px", md: "45px", lg: "56px" }} mb="10px" fontWeight="700" color="white">Gather with your people
                </Text >
                <Text fontSize={{ base: "15px", sm: "15px", md: "20px", lg: "25px" }} w={{ base: "95vw", sm: "90vw", md: "80vw", lg: "80vw", xl: "70vw" }} fontWeight="700" mb="50px" color="white">Easily create immersive live video experiences right inside of your Circle community. Whether it’s a 5-person group coaching call, a 50-person online class, or a 500-person broadcast with live Q&A — we’ve got you covered.</Text>
                <Image w="90vw" borderRadius="20px" src="center.jpeg" />
            </Box>
            <Text fontSize="25px" mt="100px" px="20px" mb="10px" fontWeight="700" color="blue">MONETIZE</Text>
            <Text px="20px" fontSize={{ base: "25px", sm: "35px", lg: "55px" }} w={{ base: "90vw", md: "80vw", lg: "50vw" }} fontWeight="700" mb="50px" color="black"> Monetize your community with flexible payments</Text>
            <Flex px="20px" justifyContent="space-between " flexWrap="wrap">
                <Image src="acco3.webp" w={{ base: "98vw", md: "90vw", lg: "40vw" }} />
                <Accordion color="black" allowToggle h="50vh" w={{ base: "98vw", md: "90vw", lg: "40vw" }}>

                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                            Easily gate access and offer multiple tiers

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                    Your business model needs flexibility. With Circle, you can unlock access to different parts of your community based on the type of community that you run. Great for memberships, coaching, courses, or more.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                            Flexible subscriptions, one-time payments & more


                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                    Offer monthly, quarterly, annual and weekly subscriptions. Charge a one-time fee. Start accepting payments in minutes.    Design your community areas with spaces
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="140px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                            Offer easy upsells and cross-sells at the moment your customers are ready to buy

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                    Circle gives your students full access into your product suite so they can
                                    seamlessly move between courses, events, and the community that ties it all together. Seal the deal with special promotions and free trials
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>



                </Accordion>
            </Flex>
            <Text px="20px" mb="20px" fontSize="25px" mt="100px" fontWeight="700" color="blue">Scale
            </Text>
            <Text px="20px" fontSize={{ base: "25px", sm: "35px", lg: "55px" }} w={{ base: "90vw", md: "80vw", lg: "50vw" }} fontWeight="700" mb="20px" color="black">
                Easy integrations with your existing tools</Text>
            <Flex p="20px" justifyContent="space-between" flexWrap="wrap">

                <Accordion color="black" allowToggle h="70vh" w={{ base: "98vw", md: "90vw", lg: "40vw" }}>

                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                            Thousands of integrations

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                    Circle plays nice with all of your existing tools — it’s what we’re known for. While you likely won’t need to integrate for most of your needs, you will always have the option to with Circle.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                            Analytics & community insights

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                    With Circle, the pulse of your community is in your hands. Identify your most active members, trends, popular discussions, and more.

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                            Single sign-on (SSO)

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                    Easily unify your external login system with your Circle community to reduce friction and increase engagement.

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>

                </Accordion>
                <Image src="acco4.webp" w={{ base: "98vw", md: "90vw", lg: "40vw" }} />
            </Flex>
            <Box mt="100px" gap="20px" bg="#22223b" h="80vh" borderRadius="20px" w="100vw" display="flex" flexDir="column" alignItems="center" justifyContent="center">
                <Image w="70px" src='coma.svg' />
                <Text w={{base:"90vw",lg:"60vw"}} textAlign="center" fontSize={{base:"15px",lg:"24px"}} fontWeight="400" color="white">In the last edition we launched Circle, a next-generation online discussion forum. It has had a profound impact on the community-building aspect of the course. It is far more modern, user-friendly, interactive, and muti-faceted than any other platform out there, and we are making it the home of our student community.</Text>
                <Image w="200px" src='logo2.svg' />
            </Box>
             <Text px="20px" fontSize="25px" mt="100px" mb="10px" fontWeight="700" color="blue">THRIVE</Text>
            <Text px="20px"  fontSize={{ base: "25px", sm: "35px", lg: "55px" }} w={{ base: "90vw", md: "80vw", lg: "50vw" }} fontWeight="700" mb="50px" color="black">
            Access to 12,000+ community builders on the same journey as you.</Text>
            <Flex px="20px"  justifyContent="space-between" flexWrap="wrap">
                <Image src="acco5.webp"  w={{ base: "98vw", md: "90vw", lg: "40vw" }} />
                <Accordion color="black" allowToggle h="60vh"w={{ base: "98vw", md: "90vw", lg: "40vw" }}>

                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }}  textAlign='left'>
                                        Weekly trainings and educational workshops
                                      
                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px"  w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                Learn how to onboard your members, grow your community, keep members engaged, community business models, and more in live weekly workshops with our team.

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }}  textAlign='left'>
                                        Office hours, bootcamps, checklists, & more

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                See behind-the-scenes of successful communities running on Circle. Attend office hours and ask questions. Get access to helpful templates, guides and checklists as you setup your community on Circle.

                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>
                    <AccordionItem border="none " >
                        {({ isExpanded }) => (
                            <>
                                <h2>
                                    <AccordionButton bg="none" h="80px" pos="relative">
                                        <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }}  textAlign='left'>
                                        Daily discussion with 12,000+ top community-builders like you.

                                        </Box>

                                        {isExpanded ? (
                                            <MinusIcon fontSize='15px' />
                                        ) : (

                                            <Flex flexDir="column">
                                                <AddIcon fontSize='15px' />
                                                <Box pos="absolute" bottom="0px" left="0px" h="1px" w={{ base: "90vw", md: "90vw", lg: "40vw" }} bg="black" />
                                            </Flex>

                                        )}

                                    </AccordionButton>

                                </h2>
                                <AccordionPanel pb={4} fontSize={{ base: "14px", sm: "18px", lg: "18px" }} fontWeight="400" >
                                Every day there are hundreds of lively discussions, posts, and ideas shared from people who are on the same journey as you. Build connections with others and get help along the way.
                                </AccordionPanel>
                            </>
                        )}
                    </AccordionItem>



                </Accordion>

            </Flex>
            <Footer/>

        </>
    )
}

export default Center