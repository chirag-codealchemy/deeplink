#!/usr/bin/env node

import fs from "fs";
import inquirer from "inquirer";
import node from "node:child_process";

export const createIndexPage = ({
  ios_scheme,
  ios_store_url,
  android_scheme,
  android_store_url,
  web_url,
  firebase_folder_path,
}) => {
  if (firebase_folder_path) {
    fs.writeFileSync(
      `${firebase_folder_path}/index.html`,
      `<!DOCTYPE html>
        <html lang="en">
          <head>
            <title>DeepLink</title>
            <script>
              if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
                window.location.replace("${ios_scheme}:/" + window.location.pathname + window.location.search);
                setTimeout(() => window.location.replace("${ios_store_url}"), 500);
              }
            </script>
          </head>
          <body style="margin: 0; padding: 0">
            <p>Deep Link</p>
            <script defer>
              setTimeout(() => {
                if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
                  window.location.replace("${android_scheme}:/" + window.location.pathname + window.location.search);
                  setTimeout(() => window.location.replace("${android_store_url}"), 500);
                } else {
                  window.location.replace("${web_url}")
                }
              }, 0);
            </script>
          </body>
        </html>`
    );
  }
};

export async function init() {
  try {
    console.clear();
    console.log("Enter your project details...");
    const data = [
      { name: "ios_scheme", message: "App scheme IOS? ", _default: "" },
      { name: "android_scheme", message: "App scheme Android? ", _default: "" },
      { name: "ios_store_url", message: "App Store URL? ", _default: "" },
      { name: "android_store_url", message: "Play Store URL? ", _default: "" },
      { name: "web_url", message: "Website URL? ", _default: "" },
      {
        name: "firebase_folder_path",
        message: "Firebase hosting folder path? ",
        _default: "./public",
      },
    ];

    const config = {};

    for (let { name, message, _default } of data) {
      const answer = await inquirer.prompt({
        name,
        message,
        type: "input",
        default: _default,
      });
      config[name] = answer[name] || "";
    }

    fs.writeFileSync(
      "./deepLinkConfig.json",
      `{\n${Object.keys(config)
        .map((e) => `\t"${e}": "${config[e]}"`)
        .join(",\n")}\n}`
    );
  } catch (error) {
    console.log("🚀 ~ file: index.js:80 ~ init ~ error:", error);
  }
}

const deploy = () => {
  const config = fs.readFileSync("./deepLinkConfig.json");
  createIndexPage(JSON.parse(config) || {});
  node.execSync("firebase deploy --only hosting").toString();
};

const start = () => {
  switch (process.argv[2]) {
    case "init":
      init();
      deploy();
      break;
    case "update":
      deploy();
      break;
    case "help":
      return console.log(`
        \n🚀--------------------🚀 \n\ninit: initialize project,\nupdate: update project \n\n🚀--------------------🚀\n`);
    default:
      break;
  }
};

start();
