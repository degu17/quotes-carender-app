"use client";

import { useState } from 'react';
import { Figure } from '../types/Figure';

interface DailyQuoteProps {
  initialFigure: Figure;
  currentDate: Date;
}

export default function DailyQuote({ initialFigure, currentDate }: DailyQuoteProps) {
  const [figure] = useState<Figure>(initialFigure);
  
  return <QuoteDisplay figure={figure} currentDate={currentDate} />;
}

function QuoteDisplay({ figure, currentDate }: { figure: Figure; currentDate: Date }) {
  const birthDate = new Date(figure.birthDate).toLocaleDateString('ja-JP');
  const deathDate = figure.deathDate ? new Date(figure.deathDate).toLocaleDateString('ja-JP') : null;
  const lifespan = deathDate ? `${birthDate} - ${deathDate}` : birthDate;
  
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto p-8 sm:p-10 rounded-xl border border-black/[.08] dark:border-white/[.12] shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-900 relative">
      {/* Decorative elements */}
      <div className="absolute -left-3 top-10 w-2 sm:w-6 h-24 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-r-md opacity-80"></div>
      <div className="absolute -right-1 -top-1 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-bl-3xl -z-10 opacity-70"></div>
      
      {/* Header with figure name and dates */}
      <div className="text-center relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl text-indigo-100 dark:text-indigo-900/30 opacity-80 font-serif select-none">"</div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-gray-100 tracking-tight">{figure.name}</h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-light tracking-wide">{lifespan}</p>
      </div>
      
      {/* Quote card with subtle paper texture */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-800/80 p-6 sm:p-8 rounded-lg shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmOGY4ZjgiPjwvcmVjdD4KPC9zdmc+')] opacity-30"></div>
        <div className="relative">
          <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium italic mb-6 leading-relaxed text-gray-800 dark:text-gray-200">
            『{figure.quote}』
          </blockquote>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">{figure.explanation}</p>
        </div>
        
        {/* Decorative quote mark */}
        <div className="absolute bottom-4 right-4 text-6xl text-gray-200 dark:text-gray-700 opacity-30 font-serif transform rotate-180 select-none">"</div>
      </div>
      
      {/* Date display with subtle styling */}
      <div className="text-center">
        <div className="inline-block px-5 py-2 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-800/80 rounded-full text-sm md:text-base text-gray-600 dark:text-gray-400 shadow-sm border border-gray-100 dark:border-gray-700">
          {currentDate.toLocaleDateString('ja-JP')}
        </div>
      </div>
    </div>
  );
}
