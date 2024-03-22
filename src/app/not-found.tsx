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
            Rien par ici!
          </Title>
          <p
            className={
              "max-w-[540px] m-auto mt-[35px] mb-[75px] text-center text-gray-900"
            }
          >
            La page que vous essayez d'ouvrir n'existe pas. Il se peut que vous
            ayez mal saisi l'adresse ou que la page ait été déplacée vers un
            autre URL. l'adresse, ou la page a été déplacée vers une autre URL.
            Si vous pensez qu'il s'agit d'une qu'il s'agit d'une erreur,
            contactez l'assistance.
          </p>
          <Group justify="center">
            <Button size="md">Revenir à la page d'accueil</Button>
            <Button variant="outline" size="md">Revenir ou j'etais</Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}

export default NothingFoundBackground;
