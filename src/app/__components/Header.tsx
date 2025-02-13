"use client"

import { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <header className="bg-white shadow-md z-10 sticky top-0 h-[4rem]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        {/* Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Ville Strengell
          </Link>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center">
          <Link href="/thesis" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Master&apos;s thesis
          </Link>
          <Link href="/#skills" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Skills
          </Link>
          <Link href="/#projects" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Projects
          </Link>
          <Link href="/#workexperience" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Experience
          </Link>
          <Link href="/#contact" className="text-gray-600 hover:text-gray-900 px-3 py-2">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon className="rounded-md"></MenuIcon>
          </IconButton>
        </div>

        {/* Drawer */}
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
        >
          <div
            className="w-64"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <div className="flex justify-end p-4">
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            <List>
              <ListItemButton component="a" href="/thesis">
                <ListItemText primary="Master's thesis" />
              </ListItemButton>
              <ListItemButton component="a" href="/#skills">
                <ListItemText primary="Skills" />
              </ListItemButton>
              <ListItemButton component="a" href="/#projects">
                <ListItemText primary="Projects" />
              </ListItemButton>
              <ListItemButton component="a" href="/#workexperience">
                <ListItemText primary="Experience" />
              </ListItemButton>
              <ListItemButton component="a" href="/#contact">
                <ListItemText primary="Contact" />
              </ListItemButton>
            </List>
          </div>
        </Drawer>
      </nav>
    </header>
  );
}