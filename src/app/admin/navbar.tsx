"use client"
import React from "react";
import { Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "Teams",
    "Wings",
    "Events",
    "Gallery",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" position="static">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full"
              href={`/admin/auth/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem key="button">
          <Button
            onClick={()=>signOut()}
            variant="solid"
            color="secondary"
          >
            Sign-out
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}