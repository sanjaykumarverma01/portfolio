import React from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <HamburgerIcon ref={btnRef} colorScheme="teal" onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link
              to="main"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              Home
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              About
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="skills"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              Skills
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              Projects
            </Link>
          </DrawerHeader>
          <DrawerHeader>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              hashSpy={true}
            >
              Contact
            </Link>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawerExample;
