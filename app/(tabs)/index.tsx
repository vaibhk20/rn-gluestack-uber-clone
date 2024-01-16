import { useState } from "react";
import {
  Actionsheet,
  ActionsheetIcon,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetFlatList,
  ActionsheetScrollView,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetVirtualizedList,
  InputIcon,
  InputSlot,
  AddIcon,
  Image,
  SearchIcon,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {
  Box,
  Input,
  InputField,
  HStack,
  Icon,
  CircleIcon,
  ChevronDownIcon,
  Text,
} from "@gluestack-ui/themed";
import React from "react";
import { SafeAreaView } from "react-native";
const HomeScreen = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  return (
    <SafeAreaView>
      <Box bg="white" h="$full">
        <Box>
          <Input>
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField placeholder="Where to?" />
          </Input>
          <HStack>
            <Icon as={CircleIcon} />
            <Text></Text>
            <Icon as={ChevronDownIcon} />
          </HStack>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
export default HomeScreen;
