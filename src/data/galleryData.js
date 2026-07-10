import { 
  doubleNonAcImg, doubleAcImg, roomsToiletImg, rooms3Img,
  diningImg, messEntryImg, thaliImg, foodProcessImg, kitchenImg,
  holiImg, sportsImg, cricketImg, volleyballImg, ganpatiImg,
  facadeImg, hostelFront10, hostelHeroImg, droneViewImg, hostelFront4,
  lobbyImg, receptionImg, corridorImg, hostelCorridorImg, studyRoomImg,
  gardenArea1, gardenArea2, gardenArea3, garden10, gardenTopView, gardenTopView10, gardenImg,
  securityOfficeImg, securityUncleImg, parkingImg, parking2Img,tripleSharingRoomImg,doubleSharingRoomImg,
  hostelCleaningImg
} from '../config';

export const GALLERY_PHOTOS = [
  // ─── Rooms & Study ─────────────────────────────────────────────────────────
  {
    id: 1,
    category: "rooms",
    title: "Premium Sharing Room",
    desc: "Well-furnished room with comfortable beds, study desks, and ample storage.",
    url: doubleNonAcImg
  },
  {
    id: 2,
    category: "rooms",
    title: "Double Sharing Room",
    desc: "Spacious double sharing layout with individual workspaces and balcony access.",
    url: doubleSharingRoomImg
  },
  {
    id: 3,
    category: "rooms",
    title: "Attached Washroom",
    desc: "Clean, hygienic attached washrooms maintained daily for every room.",
    url: roomsToiletImg
  },
  {
    id: 4,
    category: "rooms",
    title: "Cosy Room Interior",
    desc: "Natural light-filled room setup providing a comfortable living environment.",
    url: tripleSharingRoomImg
  },
  {
    id: 5,
    category: "rooms",
    title: "Study Room",
    desc: "Dedicated quiet study room for focused academic preparation.",
    url: studyRoomImg
  },

  // ─── Food & Mess ───────────────────────────────────────────────────────────
  {
    id: 6,
    category: "mess",
    title: "Dining Hall",
    desc: "Spacious dining hall serving hot homestyle vegetarian meals three times daily.",
    url: diningImg
  },
  {
    id: 7,
    category: "mess",
    title: "Mess Entry",
    desc: "Clean and welcoming mess entry point with proper hygiene standards.",
    url: messEntryImg
  },
  {
    id: 8,
    category: "mess",
    title: "Hygienic Vegetarian Thali",
    desc: "Nutritious, balanced vegetarian thali prepared fresh every day.",
    url: thaliImg
  },
  {
    id: 9,
    category: "mess",
    title: "Food Preparation",
    desc: "Hygienic food preparation process overseen by professional kitchen staff.",
    url: foodProcessImg
  },
  {
    id: 10,
    category: "mess",
    title: "Roti Making Process",
    desc: "Fresh rotis made daily in our commercial kitchen for all students.",
    url: kitchenImg
  },

  // ─── Festivals & Sports ────────────────────────────────────────────────────
  {
    id: 35,
    category: "festivals",
    title: "Ganpati Celebration",
    desc: "Grand Ganesh Utsav celebration with students and staff on the hostel campus.",
    url: ganpatiImg
  },
  {
    id: 11,
    category: "festivals",
    title: "Holi Utsav Celebration",
    desc: "Vibrant Holi celebrations bringing the entire hostel community together.",
    url: holiImg
  },
  {
    id: 12,
    category: "festivals",
    title: "Cricket Match",
    desc: "Students enjoying friendly cricket matches in the campus grounds.",
    url: sportsImg
  },
  {
    id: 13,
    category: "festivals",
    title: "Cricket Tournament",
    desc: "Competitive cricket tournament fostering team spirit and sportsmanship.",
    url: cricketImg
  },
  {
    id: 14,
    category: "festivals",
    title: "Volleyball Game",
    desc: "Students playing volleyball — a regular recreational activity at VNS.",
    url: volleyballImg
  },

  // ─── Campus & Garden ───────────────────────────────────────────────────────
  {
    id: 15,
    category: "rooms",
    title: "Daily Housekeeping",
    desc: "Hygienic daily cleaning and housekeeping to maintain clean corridors and rooms.",
    url: hostelCleaningImg
  },
  {
    id: 16,
    category: "campus",
    title: "Hostel Exterior",
    desc: "VNS Boys Hostel — a purpose-built student accommodation facility.",
    url: hostelFront10
  },
  {
    id: 17,
    category: "campus",
    title: "Hostel Hero View",
    desc: "The iconic front view of VNS Boys Hostel on Waghodia Road.",
    url: hostelHeroImg
  },
  {
    id: 18,
    category: "campus",
    title: "Aerial Drone View",
    desc: "Bird's eye view showcasing the full campus layout and surrounding area.",
    url: droneViewImg
  },
  {
    id: 19,
    category: "campus",
    title: "Gate Entrance",
    desc: "Secure entrance gate with biometric access control system.",
    url: hostelFront4
  },
  {
    id: 20,
    category: "campus",
    title: "Garden Area",
    desc: "Lush green garden area — perfect for relaxation and outdoor study.",
    url: gardenArea1
  },
  {
    id: 21,
    category: "campus",
    title: "Garden Seating",
    desc: "Shaded seating in the garden for students to unwind after classes.",
    url: gardenArea2
  },
  {
    id: 22,
    category: "campus",
    title: "Garden View",
    desc: "Well-maintained garden adding a natural ambiance to the hostel environment.",
    url: gardenArea3
  },
  {
    id: 23,
    category: "campus",
    title: "Open Garden",
    desc: "Spacious open garden area where students spend leisure time.",
    url: garden10
  },
  {
    id: 24,
    category: "campus",
    title: "Garden Top View",
    desc: "Overhead view of the beautifully landscaped garden.",
    url: gardenTopView
  },
  {
    id: 25,
    category: "campus",
    title: "Garden Panorama",
    desc: "Wide panoramic view of the campus green spaces.",
    url: gardenTopView10
  },
  {
    id: 26,
    category: "campus",
    title: "Campus Garden",
    desc: "VNS campus garden — a serene retreat within the hostel premises.",
    url: gardenImg
  },
  {
    id: 27,
    category: "campus",
    title: "Hostel Corridor",
    desc: "Wide, well-lit corridors connecting all room blocks.",
    url: corridorImg
  },
  {
    id: 28,
    category: "campus",
    title: "Block Corridor",
    desc: "Clean corridor area maintained with regular housekeeping.",
    url: hostelCorridorImg
  },
  {
    id: 29,
    category: "campus",
    title: "Parking Area",
    desc: "Dedicated two-wheeler parking area for students with own vehicles.",
    url: parkingImg
  },
  {
    id: 30,
    category: "campus",
    title: "Expanded Parking",
    desc: "Additional secure parking space for students and visitors.",
    url: parking2Img
  },

  // ─── Reception & Security ──────────────────────────────────────────────────
  {
    id: 31,
    category: "campus",
    title: "Office with Students",
    desc: "Manager's office — always available to assist students with any needs.",
    url: lobbyImg
  },
  {
    id: 32,
    category: "campus",
    title: "Reception & Manager Office",
    desc: "Professional reception and administrative office for student support.",
    url: receptionImg
  },
  {
    id: 33,
    category: "campus",
    title: "Security Office",
    desc: "24/7 security post with CCTV monitoring ensuring complete safety.",
    url: securityOfficeImg
  },
  {
    id: 34,
    category: "campus",
    title: "Security Staff",
    desc: "Dedicated security personnel on round-the-clock duty.",
    url: securityUncleImg
  },
];

export const FILTER_TABS = [
  { id: 'all', name: 'All' },
  { id: 'rooms', name: 'Rooms & Study' },
  { id: 'mess', name: 'Food & Mess' },
  { id: 'festivals', name: 'Festivals & Sports' },
  { id: 'campus', name: 'Campus & Garden' },
];
