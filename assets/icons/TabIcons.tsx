import { createIcon } from "@gluestack-ui/themed";
import React from "react";
import { Path } from "react-native-svg";

export const HomeIcon = createIcon({
  // createIcon function is imported from '@gluestack-ui/themed'
  viewBox: "0 0 33 32",
  path: (
    <>
      <Path
        d="M8.5 14L16.5 7L24.5 14V25H19.5V18H13.5V25H8.5V14Z"
        fill="currentColor"
      />
    </>
  ),
});

export const ServicesIcon = createIcon({
  viewBox: "0 0 33 32",
  path: (
    <>
      <Path d="M8.5 8H12.5V12H8.5V8Z" fill="currentColor" />
      <Path d="M8.5 14H12.5V18H8.5V14Z" fill="currentColor" />
      <Path d="M12.5 20H8.5V24H12.5V20Z" fill="currentColor" />
      <Path d="M14.5 8H18.5V12H14.5V8Z" fill="currentColor" />
      <Path d="M18.5 14H14.5V18H18.5V14Z" fill="currentColor" />
      <Path d="M14.5 20H18.5V24H14.5V20Z" fill="currentColor" />
      <Path d="M24.5 8H20.5V12H24.5V8Z" fill="currentColor" />
      <Path d="M20.5 14H24.5V18H20.5V14Z" fill="currentColor" />
      <Path d="M24.5 20H20.5V24H24.5V20Z" fill="currentColor" />
    </>
  ),
});

export const ActivityIcon = createIcon({
  viewBox: "0 0 33 32",
  path: (
    <>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.5 7H23.5V25L19 22.5L16 25L13 22.5L8.5 25V7ZM11.5 10H20.5V13H11.5V10ZM20.5 15H11.5V18H20.5V15Z"
        fill="currentColor"
      />
    </>
  ),
});

export const AccountIcon = createIcon({
  viewBox: "0 0 33 32",
  path: (
    <>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 16C18.4853 16 20.5 13.9853 20.5 11.5C20.5 9.01472 18.4853 7 16 7C13.5147 7 11.5 9.01472 11.5 11.5C11.5 13.9853 13.5147 16 16 16ZM14.5 17C11.1863 17 8.5 19.6863 8.5 23V25H23.5V23C23.5 19.6863 20.8137 17 17.5 17H14.5Z"
        fill="currentColor"
      />
    </>
  ),
});
