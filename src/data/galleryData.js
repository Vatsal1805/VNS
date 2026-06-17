import { 
  doubleNonAcImg, doubleAcImg, facadeImg, lobbyImg, 
  sportsImg, holiImg, thaliImg, kitchenImg, diningImg 
} from '../config';

export const GALLERY_PHOTOS = [
  {
    id: 1,
    category: "rooms",
    title: "Premium Double Sharing Room (Non-AC)",
    desc: "Clean room setup with individual study desks and dedicated lockers.",
    url: doubleNonAcImg
  },
  {
    id: 2,
    category: "mess",
    title: "Hygienic Dining Area",
    desc: "Clean kitchen and steel tables serving fresh meals daily.",
    url: diningImg
  },
  {
    id: 3,
    category: "festivals",
    title: "Holi Utsav Celebration",
    desc: "Colorful, vibrant celebrations organized by students together on campus.",
    url: holiImg
  },
  {
    id: 4,
    category: "campus",
    title: "Hostel Lobby & Reception",
    desc: "Welcoming reception foyer featuring elevator, staircase, and prayer shrine.",
    url: lobbyImg
  },
  {
    id: 5,
    category: "campus",
    title: "VNS Hostel Exterior Facade",
    desc: "Modern multi-story purpose-built structure with optimal ventilation.",
    url: facadeImg
  },
  {
    id: 6,
    category: "festivals",
    title: "Sports Tournaments",
    desc: "Students enjoying sports like cricket matches nearby.",
    url: sportsImg
  },
  {
    id: 7,
    category: "rooms",
    title: "Double Sharing AC Room Layout",
    desc: "Premium AC room with comfortable beds, independent study workspace, and balcony access.",
    url: doubleAcImg
  },
  {
    id: 8,
    category: "mess",
    title: "Commercial Kitchen Facility",
    desc: "State-of-the-art clean kitchen showing hygienic steel setups.",
    url: kitchenImg
  },
  {
    id: 9,
    category: "mess",
    title: "Hygienic Vegetarian Thali",
    desc: "Hot, homestyle nutritious vegetarian meals served daily.",
    url: thaliImg
  }
];

export const FILTER_TABS = [
  { id: 'all', name: 'All' },
  { id: 'rooms', name: 'Rooms & Study' },
  { id: 'mess', name: 'Food & Mess' },
  { id: 'festivals', name: 'Festivals & Events' },
  { id: 'campus', name: 'Campus & Security' },
];
