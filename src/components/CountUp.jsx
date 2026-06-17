import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({ value, duration = 1.2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseFloat(value);
    if (isNaN(end)) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // ms
    const totalSteps = Math.ceil(totalMiliseconds / incrementTime);
    const stepIncrement = (end - start) / totalSteps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        const next = start + stepIncrement * currentStep;
        setCount(end % 1 === 0 ? Math.floor(next) : parseFloat(next.toFixed(1)));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
