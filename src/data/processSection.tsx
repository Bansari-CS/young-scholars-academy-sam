import callicon from '../assets/images/callicon.png';
import assessment from '../assets/images/assessment.png';
import plan from '../assets/images/plan.png';
import learning from '../assets/images/learning.png';

export const processSectionData = {
  badge: "SIMPLE PROCESS",
  title: "Getting Started Is Easy",
  description:
    "From your first consultation to your child's breakthrough moments — our process is simple, supportive, and built around results.",

  steps: [
    {
      step: "01",
      title: "Book a Call",
      desc: "Select your child's level, goals, and learning preferences to begin a personalized journey in seconds.",
      footer: "Free · 30 minutes",
      color: "blue",
      icon: callicon, // ✅ IMAGE
    },
    {
      step: "02",
      title: "Assessment",
      desc: "We'll carefully evaluate your child's current academic level, learning style, and areas that need focused attention.",
      footer: "Comprehensive · Personalized",
      color: "purple",
      icon: assessment, 
    },
    {
      step: "03",
      title: "Personalized Plan",
      desc: "We create a custom curriculum tailored to your child's unique goals, pace, and the specific outcomes you want to achieve.",
      footer: "Custom · Goal-driven",
      color: "yellow",
      icon:plan,
    },
    {
      step: "04",
      title: "Start Learning",
      desc: "Begin the journey with expert tutors and engaging, interactive content designed to inspire and accelerate your child's growth.",
      footer: "Expert tutors · Engaging content",
      color: "green",
      icon: learning,
    },
  ],
};