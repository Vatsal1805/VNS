import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../config';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vnsBg border-t border-vnsBorder pt-16 pb-8 text-vnsText-secondary font-body">
      <div className="max-width-container mx-auto px-5 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Branding & Intro */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-vnsBorder flex items-center justify-center overflow-hidden bg-white shadow-sm">
              <img src={logoImg} alt="VNS Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-vnsText-primary tracking-wide leading-tight">VNS</span>
              <span className="font-body text-xs text-vnsText-secondary tracking-widest uppercase leading-none font-bold">Boys Hostel</span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Premium student accommodation providing safe, comfortable, and growth-focused environments for boys studying in Vadodara since 2013.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-vnsText-primary font-semibold text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <Link to="/" className="hover:text-vnsAccent transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-vnsAccent transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-vnsAccent transition-colors">Rooms & Pricing</Link>
            </li>
            <li>
              <a href="/#life-at-vns" className="hover:text-vnsAccent transition-colors">Life At VNS</a>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-vnsAccent transition-colors">Photo Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Facilities Overview */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-vnsText-primary font-semibold text-sm tracking-wider uppercase">Facilities</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>AC & Non-AC Rooms</li>
            <li>3 Hygienic Veg Meals / Day</li>
            <li>24/7 CCTV & Secure Gate Access</li>
            <li>100 Mbps WiFi & Mess Facilities</li>
            <li>Daily Room Housekeeping</li>
            <li>RO Water Coolers Each Floor</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-heading text-vnsText-primary font-semibold text-sm tracking-wider uppercase">Contact Info</h4>
          <ul className="flex flex-col gap-3.5 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-vnsAccent shrink-0 mt-0.5" />
              <span className="leading-relaxed text-xs">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-vnsAccent" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-vnsAccent transition-colors">
                {CONTACT_INFO.phoneFormatted}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-vnsAccent" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-vnsAccent transition-colors text-xs">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="mt-1">
              <a
                href={CONTACT_INFO.googleMapsLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-vnsAccent hover:underline"
              >
                Get Directions on Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Gold Gradient Divider */}
      <div className="max-width-container mx-auto px-5 lg:px-12 my-10">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-vnsAccent to-transparent opacity-20"></div>
      </div>

      {/* Copyright Bar */}
      <div className="max-width-container mx-auto px-5 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {currentYear} VNS Hostel. All rights reserved.</p>
        <p>
          Designed by <span className="text-vnsText-primary font-medium">Converge Digitals</span>
        </p>
      </div>
    </footer>
  );
}
