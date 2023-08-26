
import {
  ENTRYPOINT_MENU_OPTIONS,
  GTIC,
  BLOCK_FAILURE_INTERNET_ACCESS,
  HALL_FAILURE_INTERNET_ACCESS,
  INTERNET_ACCESS_GTIC,
  SETUP_WIFI_INTERNET_ACCESS_GTIC_TAE,
  MORE_DETAILS_FAILURE_INTERNET_ACCESS,
  ANSWERS_FAILURE_INTERNET_ACCESS_GTIC_TAE_,
} from "../../../../../src/menu-options/tae";
import { generateMenu } from "../../../../../src/utils";

export const phoneNumberMock = "+5583999999997";

export const departmentMock = {
  departmentMenu: generateMenu(ENTRYPOINT_MENU_OPTIONS),
};

export const gticMock = {
  menu: generateMenu(GTIC),
  internet: {
    menu: generateMenu(INTERNET_ACCESS_GTIC),
    failure: {
      block: generateMenu(BLOCK_FAILURE_INTERNET_ACCESS),
      hall: generateMenu(HALL_FAILURE_INTERNET_ACCESS),
      moreDetails: generateMenu(MORE_DETAILS_FAILURE_INTERNET_ACCESS),
      answer: ANSWERS_FAILURE_INTERNET_ACCESS_GTIC_TAE_[1],
    },
    setupWifi: { menu: generateMenu(SETUP_WIFI_INTERNET_ACCESS_GTIC_TAE) },
  },
};
