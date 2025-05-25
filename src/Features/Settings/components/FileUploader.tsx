import React, { useRef, type ChangeEvent } from "react";
import { FileUp } from "lucide-react";

interface FileUploaderProps {
  onUpload: (fileUrl: string, fileName: string) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleTextClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      onUpload(fileURL, file.name);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center border border-blue-600 bg-[#0b0f23] rounded-2xl p-6 text-center w-full mx-auto">
      <div className="bg-white p-3 rounded-full mb-4">
        <FileUp className="text-blue-600 w-6 h-6" />
      </div>

      <p className="text-sm text-gray-400">
        <span
          onClick={handleTextClick}
          className="text-blue-500 cursor-pointer font-medium hover:underline"
        >
          Click here
        </span>{" "}
        to upload your file or drag.
      </p>

      <p className="mt-2 text-xs text-gray-500">
        Supported Format: SVG, JPG, PNG (10mb each)
      </p>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".jpg,.png,.svg"
      />
    </div>
  );
};

export default FileUploader;
