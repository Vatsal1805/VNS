import { CONTACT_INFO, ROOMS_DATA, facadeImg, lobbyImg, holiImg, diningImg } from '../config';
import { TIMELINE_STEPS } from '../data/roomsData';
import RoomsHero from '../components/rooms/RoomsHero';
import RoomsGrid from '../components/rooms/RoomsGrid';
import StayInclusions from '../components/rooms/StayInclusions';
import RoomsMatrix from '../components/rooms/RoomsMatrix';
import ViewGalleryCTA from '../components/rooms/ViewGalleryCTA';
import StayConfirmTimeline from '../components/rooms/StayConfirmTimeline';
import StayCTA from '../components/rooms/StayCTA';

export default function Rooms() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 }
    }
  };

  const textEntranceVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 14, duration: 0.6 }
    }
  };

  const leftSlideVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 14 }
    }
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 14 }
    }
  };

  const handleWhatsAppInquiry = (roomName) => {
    const message = encodeURIComponent(`Hi VNS Hostel, I want to inquire about a seat in the ${roomName}.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-vnsBg text-vnsText-primary min-h-screen">
      
      {/* 1. HERO HEADER */}
      <RoomsHero facadeImg={facadeImg} />

      {/* 2. ROOM OPTIONS */}
      <RoomsGrid 
        roomsData={ROOMS_DATA}
        handleWhatsAppInquiry={handleWhatsAppInquiry}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* 3. INCLUDED WITH EVERY STAY */}
      <StayInclusions 
        leftSlideVariants={leftSlideVariants}
        rightSlideVariants={rightSlideVariants}
      />

      {/* 4. COMPARE ROOM OPTIONS */}
      <RoomsMatrix textEntranceVariants={textEntranceVariants} />

      {/* 5. VIEW GALLERY CTA */}
      <ViewGalleryCTA 
        lobbyImg={lobbyImg}
        holiImg={holiImg}
        diningImg={diningImg}
        textEntranceVariants={textEntranceVariants}
      />

      {/* 6. HOW TO CONFIRM YOUR STAY */}
      <StayConfirmTimeline 
        timelineSteps={TIMELINE_STEPS}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* 7. FINAL CALL TO ACTION */}
      <StayCTA 
        contactInfo={CONTACT_INFO}
        handleWhatsAppInquiry={handleWhatsAppInquiry}
        textEntranceVariants={textEntranceVariants}
      />

    </div>
  );
}
