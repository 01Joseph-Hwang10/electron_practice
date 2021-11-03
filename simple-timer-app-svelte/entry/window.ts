import { BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";
import * as path from "path";

let mainWindow: BrowserWindow;

const width = 400;
const height = Math.round((9 / 16) * width);

export const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width,
    height,
    center: true,
    kiosk: !isDev,
    resizable: false,
    fullscreen: false,
    fullscreenable: false,
    autoHideMenuBar: false,
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

  mainWindow.setMenuBarVisibility(true);
  mainWindow.setVisibleOnAllWorkspaces(true);
};
