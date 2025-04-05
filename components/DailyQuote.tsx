import { useState, useEffect } from 'react';
import { Figure } from '../types/Figure';
import { getFigureForDay } from '../data/figures';

export default function DailyQuote() {
  const [figure, setFigure] = useState<Figure | null>(null);
  const currentDate = new Date();
  
  useEffect(() => {
    const todaysFigure = getFigureForDay(currentDate);
    setFigure(todaysFigure);
  }, [currentDate]);
  
  if (!figure) {
    return <div>Loading...</div>;
  }
  
  const birthDate = new Date(figure.birthDate).toLocaleDateString('ja-JP');
  const deathDate = figure.deathDate ? new Date(figure.deathDate).toLocaleDateString('ja-JP') : null;
  const lifespan = deathDate ? `${birthDate} - ${deathDate}` : birthDate;
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-1">{figure.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">{lifespan}</p>
      </div>
      
      <div className="bg-black/[.05] dark:bg-white/[.06] p-6 rounded-md">
        <blockquote className="text-lg font-medium italic mb-4">『{figure.quote}』</blockquote>
        <p className="text-sm">{figure.explanation}</p>
      </div>
      
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        {currentDate.toLocaleDateString('ja-JP')}
      </div>
    </div>
  );
}
