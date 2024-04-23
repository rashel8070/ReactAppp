import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
//import { MdApi } from "react-icons/md";
import carIcon from "/workspaces/ReactAppp/src/assets/carIcon.svg"

const NavBar = () => {
  return (
    <Navbar className="bg-slate-100 h-16">
      <NavbarBrand>
      <img
        src={carIcon}
        className="w-10 h-10 text-primary transform scale-x-[-1]"
        style={{ transformOrigin: 'center' }}
      />
        <p className="font-bold text-inherit">CAR API</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default NavBar;
