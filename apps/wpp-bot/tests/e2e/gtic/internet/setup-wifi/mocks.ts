import {
  GTIC,
  INTERNET_ACCESS_GTIC,
  SETUP_WIFI_INTERNET_ACCESS_GTIC_TAE,
  SO,
  ANSWER_SETUP_WIFI_GTIC_TAE,
} from "../../../../../src/menu-options/tae";

import { generateMenu } from "../../../../../src/utils";

export const phoneNumberMock = "+5583999999997";

export const gticMock = {
  menu: generateMenu(GTIC),
  internet: {
    menu: generateMenu(INTERNET_ACCESS_GTIC),
    setupWifi: {
      menu: generateMenu(SETUP_WIFI_INTERNET_ACCESS_GTIC_TAE),
      operationSystem: {
        android: {
          option: SO.ANDROID,
          answer: ANSWER_SETUP_WIFI_GTIC_TAE[SO.ANDROID],
        },
        linux: {
          option: SO.LINUX,
          answer: ANSWER_SETUP_WIFI_GTIC_TAE[SO.LINUX],
        },
        windows: {
          option: SO.WINDOWS,
          answer: ANSWER_SETUP_WIFI_GTIC_TAE[SO.WINDOWS],
        },
        mac: {
          option: SO.MACOS,
          answer: ANSWER_SETUP_WIFI_GTIC_TAE[SO.MACOS],
        },
      },
    },
  },
};
