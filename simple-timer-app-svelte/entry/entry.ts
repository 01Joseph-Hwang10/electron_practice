import { app, BrowserWindow, Menu } from "electron";
import * as isDev from "electron-is-dev";
import { menu } from "./menu";
import { createWindow } from "./window";

Menu.setApplicationMenu(menu);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(() => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

if (isDev) {
  try {
    require("electron-reloader")(module); // eslint-disable-line
  } catch (error) {
    // pass
  }
}
