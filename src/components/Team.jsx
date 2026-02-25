import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
  {
    name: 'Eleanor Vance',
    title: 'Principal Broker',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    delay: 0.1
  },
  {
    name: 'Marcus Sterling',
    title: 'Senior Mortgage Specialist',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    delay: 0.3
  },
  {
    name: 'Sophie Laurent',
    title: 'Private Lending Specialist',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    delay: 0.5
  },
  {
    name: 'James Harrison',
    title: 'Underwriting Lead',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    delay: 0.7
  }
];

const Team = () => {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="team" className="py-32 bg-brand-light dark:bg-brand-navy overflow-hidden relative">
      <motion.div style={{ y: yBg }} className="absolute top-0 right-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[100px] pointer-events-none z-0" />
      <motion.div style={{ y: yBg }} className="absolute bottom-0 left-[-10%] w-[30rem] h-[30rem] rounded-full bg-brand-gold/5 dark:bg-brand-gold/10 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: 30 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red dark:text-brand-gold uppercase mb-4 text-center">
            Our Experts
          </h2>
          <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-20 leading-tight text-center">
            The Faces Behind <br className="hidden md:block"/> Your Approval.
          </h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: member.delay, duration: 0.8, type: "spring", bounce: 0.5 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center"
            >
              {/* Floating Avatar Outer Ring */}
              <motion.div
                animate={{ y: [-15, 10, -15], rotate: [0, 5, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: 'easeInOut', 
                  delay: member.delay 
                }}
                className="relative rounded-full p-2 bg-gradient-to-tr from-brand-gold to-brand-red mb-8 shadow-2xl shadow-brand-red/20 group-hover:shadow-brand-gold/40 transition-shadow duration-500"
              >
                {/* The actual image mask */}
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-brand-navy relative group-hover:border-transparent transition-colors duration-500">
                  <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 relative z-0"
                  />
                </div>
              </motion.div>
              
              <motion.h4 
                className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2"
              >
                {member.name}
              </motion.h4>
              <motion.p 
                className="text-brand-red dark:text-brand-gold font-bold uppercase tracking-[0.1em] text-sm"
              >
                {member.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
