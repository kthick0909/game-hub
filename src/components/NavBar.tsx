import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInputBox from "./SearchInputBox";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" width="50px" objectFit="cover" />
      </Link>
      <SearchInputBox />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
