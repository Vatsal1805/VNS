// Configuration file for VNS Boys Hostel content and settings

// ─── Hero & Facade ──────────────────────────────────────────────────────────
import facadeImg from './assets/Vraj nidhi samanvay/hostel_hero_3.webp';
import hostelFront10 from './assets/Vraj nidhi samanvay/hostel front 1.0.webp';
import hostelHeroImg from './assets/Vraj nidhi samanvay/hostel_hero_3.webp';
import droneViewImg from './assets/Vraj nidhi samanvay/hostel view from drone height.webp';
import hostelFront4 from './assets/Vraj nidhi samanvay/hostel front 4.webp';

// ─── Rooms ───────────────────────────────────────────────────────────────────
import doubleNonAcImg from './assets/Vraj nidhi samanvay/Rooms.webp';
import doubleAcImg from './assets/Vraj nidhi samanvay/rooms_2.webp';
import roomsToiletImg from './assets/Vraj nidhi samanvay/rooms_toilet.webp';
import rooms3Img from './assets/Vraj nidhi samanvay/rooms 3.webp';
import tripleSharingRoomImg from './assets/Vraj nidhi samanvay/triple sharing room.webp';
import doubleSharingRoomImg from './assets/Vraj nidhi samanvay/double sharing room.webp';

// ─── Mess & Food ─────────────────────────────────────────────────────────────
import diningImg from './assets/Vraj nidhi samanvay/Mess_dinning  hall.webp';
import messEntryImg from './assets/Vraj nidhi samanvay/mess entry.webp';
import thaliImg from './assets/Vraj nidhi samanvay/food.webp';
import foodProcessImg from './assets/Vraj nidhi samanvay/food process.webp';
import kitchenImg from './assets/Vraj nidhi samanvay/roti(food) making process.webp';

// ─── Garden & Campus ─────────────────────────────────────────────────────────
import gardenArea1 from './assets/Vraj nidhi samanvay/Garden area_1.webp';
import gardenArea2 from './assets/Vraj nidhi samanvay/Garden area_2.webp';
import gardenArea3 from './assets/Vraj nidhi samanvay/garden area_3.webp';
import garden10 from './assets/Vraj nidhi samanvay/garden 1.0.webp';
import gardenTopView from './assets/Vraj nidhi samanvay/garden top view.webp';
import gardenTopView10 from './assets/Vraj nidhi samanvay/garden top view1.0.webp';
import gardenImg from './assets/Vraj nidhi samanvay/garden.webp';

// ─── Lobby & Reception ───────────────────────────────────────────────────────
import lobbyImg from './assets/Vraj nidhi samanvay/Office_with students.webp';
import receptionImg from './assets/Vraj nidhi samanvay/reception office or manager offcie.webp';

// ─── Corridor & Study ────────────────────────────────────────────────────────
import corridorImg from './assets/Vraj nidhi samanvay/coridor area 1.0.webp';
import hostelCorridorImg from './assets/Vraj nidhi samanvay/hostel coridor area.webp';
import studyRoomImg from './assets/Vraj nidhi samanvay/study room.webp';
import hostelCleaningImg from './assets/Vraj nidhi samanvay/hostel_cleaning.webp';

// ─── Security ────────────────────────────────────────────────────────────────
import securityOfficeImg from './assets/Vraj nidhi samanvay/security office.webp';
import securityUncleImg from './assets/Vraj nidhi samanvay/security uncle.webp';

// ─── Sports & Events ─────────────────────────────────────────────────────────
import sportsImg from './assets/Vraj nidhi samanvay/playing cicrket 2.webp';
import cricketImg from './assets/Vraj nidhi samanvay/playing circket.webp';
import volleyballImg from './assets/Vraj nidhi samanvay/studnets playing vollyball.webp';
import holiImg from './assets/Vraj nidhi samanvay/holicelebration.webp';
import ganpatiImg from './assets/Vraj nidhi samanvay/ganpati_celebration.webp';

// ─── Parking ─────────────────────────────────────────────────────────────────
import parkingImg from './assets/Vraj nidhi samanvay/parking.webp';
import parking2Img from './assets/Vraj nidhi samanvay/parking part 2.webp';

export {
  facadeImg, hostelFront10, hostelHeroImg, droneViewImg, hostelFront4,
  doubleNonAcImg, doubleAcImg, roomsToiletImg, rooms3Img, tripleSharingRoomImg, doubleSharingRoomImg,
  diningImg, messEntryImg, thaliImg, foodProcessImg, kitchenImg,
  gardenArea1, gardenArea2, gardenArea3, garden10, gardenTopView, gardenTopView10, gardenImg,
  lobbyImg, receptionImg,
  corridorImg, hostelCorridorImg, studyRoomImg, hostelCleaningImg,
  securityOfficeImg, securityUncleImg,
  sportsImg, cricketImg, volleyballImg, holiImg, ganpatiImg,
  parkingImg, parking2Img
};


export const CONTACT_INFO = {
  phone: "+919409117158",
  phoneFormatted: "+91 94091 17158",
  phoneLabel: "Pratik Patel",
  whatsapp: "+918487045600",
  whatsappFormatted: "+91 84870 45600",
  email: "vnshostel15@gmail.com",
  address: "Alwa Road, opp. Vadpadraka Hotel & Resort, between Sumandeep and Parul University, Dattapura, Waghodia Rd, Vadodara, Gujarat 391760",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=VNS+Boys+Hostel+Waghodia+Road+Vadodara+Gujarat+391760",
};

export const GOOGLE_RATING = {
  score: "4.4",
  reviewsCount: "231",
};

export const ROOMS_DATA = [
  {
    id: "triple",
    name: "Triple Sharing AC Room",
    price: "6,500",
    nonAcPrice: "5,500",
    features: [
      "Comfort Mattress",
      "Private Study Desk",
      "High-speed WiFi Access",
      "Attached Bathroom",
      "Dedicated Steel Locker",
      
      "Individual AC Control"
    ],
    image: tripleSharingRoomImg,
    description: "Shared living at its best. Spacious room layout with individual workspaces and private lockable cabinets for all three residents."
  },
  {
    id: "double",
    name: "Double Sharing AC Room",
    price: "8,500",
    nonAcPrice: "7,200",
    features: [
      "Comfort Mattress",
      "Private Study Desk",
       "High-speed WiFi Access",
      "Attached Bathroom",
      "Dedicated Steel Locker",
     
      "Individual AC Control"
    ],
    image: doubleSharingRoomImg,
    description: "The ideal balance of social life and privacy. Dual-sharing space offering comfortable breathing room and high-quality utility access."
  },
  {
    id: "single",
    name: "Single Occupancy AC Room",
    price: "12,000",
    nonAcPrice: "10,000",
    features: [
      "Comfort Mattress",
      "Executive Study Desk",
      "Individual AC Control",
       "High-speed WiFi Access",
      "Attached Bathroom",
      "Double Steel Wardrobe",
      "High-speed WiFi Access",
      
    ],
    image: doubleNonAcImg,
    description: "Perfect for students seeking absolute quiet and intense study focus. Enjoy your personal room with full independent amenities."
  }
];

export const AMENITIES_LIST = [
  // Row 1 (5 items)
  { id: 1, name: "High-Speed WiFi", icon: "Wifi", desc: "100+ Mbps internet covering the building" },
  { id: 2, name: "AC Rooms", icon: "Snowflake", desc: "Independent split AC units in AC rooms" },
  { id: 3, name: "RO Water + Cooler", icon: "Droplets", desc: "Pure RO plants and water coolers on each floor" },
  { id: 4, name: "24/7 Hot Water", icon: "Flame", desc: "Constant hot water supply in all bathrooms" },
  { id: 5, name: "Mess Facilities", icon: "Utensils", desc: "Hygienic vegetarian meals served daily in clean dining area" },
  // Row 2 (2 items + Center Card)
  { id: 6, name: "Laundry Service", icon: "Shirt", desc: "In-house laundry service with regular washing cycles" },
  { id: 7, name: "Housekeeping", icon: "Sparkles", desc: "Daily professional cleaning of rooms and common areas" },
  // Row 3 (5 items)
  { id: 8, name: "Study Area", icon: "BookOpen", desc: "Quiet study desks and lounge area for intensive focus" },
  { id: 9, name: "Parking", icon: "Car", desc: "Ample space for secure student two-wheeler parking" },
  { id: 10, name: "First Aid", icon: "HeartPulse", desc: "Emergency kit and close tie-up with hospital" },
  { id: 11, name: "CCTV Security", icon: "ShieldAlert", desc: "Corridors and exit gates monitored 24/7" },
  { id: 12, name: "Warden / Security", icon: "Shield", desc: "Warden residing on-premise for safety & discipline" }
];

export const FESTIVAL_EVENTS = [
  {
    id: 1,
    title: "Holi Celebration",
    desc: "A colorful, vibrant celebration where VNS students celebrate the festival of colors like a family on campus.",
    image: holiImg
  },
  {
    id: 2,
    title: "VNS Premier League (Cricket)",
    desc: "Hostel sports tournament organized in nearby grounds, encouraging health, teamwork, and active sportsmanship.",
    image: sportsImg
  },
  {
    id: 3,
    title: "Diwali Lights Celebration",
    desc: "Lighting up the entire building with warm diyas, floral decorations, fireworks, and a grand community feast.",
    image: lobbyImg
  },
  {
    id: 4,
    title: "New Year's Eve (31st)",
    desc: "Year-end DJ night on the terrace, countdown celebration, cake cutting, and special party menus to make student life memorable.",
    image: diningImg
  }
];

export const COMMUTE_DATA = {
  landmarks: [
    {
      name: "Parul University",
      distance: "2 Km",
      walkTime: "20 Mins",
      scooterTime: "4 Mins",
    },
    {
      name: "Sumandeep Vidyapeeth",
      distance: "2 Km",
      walkTime: "22 Mins",
      scooterTime: "4 Mins",
    },
    {
      name: "Dhiraj Hospital",
      distance: "2 Km",
      walkTime: "21 Mins",
      scooterTime: "4 Mins",
    },
    {
      name: "Bus Stop",
      distance: "300 Mtr",
      walkTime: "3 Mins",
      scooterTime: "1 Min",
    },
    {
      name: "Restaurant & Resort",
      distance: "100 Mtr",
      walkTime: "1 Min",
      scooterTime: "0.5 Min",
    }
  ]
};

export const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "Aman Verma",
    rating: 5,
    college: "Parul University",
    review: "Best boys hostel near PU. The food quality is extremely good compared to other PG mess in Waghodia Road. Rooms are cleaned daily and warden Patel uncle is very cooperative.",
  },
  {
    id: 2,
    name: "Piyush Patel",
    rating: 5,
    college: "Sumandeep Vidyapeeth",
    review: "VNS feels like home. Biometric gates and round-the-clock CCTV make it very safe. Centralized RO water filters on each floor are a huge plus. Highly recommended!",
  },
  {
    id: 3,
    name: "Devendra Rathore",
    rating: 5,
    college: "Parul University (B.Tech)",
    review: "Lived here for 3 years. The festival celebrations (Ganesh Utsav, Navratri) are amazing. The housekeeping is very regular and keeps the rooms clean. Worth every single rupee.",
  },
  {
    id: 4,
    name: "Saurabh Mishra",
    rating: 5,
    college: "Dhiraj Hospital Intern",
    review: "Very peaceful environment for studies. Fast WiFi helps for online classes and exam prep. Proximity to Sumandeep campus is very convenient.",
  },
  {
    id: 5,
    name: "Harshil Shah",
    rating: 5,
    college: "Parul University",
    review: "Clean attached washrooms, regular housekeeping, and split AC. The transparent electricity sub-metering is great because you only pay for what your room uses.",
  },
  {
    id: 6,
    name: "Rajesh Gondaliya",
    rating: 5,
    college: "Sumandeep Vidyapeeth",
    review: "Clean kitchen and hygienic dining area. Meals are always served hot. The building is purpose-built with high ceilings which keeps rooms cool in summer.",
  }
];

export const FAQS = [
  {
    q: "Is there a curfew time for students?",
    a: "Yes, the main entry gates lock at 10:00 PM for student safety. Late entry is allowed only in case of university classes or exams, with prior written authorization or confirmation from parents."
  },
  {
    q: "How is the food menu managed?",
    a: "We serve 3 fresh, hygienic vegetarian meals daily (Breakfast, Lunch, and Dinner). The menu is balanced between traditional Gujarati, Kathiyawadi, Rajasthani, and Punjabi cuisines, prepared by professional cooks in our in-house clean kitchen."
  },
  {
    q: "How are room electricity bills calculated?",
    a: "Each room is equipped with an independent digital sub-meter. Room rent excludes room electricity. At the end of each month, the units consumed in your specific room are multiplied by the electricity board rate, ensuring you pay strictly for what you use."
  },
  {
    q: "What is the process for laundry?",
    a: "We have in-house washing machines and designated drying areas. Housekeeping staff handles laundry cycles on scheduled days of the week, which is fully included in the monthly rent."
  },
  {
    q: "What medical facilities are available in case of emergency?",
    a: "First aid kits are maintained on-campus. VNS is located less than 2 minutes from Dhiraj Hospital (Sumandeep Vidyapeeth). We keep a standby emergency vehicle on-premise 24/7 to transport any sick student to the hospital immediately."
  },
  {
    q: "Is there a security deposit required for booking?",
    a: "Yes, we require a nominal refundable security deposit at the time of admission, which is fully returned when checking out at the end of the academic session, subject to room inspection."
  },
  {
    q: "Are parents allowed to visit and stay?",
    a: "Parents are welcome to visit during daytime visiting hours. For overnight stays, special permission must be requested from the management in advance, and separate guest accommodation or nearby resort arrangements can be facilitated."
  }
];


