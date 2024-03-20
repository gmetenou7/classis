"use client";
import classes from "@/styles/footer.module.css";
import { ActionIcon, Group, Text, rem } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "#" },
      { label: "Pricing", link: "#" },
      { label: "Support", link: "#" },
      { label: "Forums", link: "#" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Contribute", link: "#" },
      { label: "Media assets", link: "#" },
      { label: "Changelog", link: "#" },
      { label: "Releases", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join Discord", link: "#" },
      { label: "Follow on Twitter", link: "#" },
      { label: "Email newsletter", link: "#" },
      { label: "GitHub discussions", link: "#" },
    ],
  },
];

const groups = data.map((group) => {
  const links = group.links.map((link, index) => (
    <Text<"a">
      key={index}
      className={classes.link}
      component="a"
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  return (
    <div className={classes.wrapper} key={group.title}>
      <Text className={classes.title}>{group.title}</Text>
      {links}
    </div>
  );
});

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="container mx-auto p-4">
        <div className={classes.inner}>
          <div className={classes.logo}>
            <MantineLogo size={30} />
            <Text size="xs" c="dimmed" className={classes.description}>
              Build fully functional accessible web applications faster than
              ever
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </div>
        <div className={classes.afterFooter}>
          <Text c="dimmed" size="sm">
            © {new Date().getFullYear()} classis. Tous droits réservés.
          </Text>

          <Group
            gap={0}
            className={classes.social}
            justify="flex-end"
            wrap="nowrap"
          >
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
