"use client";
import { Link, useRouter } from "@/navigation";
import classes from "@/styles/header.module.css";
import {
  Button,
  Group
} from "@mantine/core";
import LanguageSwitcher from "../buttons/languageSwitcher";
import Logo from "../commons/logo";

const Header = () => {
  const router = useRouter()

  return (
    <div className="py-5 px-2 sticky top-0 left-0 bg-white shadow-md z-50">
      <header className={classes.header}>
        <Group justify="space-between" wrap="nowrap" h="100%">
          <Logo />
          <Group
            wrap="nowrap"
            className="overflow-x-scroll overflow-y-hidden"
            gap={15}
          >
            <Group h="100%" wrap="nowrap" gap={0} >
              <Link href="/" className={classes.link}>
                Présentation
              </Link>
              <Link href="#" className={classes.link}>
                Contact
              </Link>
              <Link href="#" className={classes.link}>
                A propos
              </Link>
            </Group>

            <Group wrap="nowrap" >
              <LanguageSwitcher />
              <Button onClick={()=>router.push('/login')} variant="default">Connexion</Button>
              <Button onClick={()=>router.push('/register')}>Inscription</Button>
            </Group>
          </Group>
        </Group>
      </header>
    </div>
  );
};

export default Header;
