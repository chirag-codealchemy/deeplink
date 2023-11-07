import { networkInterfaces } from "os";
import { URL, URLSearchParams } from "url";

const getSearchPath = (obj) => {
  const search = new URLSearchParams(obj?.data || {}).toString();
  return search ? `?${search}` : "";
};

export const createDeepLink = (obj) => {
  try {
    const __DEV__ = process.env.NODE_ENV === "development";
    if (__DEV__) {
      const nets = networkInterfaces();
      const results = Object.create(null); // Or just '{}', an empty object
      for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
          const familyV4Value = typeof net.family === "string" ? "IPv4" : 4;
          if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
              results[name] = [];
            }
            results[name].push(net.address);
          }
        }
      }
      return `exp://${results["en0"][0]}:${
        Number(
          JSON.parse(fs.readFileSync(`${process.cwd()}/package.json`))
            ?.dependencies?.expo?.split(".")[0]
            .replace(/[^~]/, "")
        ) < 49
          ? 19000
          : 8081
      }/--/${obj?.path || ""}${getSearchPath(obj)}`;
    } else {
      let config = fs.readFileSync("./deepLinkConfig.json");
      if (!config) {
        console.error("Initialize DeepLink before use!");
        return "";
      }
      return `${JSON.parse(config)?.firebase_domain}/${
        obj?.path || ""
      }${getSearchPath(obj)}`;
    }
  } catch (error) {
    console.error("🚀 ~ expo-deep-link ~ error:", error);
  }
};

export const getDeepLinkData = (link) => {
  const { pathname } = new URL(link);
  let data = {};
  const search = link?.split("?")[1];
  search &&
    search?.split("&")?.forEach((e) => {
      data[e.split("=")[0]] = e.split("=")[1];
    });
  return { data, path: pathname };
};
