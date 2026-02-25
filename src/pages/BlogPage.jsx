import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPage = () => {
   const { scrollYProgress } = useScroll();
   const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);

   return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 bg-brand-light dark:bg-brand-navy overflow-hidden relative"
    >
      {/* Dynamic Backgrounds */}
      <motion.div style={{ scale }} className="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[120px] pointer-events-none z-0" />
      <motion.div style={{ scale }} className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9, y: -30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 text-brand-gold px-4 py-2 rounded-full w-max text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
            <BookOpen className="w-5 h-5" />
            <span>Education Centre</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-4">
             Mortgage <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-gold">Insights</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Get up to speed on your options, latest news, and expert tips from Canada's leading mortgage professionals.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
               <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
                  whileHover={{ y: -10 }}
                  className="group h-full"
               >
                  <Link to={`/blog/${post.slug}`} className="block h-full">
                     <div className="glass-card flex flex-col h-full rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-white/10 bg-white/60 dark:bg-brand-charcoal/60 backdrop-blur-xl hover:shadow-2xl transition-all duration-300">
                        
                        {/* Image Container */}
                        <div className="h-64 overflow-hidden relative">
                           <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                           <motion.img 
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover"
                           />
                           <div className="absolute top-4 left-4 z-20 bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                              {post.category}
                           </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                           <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-brand-gold" /> {post.date}</span>
                              <span className="flex items-center gap-1"><User className="w-4 h-4 text-brand-red" /> {post.author}</span>
                           </div>
                           
                           <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-red dark:group-hover:text-brand-gold transition-colors line-clamp-2">
                              {post.title}
                           </h3>
                           
                           <p className="text-slate-600 dark:text-slate-400 font-medium mb-8 line-clamp-3">
                              {post.excerpt}
                           </p>

                           <div className="mt-auto flex items-center text-brand-red dark:text-brand-gold font-bold uppercase tracking-wider text-sm transition-all">
                              Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                           </div>
                        </div>
                     </div>
                  </Link>
               </motion.div>
            ))}
         </div>
      </div>
    </motion.div>
   )
}

export default BlogPage;
