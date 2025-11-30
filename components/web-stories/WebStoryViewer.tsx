
import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronRight, Share2, Heart } from 'lucide-react';
import { WebStory, StorySlide } from './story-data';
import { ViewState } from '../../types';

interface Props {
  story: WebStory;
  onClose: () => void;
  onNavigate: (view: ViewState) => void;
  onNextStory?: () => void;
  onPrevStory?: () => void;
}

export const WebStoryViewer: React.FC<Props> = ({ story, onClose, onNavigate, onNextStory, onPrevStory }) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  
  const currentSlide = story.slides[currentSlideIdx];
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTime = useRef<number>(Date.now());
  const elapsedOnPause = useRef<number>(0);

  // Timer Logic
  useEffect(() => {
    if (isPaused) return;

    const duration = (currentSlide.duration || 5) * 1000;
    const start = Date.now() - elapsedOnPause.current;

    progressInterval.current = setInterval(() => {
      const now = Date.now();
      const rawProgress = ((now - start) / duration) * 100;
      
      if (rawProgress >= 100) {
        handleNextSlide();
      } else {
        setProgress(rawProgress);
      }
    }, 16); // ~60fps

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [currentSlideIdx, isPaused, story]);

  const handleNextSlide = () => {
    elapsedOnPause.current = 0;
    setProgress(0);
    if (currentSlideIdx < story.slides.length - 1) {
      setCurrentSlideIdx(prev => prev + 1);
    } else {
      // End of story
      if (onNextStory) {
        onNextStory();
      } else {
        onClose();
      }
    }
  };

  const handlePrevSlide = () => {
    elapsedOnPause.current = 0;
    setProgress(0);
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx(prev => prev - 1);
    } else {
      if (onPrevStory) {
        onPrevStory();
      }
    }
  };

  const handleTouchStart = () => {
    setIsPaused(true);
    if (progressInterval.current) clearInterval(progressInterval.current);
    const duration = (currentSlide.duration || 5) * 1000;
    elapsedOnPause.current = (progress / 100) * duration;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `Veja esse story sobre ${story.title}: ${window.location.origin}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCTA = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSlide.ctaLink) {
      onClose();
      onNavigate(currentSlide.ctaLink);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Mobile-first Container */}
      <div 
        className="relative w-full h-full md:w-[375px] md:h-[667px] bg-slate-900 md:rounded-3xl overflow-hidden shadow-2xl"
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${currentSlide.mediaUrl})` }}
        >
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
        </div>

        {/* Progress Bars */}
        <div className="absolute top-4 left-2 right-2 flex gap-1 z-20">
          {story.slides.map((_, idx) => (
            <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-white transition-all duration-0 ease-linear ${idx === currentSlideIdx ? '' : 'transition-none'}`}
                style={{ 
                  width: idx < currentSlideIdx ? '100%' : idx === currentSlideIdx ? `${progress}%` : '0%' 
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-8 left-4 right-4 flex justify-between items-center z-20">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full border-2 border-brand-blue p-0.5">
                <img src="https://cdn-icons-png.flaticon.com/512/9426/9426233.png" className="w-full h-full rounded-full bg-white" alt="Logo" />
             </div>
             <span className="text-white font-bold text-sm drop-shadow-md">Guia Social</span>
             <span className="text-white/70 text-xs">• 2h</span>
          </div>
          <div className="flex gap-4">
             <button onClick={onClose} className="text-white drop-shadow-md p-1 hover:bg-white/20 rounded-full">
                <X size={24} />
             </button>
          </div>
        </div>

        {/* Navigation Tap Areas */}
        <div className="absolute inset-0 flex z-10">
           <div className="w-1/3 h-full" onClick={handlePrevSlide}></div>
           <div className="w-2/3 h-full" onClick={handleNextSlide}></div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-12 z-20 flex flex-col items-center text-center">
           
           <h2 className="text-3xl font-display font-bold text-white mb-2 uppercase tracking-wide leading-tight drop-shadow-lg animate-slide-up">
              {currentSlide.title}
           </h2>
           
           <p className="text-white/90 text-lg mb-8 font-medium leading-relaxed drop-shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {currentSlide.text}
           </p>

           {currentSlide.ctaText && (
              <button 
                onClick={handleCTA}
                className="bg-white text-black font-bold px-8 py-3 rounded-full flex items-center gap-2 animate-bounce-in shadow-xl hover:scale-105 transition-transform"
              >
                 {currentSlide.ctaText} <ChevronRight size={18} className="animate-pulse" />
              </button>
           )}

           <div className="absolute bottom-4 right-4 flex flex-col gap-4">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                className="text-white hover:scale-110 transition-transform"
              >
                 <Heart size={28} fill={isLiked ? "#ef4444" : "transparent"} className={isLiked ? "text-red-500" : ""} />
              </button>
              <button 
                onClick={handleShare}
                className="text-white hover:scale-110 transition-transform"
              >
                 <Share2 size={28} />
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};
