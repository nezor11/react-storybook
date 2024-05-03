import fs from "fs";
import path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const unlink = promisify(fs.unlink);

async function deleteAllReadmeFiles(directory) {
  try {
    const files = await readdir(directory);
    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await stat(filePath);

      if (stats.isDirectory()) {
        await deleteAllReadmeFiles(filePath);
      } else if (file === "README.md") {
        await unlink(filePath);
        console.log(`Archivo eliminado: ${filePath}`);
      }
    }
    console.log("Eliminación de archivos README.md completada.");
  } catch (error) {
    console.error("Error al eliminar archivos:", error);
  }
}

const sourceDirectory = "./src/stories/components/";

deleteAllReadmeFiles(sourceDirectory);
