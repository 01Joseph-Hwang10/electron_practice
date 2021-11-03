import { Menu, MenuItemConstructorOptions } from "electron";

const menuTemplate: MenuItemConstructorOptions[] = [
  {
    label: "simple-timer",
    submenu: [
      {
        role: "reload",
      },
      {
        role: "about",
      },
      {
        role: "quit",
      },
    ],
  },
];

export const menu = Menu.buildFromTemplate(menuTemplate);
