import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Bed,
  BookOpen,
  User,
  Lock,
  Wifi,
  Snowflake,
  Check
} from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon';

const getFeatureIcon = (featureName) => {
  const name = featureName.toLowerCase();
  if (name.includes('wifi') || name.includes('internet')) {
    return <Wifi className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
  }
  if (name.includes('desk') || name.includes('study') || name.includes('chair') || name.includes('workplace') || name.includes('furniture')) {
    return <BookOpen className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
  }
  if (name.includes('bathroom') || name.includes('washroom') || name.includes('toilet') || name.includes('bath')) {
    return <User className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
  }
  if (name.includes('ac') || name.includes('air conditioning') || name.includes('cooling')) {
    return <Snowflake className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
  }
  if (name.includes('locker') || name.includes('wardrobe') || name.includes('storage') || name.includes('cabinet')) {
    return <Lock className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
  }
  if (name.includes('mattress') || name.includes('bed')) {
    return <Bed className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
  }
  return <Check className="w-3.5 h-3.5 text-vnsAccent shrink-0" />;
};

export default function RoomsPreview({ 
  roomsData, 
  handleWhatsAppInquiry, 
  containerVariants, 
  itemVariants 
}) {
  return (
    <section className="py-20 bg-vnsLight text-vnsDark">
      <div className="max-width-container mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-vnsDark/70">Accommodation Options</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-vnsDark">
              Rooms That Feel Like Home
            </h2>
          </div>
          <Link 
            to="/rooms"
            className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-vnsDark hover:underline uppercase tracking-wider"
          >
            View Room Specs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Staggered Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {roomsData.map((room) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="flex flex-col bg-vnsSurface border border-vnsBorder rounded-vns overflow-hidden group hover:border-vnsAccent/40 transition-all duration-300 shadow-lg cursor-default"
            >
              {/* Photo container */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow gap-4 text-vnsText-primary">
                <h3 className="font-heading text-xl font-bold text-vnsText-primary group-hover:text-vnsAccent transition-colors">
                  {room.name}
                </h3>
                
                <p className="font-body text-xs text-vnsText-secondary leading-relaxed flex-grow">
                  {room.description}
                </p>

                {/* Bullet features list */}
                <ul className="flex flex-col gap-2 my-2">
                  {room.features.slice(0, 4).map((feat, idx) => (
                    <li key={idx} className="flex gap-2 items-center text-xs text-vnsText-secondary">
                      {getFeatureIcon(feat)}
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Inquiry CTA */}
                <button 
                  onClick={() => handleWhatsAppInquiry(room.name)}
                  className="w-full flex items-center justify-center gap-2 bg-vnsBg hover:bg-vnsCardHover text-vnsText-primary py-3 rounded-vns border border-vnsBorder hover:border-vnsAccent transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4 text-vnsAccent fill-current" />
                  <span className="font-heading text-xs font-semibold uppercase tracking-wider">Inquire Now</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
