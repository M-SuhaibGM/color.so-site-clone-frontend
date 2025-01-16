import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Image, Text, Flex, Box, Heading, Grid, GridItem } from '@chakra-ui/react'
import Accodation from "../accodition/page"
const Tabis = () => {

    const Features = [
        'Thousands of integrations',
        'Automated workflows',
        'Custom profile fields',
        'AI activity scores',
        'Bulk actions',
        'Single sign-on',
        'Roles & permissions',
        'Auto-remove churned members',
    ];



    const advancedFeatures = [
        'Group chat rooms',
        'Private messaging',
        'Event spaces',
        'Live streams',
        'Weekly digests',
        'Automated check-ins',
        'Gamified rewards',
        'Bulk DMs',
    ];


    const coreFeatures = [
        'Rich posts',
        'Content co-pilot',
        'Immersive courses',
        'Private spaces',
        'Automatic video transcriptions',
        'Member directory',
        'Customized branding',
        'Organized discussions',
    ];
    const features = [
        'Paid memberships',
        'One-time payments',
        'Recurring subscriptions',
        'Gate access',
        'Free trials and upsells',
        'Payment installments',
        'Coupons and discounts',
        'Subscription renewal reminders',
    ];


    const imageUrls = [
        '1man.webp',
        '2man.webp',
        '3man.webp',
        '4man.webp',
        '5man.webp',
        '6man.webp',
    ];

    const boxContent = [
        {
            title: 'Brands & Startups',
            description: 'Building an engaged community is a super power for any brand. Integrate your community directly into your product or website.',
        },
        {
            title: 'Customer communities',
            description: 'Build deep relationships with your customers, help them connect with each other. Get product feedback, reduce customer support inbound, and build advocates for life.',
        },
        {
            title: 'Course communities',
            description: 'Circle has everything you need to build your course, grow your business, and engage your students - all in one place.',
        },
        {
            title: 'Membership communities',
            description: 'Circle offers the flexibility to create a membership experience that\'s truly yours. Ideal for subscription, gated exclusive content, premium masterminds, paid newsletters, and more.',
        },
        {
            title: 'Coaching communities',
            description: 'Provide a dedicated home for your coaching clients, with group coaching calls, resources, live chat and a place for your clients to work with you on your terms.',
        },
        {
            title: 'Clubs & organizations',
            description: 'Bring your people together to organize, share iderun events, and collaborate.',
        },
    ];
    return (
        <>
            <Tabs variant='unstyled'  >
                <TabList gap="20px" fontSize="20px" color="#a297c0" fontWeight="500" w="100vw" display="flex" flexWrap="wrap" justifyContent="center" mb="50px">
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Home</Tab>
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Discussions</Tab>
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Events</Tab>
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Live</Tab>
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Courses</Tab>
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Chat</Tab>
                    <Tab _selected={{ color: 'white' }} fontSize="20px" fontWeight="500">Members</Tab>
                </TabList>
                <TabIndicator color="black" />
                <TabPanels display="flex" justifyContent="center">
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                        <video src='1.mp4' height="90vh" autoPlay loop muted />,
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                        <Image src='2tab.webp' />
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                        <Image src='ctab.webp' />
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                        <video src='1.mp4' height="90vh" autoPlay loop muted />,
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                    <Image src='ltab.jpeg' />
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                        <Image src='chattab.webp' />
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="90vw" >
                        <Image src='ltab.jpeg' />
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Flex mt="100px" flexDir="column" mb="40px" justify="center " flexWrap="wrap"
                alignItems="center">
                <Text color="black" fontSize={{ base: "22px", sm: "35", lg: "55" }} fontWeight="700"   >Create a thriving community​</Text>
                <Text color="blue" fontSize={{ base: "25px", sm: "35", lg: "55" }} fontWeight="700"   >you can be proud of​</Text>
            </Flex>
            <Tabs variant='unstyled'  >
                <TabList zIndex="1" gap={{ base: "10px", md: "20px" }} fontSize="20px" flexWrap="wrap" color="black" fontWeight="500" w="98vw" display="flex" justifyContent="center" mb={{ base: "20px", md: "50px" }}>
                    <Tab _selected={{ color: 'white', bg: "black", borderRadius: "30px" }} fontSize="20px" fontWeight="500">Start</Tab>
                    <Tab _selected={{ color: 'white', bg: "black", borderRadius: "30px" }} fontSize="20px" fontWeight="500">Engage</Tab>
                    <Tab _selected={{ color: 'white', bg: "black", borderRadius: "30px" }} fontSize="20px" fontWeight="500">Monitize</Tab>
                    <Tab _selected={{ color: 'white', bg: "black", borderRadius: "30px" }} fontSize="20px" fontWeight="500">Scale</Tab>
                </TabList>
                <TabIndicator color="black" />
                <TabPanels display="flex" justifyContent="center">
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="100vw"  >
                        <Flex px="20px" justify="space-between" flexWrap="wrap" >
                            <Flex gap="20px" w={{ base: "98vw", md: "80vw", lg: "40vw", xl: "500px" }} flexDir="column">
                                <Text color="black" fontSize={{ base: "25px", sm: "32px" }} fontWeight="640" >Your community, courses, and content – all in one place.</Text>
                                <Text color="black" fontSize={{ base: "15px", sm: "22px" }} fontWeight="400" > Gone are the days of needing to make a whole bunch of different tools work together. With Circle, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.</Text>
                            </Flex>
                            <Image w={{ base: "98vw", md: "80vw", lg: "50vw", xl: "650px" }} src='first.png' />
                        </Flex>
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="98vw" >
                        <Flex px="20px" justify="space-between" flexWrap="wrap" >
                            <Flex gap="20px" w={{ base: "98vw", md: "80vw", lg: "40vw", xl: "500px" }} flexDir="column" mt="20px" >
                                <Text color="black" fontSize={{ base: "25px", sm: "32px" }} fontWeight="640" >Courses, live streams, group chats, events, rich profile, and more.</Text>
                                <Text color="black" fontSize={{ base: "15px", sm: "22px" }} fontWeight="400" >Your members are the star of the show — they just need the tools to connect with each other and shine. You want an active, buzzing community. And so do your members. With Circle you get powerful engagement features so that you can empower your members to build that vision with you.</Text>
                            </Flex>
                            <Image w={{ base: "98vw", md: "80vw", lg: "50vw", xl: "650px" }} src='second.png' />
                        </Flex>
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="98vw" >
                        <Flex px="20px" justify="space-between" flexWrap="wrap" >
                            <Flex gap="20px" w={{ base: "98vw", md: "80vw", lg: "40vw", xl: "500px" }} flexDir="column" mt="20px">
                                <Text color="black" fontSize={{ base: "25px", sm: "32px" }} fontWeight="640" >Whether you’re offering a course, a membership, one-time access to content, or monthly recurring subscriptions — Circle has you covered..</Text>
                                <Text color="black" fontSize={{ base: "15px", sm: "22px" }} fontWeight="400" >Many of the top creators and brands run their entire business on Circle. You can easily start accepting payments in minutes. Whether you’re offering a membership, one-time access to content, providing free trials or monthly recurring subscriptions — Circle has you covered.</Text>
                            </Flex>
                            <Image w={{ base: "98vw", md: "80vw", lg: "50vw", xl: "650px" }} src='third.png' />
                        </Flex>
                    </TabPanel>
                    <TabPanel borderRadius="20px" bg="whiteAlpha.900" w="98vw" >
                        <Flex px="20px" justify="space-between" flexWrap="wrap" >
                            <Flex gap="20px" w={{ base: "98vw", md: "80vw", lg: "40vw", xl: "500px" }} flexDir="column">
                                <Text color="black" fontSize={{ base: "25px", sm: "32px" }} fontWeight="640" >Manage and scale your community operations</Text>
                                <Text color="black" fontSize={{ base: "15px", sm: "22px" }} fontWeight="400" >Get back the precious time you currently spend on repetitive, manual tasks so that you can focus on more meaningful work. Circle comes with powerful workflows, integrations, and AI-powered content and analytics tools to help you create an extraordinary member experience.</Text>
                            </Flex>
                            <Image w={{ base: "98vw", md: "80vw", lg: "50vw", xl: "650px" }} src='four.png' />
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>


            <Flex mt="100px" mb="40px" flexDir="column" w="98vw" justify="center" align="center" textAlign="center"  >
                <Text color="black" fontSize={{ base: "25px", sm: "35px", lg: "55px" }} fontWeight="700" w={{ base: "70vw", md: "70vw", lg: "80vw", xl: "60vw" }}    >Thousands of communities & use-cases just like yours
                </Text>
            </Flex>



            <Flex p="30px" w="100vw" gap="20px" flexWrap="wrap" justify="center" align="center">
                {imageUrls.map((imageUrl, index) => (
                    <Box
                        key={index}
                        position="relative"
                        bgImage={`url(${imageUrl})`}
                        h={{ base: '200px', sm: '270px', md: '240px', lg: '240px', xl: '270px' }}
                        bgRepeat="no-repeat"
                        w={{ base: '100vw', sm: '100vw', md: '380px', lg: '412px' }}
                        bgSize={{ base: '100vw', sm: '100vw', md: '400px', lg: '450px' }}
                        borderRadius="20px"
                        _hover={{
                            bg: '#506cf0',
                            '& p': { display: 'none' },
                            '& div': { display: 'flex' },
                        }}
                    >
                        <Text
                            position="absolute"
                            bottom="20px"
                            left="20px"
                            fontSize="25px"
                            fontWeight="650"
                        >
                            {boxContent[index].title}
                        </Text>
                        <Flex
                            display="none"
                            flexDir="column"
                            gap="20px"
                            p="30px"
                        >
                            <Heading fontSize={{ base: '20px', sm: '25px' }} fontWeight="650">
                                {boxContent[index].title}
                            </Heading>
                            <Heading fontSize={{ base: '12px', sm: '16px' }} fontWeight="400">
                                {boxContent[index].description}
                            </Heading>
                        </Flex>
                    </Box>
                ))}
            </Flex>


            <Flex mt="100px" mb={{ base: "", sm: "60px" }} flexDir="column" w="98vw" justify="center" align="center" textAlign="center"  >
                <Text color="black" fontSize={{ base: "25px", sm: "35px", lg: "55px" }} fontWeight="700" w="60vw"    >All the features you need to get started in minutes
                </Text>
                <Text color="black" fontSize={{ base: "13px", sm: "20px" }} fontWeight="500" w={{ base: "96vw", md: "80vw", lg: "60vw", xl: "60vw" }}    >You have a vision for your community experience. Circle provides you with the building blocks to bring your vision to life — fast and without the headaches.
                </Text>
            </Flex>
            <Box h="110vh" w="100vw" mx={{ base: "", sm: "30px" }} gap="25px" flexWrap="wrap" justifyContent='center' alignItems="center" display="flex">

                <Flex gap="20px" w={{ base: "45vw", sm: "40vw", md: "48vw", lg: "47vw", xl: "23vw" }} flexDir="column"  >
                    <Heading fontSize={{ base: "23px", sm: "32px" }} w={{ base: "150px", sm: "150px", md: "200px" }} fontWeight="600" display="flex" gap="20px" color="black">
                        <Box bg="red" mt="10px" width="20px" h="20px" borderRadius="40px" />
                        Start</Heading>
                    {coreFeatures.map((feature, index) => (
                        <Flex key={index} maxH="20px" gap="20px" alignItems="center">
                            <Image h="20px" src='cheak.svg' />
                            <Text h="20px" fontSize={{ base: "12px", sm: "md" }} color="black" fontWeight="500">{feature}</Text>
                        </Flex>
                    ))}
                </Flex>
                <Flex gap="20px" w={{ base: "45vw", sm: "40vw", md: "48vw", lg: "47vw", xl: "23vw" }} flexDir="column"  >
                    <Heading fontSize={{ base: "23px", sm: "32px" }} w={{ base: "150px", sm: "150px", md: "200px" }} fontWeight="600" display="flex" gap="20px" color="black">
                        <Box bg="yellow" mt="10px" width="20px" h="20px" borderRadius="40px" />
                        Engage</Heading>
                    {advancedFeatures.map((feature, index) => (
                        <Flex key={index} maxH="20px" gap="20px" alignItems="center">
                            <Image h="20px" src='cheak.svg' />
                            <Text h="20px" fontSize={{ base: "12px", sm: "md" }} color="black" fontWeight="500">{feature}</Text>
                        </Flex>
                    ))}
                </Flex>
                <Flex gap="20px" w={{ base: "45vw", sm: "40vw", md: "48vw", lg: "47vw", xl: "23vw" }} flexDir="column"  >
                    <Heading fontSize={{ base: "23px", sm: "32px" }} w={{ base: "150px", sm: "150px", md: "200px" }} fontWeight="600" display="flex" gap="20px" color="black">
                        <Box bg="teal" mt="10px" width="20px" h="20px" borderRadius="40px" />
                        Monetize</Heading>
                    {features.map((feature, index) => (
                        <Flex key={index} maxH="20px" gap="20px" alignItems="center">
                            <Image h="20px" src='cheak.svg' />
                            <Text h="20px" fontSize={{ base: "12px", sm: "md" }} color="black" fontWeight="500">{feature}</Text>
                        </Flex>
                    ))}
                </Flex>
                <Flex gap="20px" w={{ base: "45vw", sm: "40vw", md: "48vw", lg: "47vw", xl: "23vw" }} flexDir="column"  >
                    <Heading fontSize={{ base: "23px", sm: "32px" }} w={{ base: "150px", sm: "150px", md: "200px" }} fontWeight="600" display="flex" gap="20px" color="black">
                        <Box bg="blue" mt="10px" width="20px" h="20px" borderRadius="40px" />
                        Scale</Heading>
                    {Features.map((feature, index) => (
                        <Flex key={index} maxH="20px" gap="20px" alignItems="center">
                            <Image h="20px" src='cheak.svg' />
                            <Text h="20px" fontSize={{ base: "12px", sm: "md" }} color="black" fontWeight="500">{feature}</Text>
                        </Flex>
                    ))}
                </Flex>

            </Box>

            <Box h={{ base: "160vh", lg: "140vh" }} w="96vw" mb={{ base: "100px", sm: "200px", md: "300px", lg: "500px" }} mx="2vw" mt={{ base: "200px", sm: "250px", lg: "200px", xl: "0px" }} bg="#e7f3fa">


                <Flex pt="80px" flexDir="column" w="96vw" justify="center" align="center" textAlign="center"  >
                    <Text color="black" fontSize={{ base: "20px", sm: "35px", lg: "50px" }} fontWeight="650" w={{ base: "92vw", lg: "60vw" }}    >Built for community-powered courses
                    </Text>
                    <Text color="black" fontSize="20px" fontWeight="500" w={{ base: "90vw", md: "80vw", lg: "50vw" }}    >Goodbye one-dimensional lectures, hello immersive experiences.
                        Bring your course to life with:

                    </Text>
                </Flex  >
                <Flex justify="center" mt="70px" w="100vw" align="center" flexDir="column">
                    <Grid w="70vw" mb="70px" flexWrap="wrap" gap="30px" templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}  >

                        {Features.map((feature, index) => (
                            <GridItem display="flex" key={index} w={{ base: "80vw", sm: "80vw", lg: "40vw" }} maxH="20px" gap="20px" alignItems="center">
                                <Image src='bluet.svg' w="20px" />
                                <Text fontSize={{ base: "14px", sm: "18px", md: "20px", lg: "20px" }} color="black" fontWeight="600">{feature}</Text>
                            </GridItem>
                        ))}
                    </Grid>
                    <Image w="70vw" src='bottomgrid.png' />

                </Flex>




            </Box>
            <Accodation />


        </>
    )
}

export default Tabis