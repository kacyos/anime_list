import { NavBar } from "@/components/NavBar";
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Image,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { getAnimes } from "./api";
import { colors } from "./colors";

interface IAnime {
  _id: string;
  title: string;
  alternativeTitles: Array<string>;
  ranking: number;
  genres: Array<string>;
  episodes: number;
  hasEpisode: boolean;
  hasRanking: boolean;
  image: string;
  link: string;
  status: string;
  synopsis: string;
  thumb: string;
  type: string;
}

interface IAnimesProps {
  animes: Array<IAnime>;
}

export default function Home({ animes }: IAnimesProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar></NavBar>
        <Box
          display="flex"
          flexWrap="wrap"
          gap="4"
          justifyContent="center"
          w="full"
          px="4"
        >
          {animes.map((anime) => (
            <Card
              key={anime._id}
              w="60"
              h="96"
              bgGradient="linear(to-l, purple.700, gray.500)"
              border="none"
              rounded="lg"
              overflow="hidden"
            >
              <CardBody>
                <Box>
                  <Image
                    src={anime.image}
                    alt={anime.title}
                    boxSize="64"
                    fit="contain"
                  />
                </Box>
                <Text
                  pt={2}
                  fontWeight="bold"
                  textAlign="center"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  textColor="gray.200"
                >
                  {anime.title}
                </Text>
                <CardFooter p="2">
                  <StackDivider
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                    gap="1.5"
                    boxSize="full"
                  >
                    {anime.genres.map((genre) => (
                      <Badge
                        key={genre}
                        bgColor={colors[genre]}
                        variant="solid"
                        textColor="gray.50"
                        rounded="md"
                        px={1.5}
                      >
                        {genre}
                      </Badge>
                    ))}
                  </StackDivider>
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </Box>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const animes = await getAnimes();
  return {
    props: {
      animes: animes.data,
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
}
