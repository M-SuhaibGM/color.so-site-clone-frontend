import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Flex,
    Image,

} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import Center from '../center/page'

const Accodation = () => {
    return (
        <>
            <Box p="20px" >
                <Text pl="20px" fontSize="25px" mb="10px" fontWeight="700" color="blue">Start</Text>
                <Text pl="20px" fontSize={{ base: "30px", sm: "40px", md: "45px", lg: "56px" }} w={{ base: "95vw", sm: "90vw", md: "80vw", lg: "80vw", xl: "70vw" }} fontWeight="700" mb="50px" color="black">Organized, easy to navigate — and fun for your members</Text>
                <Flex h="100%" flexWrap="wrap" justifyContent="space-between">
                    <Image src="acco.webp" w={{ base: "98vw", md: "90vw", lg: "40vw" }} />
                    <Accordion color="black" allowToggle h="100vh" w={{ base: "98vw", md: "90vw", lg: "40vw" }}>

                        <AccordionItem border="none " >
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton bg="none" h="80px" pos="relative">
                                            <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                                Launch a community-powered course
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
                                        Circle has everything you need to run your business, all in one place. That means one log-in for your students’ online courses, live sessions, and real-time chat. Now, they can help those behind them, connect with those alongside them, and learn from those ahead of them.
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
                                                Design your community areas with spaces

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
                                        Create spaces to help members share ideas, get feedback, and host discussions. Use Circle to share your content and post announcements.
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
                                                Create private & secret spaces for groups
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
                                        Provide access areas to different groups with private spaces and group chats. Perfect for memberships, coaching groups, course creators, and more.

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
                                                Rich posts & content

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
                                        Posts come alive on Circle. Easily add rich formatting, media, emojis, and embed your favorite 3rd-party tools.
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
                                                Posts come alive on Circle.
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
                                        Easily add rich formatting, media, emojis, and embed your favorite 3rd-party tools.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>



                    </Accordion>
                </Flex>


                <Text pl="20px" fontSize="25px" mt="100px" mb="10px" fontWeight="700" color="blue">ENGAGE</Text>
                <Text pl="20px" fontSize={{ base: "30px", sm: "40px", md: "45px", lg: "56px" }} w={{ base: "95vw", sm: "90vw", md: "80vw", lg: "80vw", xl: "70vw" }} fontWeight="700" mb="50px" color="black">Organized, easy to navigate — and fun for your members</Text>
                <Flex justifyContent="space-between" flexWrap="wrap">

                    <Accordion color="black" allowToggle h="100vh" w={{ base: "98vw", md: "90vw", lg: "40vw" }}>

                        <AccordionItem border="none " >
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton bg="none" h="80px" pos="relative">
                                            <Box as='span' flex='1' fontWeight="600" fontSize={{ base: "15px", sm: "20px", lg: "24px" }} textAlign='left'>
                                                Immersive live streams with co-hosts

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
                                        Go live to hundreds of your members with multiple co-hosts. Pull attendees up on stage with you to chat. Crisp video & audio that just works.
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
                                                Direct messages and group chats


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
                                        Spontaneous conversations are easy in Circle. Easily spin up a group chat or send a private message.
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
                                                Searchable member directory & rich profiles




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
                                        Make it easier than ever for your members to discover each other, with custom profile fields and search filters.
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
                                                Event spaces with calendars & RSVPs

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
                                        Display your community’s upcoming events. Then let your members easily RSVP and add the event to their calendar
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
                                                Automate check-ins with workflows

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
                                        Deliver personalized communication at scale with workflows. Set up automatic welcome messages, nudges, awards, subscription renewal reminders, and much, much more.
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
                                                Automated video transcriptions

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
                                        There’s so much hidden value buried in your videos, event recordings, and course lessons. Make your video content searchable and accessible with AI-powered automated transcriptions.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>



                    </Accordion>
                    <Image src="acco2.webp" w={{ base: "98vw", md: "90vw", lg: "40vw" }} />
                </Flex>

            </Box>
            <Center />
        </>
    )
}

export default Accodation