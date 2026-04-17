import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const envFiles = [".env.local", ".env"];

let cachedEnv: Map<string, string> | null = null;

function parseEnvValue(rawValue: string) {
  const value = rawValue.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function loadLocalEnvFiles() {
  const envMap = new Map<string, string>();

  for (const filename of envFiles) {
    const filepath = resolve(process.cwd(), filename);
    if (!existsSync(filepath)) continue;

    const content = readFileSync(filepath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;

      const separatorIndex = trimmed.indexOf("=");
      if (separatorIndex === -1) continue;

      const key = trimmed.slice(0, separatorIndex).trim();
      const value = parseEnvValue(trimmed.slice(separatorIndex + 1));

      if (key && !envMap.has(key)) {
        envMap.set(key, value);
      }
    }
  }

  return envMap;
}

export function getServerEnv(key: string) {
  const runtimeValue = process.env[key];
  if (runtimeValue && runtimeValue.length > 0) {
    return runtimeValue;
  }

  if (!cachedEnv) {
    cachedEnv = loadLocalEnvFiles();
  }

  return cachedEnv.get(key);
}
