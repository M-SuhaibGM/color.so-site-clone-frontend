import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

import { useState } from 'react';
import Product from "../produts/page"
import Resource from "../Resorces/page"

function Navbar() {
  const [data, setData] = useState("none");
  const [isOpen, setIsOpen] = useState(false);
  const [color, setcolor] = useState("white");
  const [filter, setfilter] = useState("invert(1)");

  const handleAccordionChange = (index) => {
    setIsOpen(index !== -1);

    if (isOpen && index === -1) {
      setData("none");
      setcolor("white");
      setfilter("invert(1)");
    } else {
      setData("white");
      setcolor("black");
      setfilter("");
    }
  };

  return (
    <Box fontFamily="sans-serif">
      <Flex
        zIndex="2"
        px={{ base: "10px", sm: "40px" }}
        h="100px"
        pb="20px"
        align="center"
        bgColor={data}
        justify="space-between"
        gap={{ base: "0px", sm: '0px', md: '50px', }}
      >
        <Accordion zIndex="10" gap="none" allowToggle onChange={handleAccordionChange}>
          <Flex justify="center" align="center" h="80px">
            <Image filter={filter} mb={1} mr={{ base: "5px", sm: "40px" }} boxSize={{ base: 65, md: 95 }} src='logo.svg' />
            <AccordionItem border="none">
              <AccordionButton p={{ base: "0px", sm: "10px" }} ml={{ base: "10px", sm: "" }} cursor="pointer" h="90px" border="none" w={{ base: "80px", sm: "100%" }}>
                <Text fontSize={{ base: "14px", sm: "18px" }} color={color} fontWeight="400" gap={{ base: "8px", sm: "20px" }}> Product<AccordionIcon boxSize={5} /> </Text>
              </AccordionButton>
              <AccordionPanel left="0px" bg="white" borderTop="1px solid" borderColor="black" w="100vw" pos="absolute" h="2000px" pb={4}>
                <Text color="#545861" pl={3} pt={8} fontSize="16px" fontWeight="500">
                  Features
                </Text>
                <Product />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border="none">
              <AccordionButton p={{ base: "0px", sm: "10px" }} ml={{ base: "10px", md: "" }} cursor="pointer" h="90px" border="none" w={{ base: "100px", sm: "100%" }}>
                <Text fontSize={{ base: "14px", sm: "18px" }} color={color} fontWeight="400" gap={{ base: "8px", sm: "20px" }}> Resources<AccordionIcon boxSize={5} /> </Text>
              </AccordionButton>
              <AccordionPanel left="0px" borderTop="1px solid" borderColor="black" pos="absolute" bg="white" w="100vw" h="1000px" pb={4}>
                <Text color="#545861" pl={3} pt={8} fontSize="16px" fontWeight="500">
                  Learn more
                </Text>
                <Resource />
              </AccordionPanel>
            </AccordionItem>
            <Text fontSize={{ base: "0px", sm: "0px", md: "0", lg: "18px" }} cursor="pointer" color={color} fontWeight="400">Pricing</Text>
          </Flex>
        </Accordion>

        <Menu>
          <MenuButton mr="10px">
            <Image  src='hamberger.svg' display={{ base: "flex", sm: "flex", md: 'flex', lg: "none" }} width="30px" filter={filter} />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Text fontSize="18px" cursor="pointer" color="black" fontWeight="400">Pricing</Text>
            </MenuItem>
            <MenuItem>
              <Text fontSize="18px" cursor="pointer" color="black" fontWeight="400">log in</Text>
            </MenuItem>
            <MenuItem>
              <Box bgGradient='linear(to-tl, #471aff 40% , #aec5f9)' _hover={{ bgGradient: 'linear(to-br, #471aff 40% , #aec5f9)' }} cursor="pointer" textAlign="center" display="flex" justifyContent="center" alignItems="center" color="white" h="50px" w="140px" fontSize="15px" fontWeight="800" border="none" borderRadius="10px" >Get Started</Box>
            </MenuItem>
          </MenuList>
        </Menu>
        <Flex gap="20px" mr="20px" display={{ base: "none", lg: "flex"}} align="center">
          <Box>
            <Text fontSize="18px" cursor="pointer" color={color} fontWeight="400">log in</Text>
          </Box>
          <Button bgGradient='linear(to-tl, #471aff 40% ,#aec5f9)' _hover={{ bgGradient: 'linear(to-br, #471aff 40% ,#aec5f9)' }} cursor="pointer" color="white" h="50px" w="140px" fontSize="15px" fontWeight="800" border="none" borderRadius="10px" >Get Started</Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;