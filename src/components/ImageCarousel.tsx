import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProjectImage } from '../types/project';

interface ImageCarouselProps {
  images: ProjectImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % images.length;
    });
  };

  const previousImage = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + images.length) % images.length;
    });
  };

  const closeModal = () => setSelectedIndex(null);

  return (
    <div className="relative w-full">
      {/* Thumbnails Grid */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={image.url}
            onClick={() => setSelectedIndex(index)}
            className="relative w-full pt-[56.25%] overflow-hidden rounded-md bg-gray-900 
                     hover:ring-2 hover:ring-blue-500 transition-all"
          >
            <img
              src={image.url}
              alt={image.title}
              className="absolute inset-0 w-full h-full object-cover hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors" />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 z-10"
          >
            <X size={24} />
          </button>

          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight size={32} />
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center px-16 py-8">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title}
                className="max-w-full max-h-full w-auto h-auto object-contain"
              />
            </div>
            
            <div className="mt-4 text-center max-w-2xl">
              <h4 className="text-lg font-semibold text-white">
                {images[selectedIndex].title}
              </h4>
              <p className="text-gray-400 mt-1">
                {images[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
