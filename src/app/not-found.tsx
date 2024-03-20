import { NotFoundIllustration } from "@/components/illustrations/notFoundIllustration";
import { Button, Container, Group, Title } from "@mantine/core";

function NothingFoundBackground() {
  return (
    <Container className={"py-[80px]"}>
      <div className={"relative container mx-auto"}>
        <NotFoundIllustration
          className={"absolute inset-0 opacity-75 text-gray-300"}
        />
        <div className={"sm:pt-[220px] relative z-[1] pt-[120px] mx-auto"}>
          <Title
            className={"text-center font-black sm:text-[38px] text-[32px]"}
          >
            Nothing to see here
          </Title>
          <p
            className={
              "max-w-[540px] m-auto mt-[35px] mb-[75px] text-center text-gray-900"
            }
          >
            Page you are trying to open does not exist. You may have mistyped
            the address, or the page has been moved to another URL. If you think
            this is an error contact support.
          </p>
          <Group justify="center">
            <Button size="md">Take me back to home page</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}

export default NothingFoundBackground;
