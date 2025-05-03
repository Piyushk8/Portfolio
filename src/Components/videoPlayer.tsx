import { useEffect } from "react";

export default function VideoPopup({ videoSrc, onClose }: {
  videoSrc: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="relative w-full max-w-3xl mx-auto px-4">
        <button
          onClick={onClose}
          className="absolute -top-12  backdrop-blur-2xl right-5 bg-gray-800 p-1 rounded-full h-10 w-10 border-[1px] border-primary text-white text-2xl z-10 hover:scale-110 transition-transform"
        >
          ✕
        </button>

        <video
          controls
          autoPlay
          className="w-full rounded-lg border-[1px] border-primary shadow-primary shadow-md"
          src={videoSrc}
        />
      </div>
    </div>
  );
}
