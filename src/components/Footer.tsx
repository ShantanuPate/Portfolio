export function Footer() {
  return (
    <footer className="py-12 border-t border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-stone-500">
          © {new Date().getFullYear()} Shantanu Pate. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="https://www.linkedin.com/in/shantanu-pate" target="_blank" rel="noopener noreferrer" className="hover:text-orange-700 transition-colors">LinkedIn</a>
          <a href="mailto:shantanupate0@gmail.com" className="hover:text-orange-700 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
