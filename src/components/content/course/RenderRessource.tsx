import SyntaxHighlighter from "react-syntax-highlighter";
import * as React from "react";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "sonner";
import { MdOutlineCopyAll } from "react-icons/md";
import { Resource } from "@/types/index";

export default function RenderResource({ resource }: { resource: Resource }) {
  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipBoard = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(resource.url);
    toast.success("Copied to clipboard");
    setTimeout(() => setIsCopied(false), 2000);
  };

  let content = null;

  switch (resource.type) {
    case "video":
      content = <video src={resource.url} controls className="w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]" />;
      break;
    case "image":
      content = <img src={resource.url} alt={resource.name} className="w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]" />;
      break;
    case "pdf":
      content = <embed src={resource.url} type="application/pdf" className="w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]" />;
      break;
    case "code":
      content = (
        <div className="relative flex flex-row w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]">
          <SyntaxHighlighter language="javascript" style={dracula} className="w-full min-w-[15vw] max-w-[50vw] min-h-[50vh]">
            {resource.url}
          </SyntaxHighlighter>

          <span
            className={`text-sm flex p-2 justify-center items-center absolute bottom-0 right-0 cursor-pointer ${isCopied ? "text-green-500" : "text-red-500"}`}
            onClick={copyToClipBoard}
          >
            <MdOutlineCopyAll size={20} className="" /> {isCopied ? "Copied" : "Copy"}
          </span>
        </div>
      );
      break;
    default:
      break;
  }

  return content;
}
