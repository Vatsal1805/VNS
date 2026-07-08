import { 
  CONTACT_INFO, GOOGLE_RATING, ROOMS_DATA, AMENITIES_LIST, GOOGLE_REVIEWS,
  facadeImg, hostelHeroImg, lobbyImg, receptionImg, gardenArea1, gardenArea2, gardenImg,
  sportsImg, holiImg, thaliImg, diningImg, corridorImg
} from '../config';
import { 
  BENTO_COMMUTE, CELEBRATION_TAGS, VALUE_INCLUSIONS, FOOD_TIMINGS, 
  WHAT_WE_OFFER, COMMUNITY_HIGHLIGHTS, COMMUTE_LANDMARKS 
} from '../data/homeData';

import HeroSection from '../components/home/HeroSection';
import TrustStrip from '../components/home/TrustStrip';
import AboutSnippet from '../components/home/AboutSnippet';
import RoomsPreview from '../components/home/RoomsPreview';
import BentoSection from '../components/home/BentoSection';
import FacilitiesGrid from '../components/home/FacilitiesGrid';
import LifeAtVns from '../components/home/LifeAtVns';
import FoodMessTimings from '../components/home/FoodMessTimings';
import CommuteTestimonials from '../components/home/CommuteTestimonials';
import WhatsAppWizard from '../components/home/WhatsAppWizard';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

const leftSlideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 14 }
  }
};

const rightSlideVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 14 }
  }
};

const slideVariants = {
  enter: (direction) => ({
    x: direction === 'left' ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 180, damping: 20 }
  },
  exit: (direction) => ({
    x: direction === 'left' ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.15 }
  })
};

export default function Home() {
  const handleWhatsAppInquiry = (roomType) => {
    const message = encodeURIComponent(`Hi VNS Hostel, I'm interested in booking a ${roomType} AC Room. Can you share availability details?`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="overflow-x-hidden bg-vnsBg text-vnsText-primary">
      <HeroSection 
        facadeImg={facadeImg} 
        handleWhatsAppInquiry={handleWhatsAppInquiry} 
      />
      <TrustStrip 
        googleRating={GOOGLE_RATING} 
      />
      <AboutSnippet 
        facadeImg={facadeImg} 
        lobbyImg={receptionImg} 
        sportsImg={gardenArea1} 
        leftSlideVariants={leftSlideVariants} 
        rightSlideVariants={rightSlideVariants} 
      />
      <RoomsPreview 
        roomsData={ROOMS_DATA} 
        handleWhatsAppInquiry={handleWhatsAppInquiry} 
        containerVariants={containerVariants} 
        itemVariants={itemVariants} 
      />
        <FacilitiesGrid 
          amenitiesList={AMENITIES_LIST} 
        />
      <BentoSection 
        bentoCommute={BENTO_COMMUTE} 
        celebrationTags={CELEBRATION_TAGS} 
        valueInclusions={VALUE_INCLUSIONS} 
        />
      <LifeAtVns 
        lobbyImg={gardenImg} 
        sportsImg={sportsImg} 
        holiImg={holiImg} 
        diningImg={diningImg} 
        communityHighlights={COMMUNITY_HIGHLIGHTS} 
      />
      <FoodMessTimings 
        thaliImg={thaliImg} 
        foodTimings={FOOD_TIMINGS} 
        whatWeOffer={WHAT_WE_OFFER} 
      />
      <CommuteTestimonials 
        contactInfo={CONTACT_INFO} 
        googleRating={GOOGLE_RATING} 
        googleReviews={GOOGLE_REVIEWS} 
        commuteLandmarks={COMMUTE_LANDMARKS} 
        leftSlideVariants={leftSlideVariants} 
        rightSlideVariants={rightSlideVariants} 
      />
      <WhatsAppWizard 
        contactInfo={CONTACT_INFO} 
        slideVariants={slideVariants} 
      />
    </div>
  );
}
