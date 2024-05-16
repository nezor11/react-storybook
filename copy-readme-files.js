import fs from "fs";
import path from "path";
import { promisify } from "util";

const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const unlink = promisify(fs.unlink);

async function copyReadmeFiles(sourceDir, destinationDir) {
  try {
    // Eliminar todos los archivos README.md en todas las carpetas
    await deleteAllReadmeFiles(sourceDir);

    // Copiar index.tsx como README.md en cada carpeta
    await copyIndexAsReadme(sourceDir);

    // Copiar archivos README.md a la carpeta de destino
    await copyReadmeFilesRecursive(sourceDir, destinationDir);
  } catch (error) {
    console.error("Error al copiar archivos:", error);
  }
}

async function deleteAllReadmeFiles(directory) {
  const files = await readdir(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      await deleteAllReadmeFiles(filePath);
    } else if (file === "README.md") {
      await unlink(filePath);
    }
  }
}

async function copyIndexAsReadme(directory) {
  const files = await readdir(directory);
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      await copyIndexAsReadme(filePath);
    } else if (file === "index.tsx") {
      await copyFile(filePath, path.join(directory, "README.md"));
    }
  }
}

async function copyReadmeFilesRecursive(sourceDir, destinationDir) {
  if (!fs.existsSync(destinationDir)) {
    await mkdir(destinationDir, { recursive: true });
  }

  const files = await readdir(sourceDir);

  for (const file of files) {
    const filePath = path.join(sourceDir, file);
    const stats = await stat(filePath);

    if (stats.isDirectory()) {
      await copyReadmeFilesRecursive(filePath, path.join(destinationDir, file));
    } else if (file === "README.md") {
      await copyFile(filePath, path.join(destinationDir, file));
    }
  }
}

const sourceDirectory = "./src/stories/components/";
const destinationDirectory = "./storybook-static/src/stories/components/";

copyReadmeFiles(sourceDirectory, destinationDirectory);
