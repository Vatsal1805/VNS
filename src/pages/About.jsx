import { useState } from 'react';
import { CONTACT_INFO, facadeImg, corridorImg, diningImg, volleyballImg } from '../config';
import { CORE_VALUES, ENV_TABS, TARGET_COLLEGES, VNS_JOURNEY } from '../data/aboutData';
import AboutHero from '../components/about/AboutHero';
import OurMission from '../components/about/OurMission';
import VnsJourney from '../components/about/VnsJourney';
import CoreValues from '../components/about/CoreValues';
import AboutLeadership from '../components/about/AboutLeadership';
import HostelEnvironment from '../components/about/HostelEnvironment';
import WhoWeServe from '../components/about/WhoWeServe';
import AboutCTA from '../components/about/AboutCTA';

export default function About() {
  const [activeEnvTab, setActiveEnvTab] = useState(0);

  // Animation Variants for Staggered Grids
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

  const envTabs = ENV_TABS(corridorImg, diningImg, volleyballImg);

  return (
    <div className="overflow-x-hidden bg-vnsBg text-vnsText-primary font-body">
      
      {/* 1. HERO SECTION */}
      <AboutHero facadeImg={facadeImg} />

      {/* 2. OUR MISSION */}
      <OurMission textEntranceVariants={textEntranceVariants} />

      {/* 3. OUR JOURNEY TIMELINE */}
      <VnsJourney journey={VNS_JOURNEY} />

      {/* 3. CORE VALUES */}
      <CoreValues 
        coreValues={CORE_VALUES}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        textEntranceVariants={textEntranceVariants}
      />

      {/* 3. MANAGEMENT & CARE */}
      <AboutLeadership 
        leftSlideVariants={leftSlideVariants}
        rightSlideVariants={rightSlideVariants}
        textEntranceVariants={textEntranceVariants}
      />

      {/* 4. OUR HOSTEL ENVIRONMENT */}
      <HostelEnvironment 
        envTabs={envTabs}
        activeEnvTab={activeEnvTab}
        setActiveEnvTab={setActiveEnvTab}
        leftSlideVariants={leftSlideVariants}
        rightSlideVariants={rightSlideVariants}
      />

      {/* 5. WHO WE SERVE */}
      <WhoWeServe 
        targetColleges={TARGET_COLLEGES}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        textEntranceVariants={textEntranceVariants}
      />

      {/* 6. CALL TO ACTION */}
      <AboutCTA contactInfo={CONTACT_INFO} />

    </div>
  );
}
