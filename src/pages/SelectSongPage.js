import React from "react";
import {
  Flex,
  Select,
  Text,
  Button,
  Container,
  FormControl,
} from "@chakra-ui/react";

export default function SelectSongPage() {
  return (
    <Container>
      <Flex flexDir={"column"}>
        <FormControl>
          <Text fontSize="5xl">Pick a Song!</Text>
          <Select placeholder="Select a instrument" mb={2}>
            <option value="piano">Piano</option>
            <option value="trombone">Trombone</option>
            <option value="flute">Flute</option>
          </Select>
          <Select placeholder="Select a song" mb={2}>
            <option value="bad romance">Bad Romance</option>
            <option value="love story">Love Story</option>
            <option value="Dynamite">Dynamite</option>
          </Select>
          <Button mx={"auto"} size="lg">
            Play
          </Button>
        </FormControl>
      </Flex>
    </Container>
  );
}
