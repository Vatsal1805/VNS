import { useState } from 'react';
import { facadeImg } from '../config';
import { GALLERY_PHOTOS, FILTER_TABS } from '../data/galleryData';
import GalleryHero from '../components/gallery/GalleryHero';
import FilterTabs from '../components/gallery/FilterTabs';
import PhotoGrid from '../components/gallery/PhotoGrid';
import Lightbox from '../components/gallery/Lightbox';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = activeTab === 'all' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(photo => photo.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? filteredPhotos.length - 1 : prevIndex - 1
    );
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => 
      prevIndex === filteredPhotos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-vnsLight text-vnsDark min-h-screen">
      
      {/* 1. HERO HEADER */}
      <GalleryHero facadeImg={facadeImg} />

      {/* 2. FILTER TABS */}
      <FilterTabs 
        filterTabs={FILTER_TABS} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* 3. PHOTO GRID */}
      <PhotoGrid 
        filteredPhotos={filteredPhotos} 
        filterTabs={FILTER_TABS} 
        openLightbox={openLightbox} 
      />

      {/* 4. LIGHTBOX OVERLAY */}
      <Lightbox 
        lightboxIndex={lightboxIndex}
        filteredPhotos={filteredPhotos}
        filterTabs={FILTER_TABS}
        closeLightbox={closeLightbox}
        prevPhoto={prevPhoto}
        nextPhoto={nextPhoto}
      />

    </div>
  );
}
