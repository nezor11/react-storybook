/**
 * Code is a component that fetches and displays the content of a README.md file from a specified directory.
 *
 * Props:
 * - directoryPath: A string representing the path to the directory where the README.md file is located.
 *
 * Example usage:
 * <Code directoryPath="/path/to/directory/" />
 *
 * The component uses the useEffect hook to fetch the content of the README.md file when the component mounts or when the directoryPath prop changes.
 * If the file is found, its content is displayed using the SyntaxHighlighter component from the react-syntax-highlighter library.
 * If the file is not found, an error message is displayed.
 */

// biome-ignore lint/style/useImportType: <explanation>
import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeProps {
  directoryPath: string; // Ruta del directorio donde se encuentra el archivo de la historia
}

export const Code: React.FC<CodeProps> = ({ directoryPath }) => {
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Construir la ruta completa al archivo README.md utilizando la ruta del directorio
    const readmePath = `${directoryPath}README.md`;

    console.log(" readmePath ---------------->    ", readmePath);

    // Llamar a la función fetch con la ruta proporcionada para obtener el contenido del archivo README.md
    fetch(readmePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "File README.md not found in the specified directory"
          );
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => setError(error.message));
  }, [directoryPath]); // Dependencia: se volverá a ejecutar cuando cambie la ruta del directorio

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-[6.5px]">
      <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
        {markdownContent}
      </SyntaxHighlighter>
    </div>
  );
};
