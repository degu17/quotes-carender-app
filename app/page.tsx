import DailyQuote from "../components/DailyQuote";
import { getFigureForDay } from "../data/figures";

export default function Home() {
  const currentDate = new Date();
  const figure = getFigureForDay(currentDate);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMzAgMzBtLTI4IDBhMjggMjggMCAxIDAgNTYgMCAyOCAyOCAwIDEgMCAtNTYgMCIgc3Ryb2tlPSIjZjBmMGYwIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIj48L3BhdGg+Cjwvc3ZnPg==')] font-[family-name:var(--font-geist-sans)]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30"></div>
      
      {/* Header with subtle decoration */}
      <header className="w-full pt-10 md:pt-16 pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-100 tracking-tight relative">
          <span className="relative inline-block">
            偉人の日めくりカレンダー
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
          </span>
        </h1>
      </header>
      
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 py-8">
        <DailyQuote initialFigure={figure} currentDate={currentDate} />
      </main>
      
      {/* Footer with subtle styling */}
      <footer className="w-full py-6 mt-auto border-t border-gray-100 dark:border-gray-800">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 font-light tracking-wide">
          日めくりカレンダーアプリ
        </div>
      </footer>
    </div>
  );
}
