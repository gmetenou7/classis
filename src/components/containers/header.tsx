"use client";
import classes from "@/styles/header.module.css";
import {
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import LanguageSwitcher from "../buttons/languageSwitcher";
import Logo from "../commons/logo";

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <div className="py-5 px-2 sticky top-0 left-0 bg-white shadow-md z-50">
      <header className={classes.header}>
        <Group justify="space-between" wrap="nowrap" h="100%">
          <Logo />
          <Group
            visibleFrom="sm"
            wrap="nowrap"
            className="overflow-y-scroll"
            gap={15}
          >
            <Group h="100%" wrap="nowrap" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Présentation
              </a>
              <a href="#" className={classes.link}>
                Contact
              </a>
              <a href="#" className={classes.link}>
                A propos
              </a>
            </Group>

            <Group wrap="nowrap" visibleFrom="sm">
              <LanguageSwitcher />
              <Button variant="default">Connexion</Button>
              <Button>Inscription</Button>
            </Group>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            A propos
          </a>
          <a href="#" className={classes.link}>
            Contact
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </div>
  );
};

export default Header;
