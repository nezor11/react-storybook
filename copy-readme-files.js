import fs from "fs";
import path from "path";
import { promisify } from "util";

const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

async function copyReadmeFiles(sourceDir, destinationDir) {
  try {
    if (!fs.existsSync(destinationDir)) {
      await mkdir(destinationDir, { recursive: true });
    }

    const files = await readdir(sourceDir);

    for (const file of files) {
      const filePath = path.join(sourceDir, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await copyReadmeFiles(filePath, path.join(destinationDir, file));
      } else if (file === "README.md") {
        await copyFile(filePath, path.join(destinationDir, file));
      }
    }
  } catch (error) {
    console.error("Error al copiar archivos:", error);
  }
}

const sourceDirectory = "./src/stories/components/";
const destinationDirectory = "./storybook-static/src/stories/components/";

copyReadmeFiles(sourceDirectory, destinationDirectory);
