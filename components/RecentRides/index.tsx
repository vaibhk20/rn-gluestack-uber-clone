import { Box, ClockIcon, HStack, Icon, Text } from "@gluestack-ui/themed";
import React from "react";

const RecenrRides = () => {
  return (
    <HStack>
      <Icon as={ClockIcon} />
      <Box>
        <Text>Select CityWalk Mall</Text>
        <Text>
          Saket disctrict center, district center, sector 6, pushp vihar, New
          delhi, delhi 110017
        </Text>
      </Box>
    </HStack>
  );
};

export default RecenrRides;
