import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";
// import { DEV_URL } from "./config";

let mainWindow: BrowserWindow;

const width = 360;
const height = 0.75 * width;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width,
    height,
    center: true,
    kiosk: !isDev,
    resizable: false,
    fullscreen: false,
    fullscreenable: true,
    webPreferences: {
      // node환경처럼 사용하기
      nodeIntegration: true,
      // 개발자도구
      devTools: isDev,
      nativeWindowOpen: true,
    },
  });

  // production에서는 패키지 내부 리소스에 접근.
  // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드.
  const filePath = `file://${path.join(
    __dirname,
    "..",
    "..",
    "public",
    "index.html"
  )}`;
  // const url = isDev ? DEV_URL : filePath;
  mainWindow.loadURL(filePath);

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(true);

  // Emitted when the window is closed.
  mainWindow.on("closed", () => (mainWindow = undefined!));
  mainWindow.focus();
};

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
