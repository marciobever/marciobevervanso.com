
import React, { useState } from 'react';
import { WebStoryViewer } from './WebStoryViewer';
import { VIRAL_STORIES } from './story-data';
import { ViewState } from '../../types';
import { Play, Zap } from 'lucide-react';

interface Props {
  onNavigate: (view: ViewState) => void;
}

export const StoriesGallery: React.FC<Props> = ({ onNavigate }) => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number | null>(null);

  const handleOpenStory = (idx: number) => {
    setActiveStoryIdx(idx);
  };

  const handleNextStory = () => {
    if (activeStoryIdx !== null && activeStoryIdx < VIRAL_STORIES.length - 1) {
      setActiveStoryIdx(activeStoryIdx + 1);
    } else {
      setActiveStoryIdx(null);
    }
  };

  const handlePrevStory = () => {
    if (activeStoryIdx !== null && activeStoryIdx > 0) {
      setActiveStoryIdx(activeStoryIdx - 1);
    } else {
      setActiveStoryIdx(null);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center gap-2 mb-6">
         <div className="bg-pink-100 p-2 rounded-lg text-pink-600">
            <Zap size={20} fill="currentColor" />
         </div>
         <h2 className="text-2xl font-bold text-slate-900">Web Stories em Destaque</h2>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-4 min-w-max">
          {VIRAL_STORIES.map((story, idx) => (
            <div 
              key={story.id} 
              className="relative w-[160px] h-[280px] md:w-[200px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              onClick={() => handleOpenStory(idx)}
            >
              {/* Background Image */}
              <img 
                src={story.thumbnail} 
                alt={story.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90"></div>

              {/* Play Icon (Top Right) */}
              <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-1.5 rounded-full border border-white/30 text-white">
                 <Play size={14} fill="currentColor" />
              </div>

              {/* Border Ring (Instagram Style) */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-pink-500 transition-colors pointer-events-none"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-4">
                 <div className="w-8 h-8 rounded-full border-2 border-white mb-2 overflow-hidden bg-brand-blue">
                    <img src="https://cdn-icons-png.flaticon.com/512/9426/9426233.png" className="w-full h-full p-1 bg-white" alt="Logo" />
                 </div>
                 <p className="text-white font-bold text-sm leading-tight drop-shadow-md">
                    {story.title}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeStoryIdx !== null && (
        <WebStoryViewer 
          story={VIRAL_STORIES[activeStoryIdx]} 
          onClose={() => setActiveStoryIdx(null)}
          onNavigate={onNavigate}
          onNextStory={handleNextStory}
          onPrevStory={handlePrevStory}
        />
      )}
    </div>
  );
};
