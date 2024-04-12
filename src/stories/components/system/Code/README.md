import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    const currentPath = import.meta.url;
    const currentDirectory = currentPath.substring(
      0,
      currentPath.lastIndexOf("/") + 1
    );

    fetch(`${currentDirectory}README.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("Error fetching README.md:", error));
  }, []);

  return (
    <SyntaxHighlighter language="tsx" style={vscDarkPlus}>
      {markdownContent}
    </SyntaxHighlighter>
  );
};
