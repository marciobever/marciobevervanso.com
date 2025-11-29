// Utility for Google Analytics 4 Interactions

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const Analytics = {
  // Track Page Views (SPA support)
  trackPageView: (path: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: path,
      });
      console.log(`[GA4] PageView: ${path}`);
    }
  },

  // Track Specific Events
  trackEvent: (eventName: string, params?: Record<string, any>) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, params);
      console.log(`[GA4] Event: ${eventName}`, params);
    }
  },

  // Specialized Quiz Tracking
  trackQuizStart: (quizId: string, quizName: string) => {
    Analytics.trackEvent('quiz_start', {
      quiz_id: quizId,
      quiz_name: quizName
    });
  },

  trackQuizCompletion: (quizId: string, quizName: string, result: 'eligible' | 'not_eligible') => {
    Analytics.trackEvent('quiz_complete', {
      quiz_id: quizId,
      quiz_name: quizName,
      result: result
    });
  }
};