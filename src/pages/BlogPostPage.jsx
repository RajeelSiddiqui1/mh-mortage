import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPostPage = () => {
   const { slug } = useParams();
   const [post, setPost] = useState(null);
   const { scrollYProgress } = useScroll();
   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

   useEffect(() => {
      // Find the post that matches the slug
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost);
      // Scroll to top when loading new post
      window.scrollTo(0, 0);
   }, [slug]);

   if (!post) {
      return (
         <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-brand-light dark:bg-brand-navy">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Post Not Found</h2>
         </div>
      );
   }

   return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-20 bg-brand-light dark:bg-brand-navy overflow-hidden relative"
    >
      {/* Dynamic Backgrounds */}
      <motion.div style={{ y: yBg }} className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[120px] pointer-events-none z-0" />
      <motion.div style={{ y: yBg }} className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-gold/5 dark:bg-brand-gold/10 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         
         <Link to="/blog" className="inline-flex items-center text-brand-red dark:text-brand-gold font-bold hover:underline mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
         </Link>

         {/* Hero Section of the Article */}
         <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
           className="mb-12"
         >
            <div className="flex gap-4 mb-6">
               <span className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                  {post.category}
               </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 leading-[1.2]">
               {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest border-b border-slate-200 dark:border-white/10 pb-8">
               <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-brand-gold" /> {post.date}</span>
               <span className="flex items-center gap-2"><User className="w-5 h-5 text-brand-red" /> {post.author}</span>
            </div>
         </motion.div>

         {/* Feature Image */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="w-full h-80 md:h-[30rem] rounded-[2rem] overflow-hidden shadow-2xl mb-16 border border-slate-200 dark:border-white/10 relative"
         >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent" />
         </motion.div>

         {/* Article Content */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass-card bg-white/80 dark:bg-brand-charcoal/80 border border-slate-200/50 dark:border-white/10 p-8 md:p-14 rounded-[3rem] shadow-xl backdrop-blur-xl prose prose-lg prose-slate dark:prose-invert max-w-none"
         >
             {/* Using dangerouslySetInnerHTML for the mock markdown/html content. 
                 In a real app with markdown, use a library like react-markdown. 
                 Here we just parse line breaks to <p> tags or simple splits for demo purposes. */}
             <div className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed whitespace-pre-wrap space-y-6">
                 {post.content.split('\n\n').map((paragraph, index) => {
                     if (paragraph.trim().startsWith('###')) {
                         return <h3 key={index} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">{paragraph.replace('###', '').trim()}</h3>;
                     }
                     if (paragraph.trim().startsWith('*')) {
                         return <li key={index} className="list-disc ml-6">{paragraph.replace('*', '').trim()}</li>;
                     }
                     return <p key={index} className="mb-6">{paragraph.trim()}</p>;
                 })}
             </div>

             <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-sm">
                   <Share2 className="w-5 h-5 text-brand-gold" /> Share Article
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#1877F2] hover:text-white transition-all cursor-pointer shadow-sm">
                      <Facebook className="w-5 h-5" />
                   </div>
                   <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#1DA1F2] hover:text-white transition-all cursor-pointer shadow-sm">
                      <Twitter className="w-5 h-5" />
                   </div>
                   <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#0A66C2] hover:text-white transition-all cursor-pointer shadow-sm">
                      <Linkedin className="w-5 h-5" />
                   </div>
                </div>
             </div>
         </motion.div>

         {/* Call to Action Inside Post */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 glass-card p-10 md:p-12 rounded-[2rem] bg-gradient-to-br from-brand-red to-brand-gold text-white shadow-2xl relative overflow-hidden text-center"
         >
            <div className="absolute inset-0 bg-black/20" />
            <h3 className="text-3xl font-black mb-4 relative z-10 drop-shadow-md">Ready to secure the best rate?</h3>
            <p className="font-semibold mb-8 max-w-xl mx-auto relative z-10 text-white/90">
               Our experts are standing by to guide you through the process, just like we outlined in this article.
            </p>
            <Link to="/contact">
               <button className="relative z-10 px-8 py-4 rounded-full bg-slate-900 text-white font-bold shadow-xl hover:shadow-2xl hover:bg-black transition-all transform hover:scale-105 uppercase tracking-widest">
                  Talk to an Expert Today
               </button>
            </Link>
         </motion.div>

      </div>
    </motion.div>
   )
}

export default BlogPostPage;
