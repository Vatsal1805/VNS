import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, User, MapPin, Mail } from 'lucide-react';

export default function WhatsAppWizard({ 
  contactInfo, 
  slideVariants 
}) {
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardDirection, setWizardDirection] = useState('right');
  const [studentName, setStudentName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [roomInterest, setRoomInterest] = useState('Triple Sharing AC');
  const [wizardError, setWizardError] = useState('');

  return (
    <section className="py-20 bg-gradient-to-br from-vnsSurface to-vnsBg border-t border-vnsBorder relative overflow-hidden">
      {/* Pattern Mask */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none"></div>

      <div className="max-width-container mx-auto px-5 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: 2-Step WhatsApp Inquiry Wizard */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-vnsText-primary border border-vnsDark/10 rounded-vns p-6 md:p-8 flex flex-col justify-between flex-grow shadow-xl text-vnsDark select-none">
              
              {/* Wizard Title & Step Indicator */}
              <div className="flex justify-between items-center border-b border-vnsDark/10 pb-4 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-vnsDark">WhatsApp Seat Booking</h3>
                  <p className="font-body text-[10px] text-vnsAccent font-bold uppercase tracking-wider mt-0.5">Quick 2-Step Availability Wizard</p>
                </div>
                <span className="font-heading font-extrabold text-sm text-vnsAccent bg-vnsDark/5 px-3 py-1 rounded-full border border-vnsAccent/20 animate-pulse">
                  Step {wizardStep}/2
                </span>
              </div>

              {/* Form Content Slider */}
              <div className="relative overflow-hidden min-h-[200px] flex flex-col justify-center">
                <AnimatePresence mode="wait" custom={wizardDirection}>
                  <motion.div
                    key={wizardStep}
                    custom={wizardDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full flex flex-col gap-5"
                  >
                    {wizardStep === 1 ? (
                      <div className="flex flex-col gap-4">
                        <p className="font-body text-xs text-vnsDark/80 leading-relaxed mb-1">
                          Enter your details to verify availability.
                        </p>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-heading font-bold text-[10px] uppercase tracking-wider text-vnsDark/70">Student Name</label>
                          <input 
                            type="text"
                            placeholder="e.g. Aman Patel"
                            value={studentName}
                            onChange={(e) => {
                              setStudentName(e.target.value);
                              if (wizardError) setWizardError('');
                            }}
                            className="w-full bg-vnsLight/40 border border-vnsDark/20 rounded-vns px-4 py-3 text-xs font-body focus:outline-none focus:border-vnsAccent focus:ring-1 focus:ring-vnsAccent transition-all text-vnsDark placeholder-vnsDark/40"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-heading font-bold text-[10px] uppercase tracking-wider text-vnsDark/70">College / University</label>
                          <input 
                            type="text"
                            placeholder="e.g. Parul University"
                            value={collegeName}
                            onChange={(e) => {
                              setCollegeName(e.target.value);
                              if (wizardError) setWizardError('');
                            }}
                            className="w-full bg-vnsLight/40 border border-vnsDark/20 rounded-vns px-4 py-3 text-xs font-body focus:outline-none focus:border-vnsAccent focus:ring-1 focus:ring-vnsAccent transition-all text-vnsDark placeholder-vnsDark/40"
                          />
                        </div>
                        {wizardError && (
                          <p className="text-[10px] font-heading font-semibold text-rose-700 uppercase tracking-wide animate-pulse">
                            ⚠️ {wizardError}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <p className="font-body text-xs text-vnsDark/80 leading-relaxed mb-1">
                          Choose your sharing preference to get rent details.
                        </p>
                        <div className="flex flex-col gap-2">
                          <label className="font-heading font-bold text-[10px] uppercase tracking-wider text-vnsDark/70">Select Sharing Interest</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1">
                            {["Triple Sharing AC", "Double Sharing AC", "Single Occupancy AC"].map((opt) => {
                              const isSelected = roomInterest === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setRoomInterest(opt)}
                                  className={`py-3 px-2 text-[10px] font-heading font-bold uppercase tracking-wider rounded-vns border transition-all ${
                                    isSelected
                                      ? 'bg-vnsDark text-[#F5EDD8] border-vnsDark shadow-md scale-[1.02]'
                                      : 'bg-vnsLight/30 border-vnsDark/15 hover:bg-vnsLight/60 text-vnsDark'
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Wizard Navigation */}
              <div className="flex gap-4 border-t border-vnsDark/10 pt-5 mt-6">
                {wizardStep === 2 && (
                  <button
                    type="button"
                    onClick={() => {
                      setWizardDirection('right');
                      setWizardStep(1);
                    }}
                    className="flex-1 py-3 px-4 border border-vnsDark/20 rounded-vns font-heading text-xs font-semibold uppercase tracking-wider hover:bg-vnsLight/40 active:scale-95 transition-all text-vnsDark"
                  >
                    Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    if (wizardStep === 1) {
                      if (!studentName.trim() || !collegeName.trim()) {
                        setWizardError('Please fill out both fields to proceed');
                        return;
                      }
                      setWizardDirection('left');
                      setWizardStep(2);
                    } else {
                      // Submit to WhatsApp
                      const text = `Hi VNS, I'm ${studentName} from ${collegeName}. I'm interested in booking a ${roomInterest} AC Room. Please share availability details.`;
                      window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
                    }
                  }}
                  className={`flex-grow py-3 px-6 rounded-vns font-heading text-xs font-bold uppercase tracking-widest text-[#F5EDD8] active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 ${
                    wizardStep === 1
                      ? 'bg-vnsDark hover:bg-[#4E2813]'
                      : 'bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg'
                  }`}
                >
                  {wizardStep === 1 ? (
                    <span>Next Step</span>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4 fill-current text-vnsBg" />
                      <span>Submit via WhatsApp</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-vnsSurface border border-vnsBorder rounded-vns p-6 md:p-8 flex flex-col justify-between flex-grow shadow-xl text-vnsText-primary">
              <div className="flex flex-col gap-5">
                <div className="border-b border-vnsBorder pb-4">
                  <h3 className="font-heading font-bold text-xl uppercase tracking-wider text-vnsText-primary">Direct Contact</h3>
                  <p className="font-body text-[10px] text-vnsAccent font-semibold uppercase tracking-wider mt-0.5">Warden Uncle Office</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-vnsAccent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsAccent">Resident Warden</h4>
                      <p className="font-body text-xs text-vnsText-secondary mt-0.5">Mr. Patel (Warden Uncle)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-vnsAccent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsAccent">Hostel Location</h4>
                      <p className="font-body text-[11px] text-vnsText-secondary leading-relaxed mt-0.5">
                        Alwa Road, Dattapura, Waghodia Road, Vadodara, Gujarat 391760
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-vns bg-vnsBg border border-vnsBorder flex items-center justify-center text-vnsAccent shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-vnsAccent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-vnsAccent">Email Address</h4>
                      <p className="font-body text-xs text-vnsText-secondary mt-0.5">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-8 border-t border-vnsBorder pt-6">
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-vnsAccent to-[#D4A853] hover:from-[#C9933A] hover:to-[#B6842F] text-vnsBg py-3.5 rounded-vns font-heading text-xs font-semibold uppercase tracking-wider active:scale-95 transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-vnsBg fill-current" />
                  <span>Call Warden Uncle</span>
                </a>
                <p className="font-body text-[9px] text-vnsText-secondary text-center uppercase tracking-widest mt-1">
                  ⏰ Office Hours: 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
