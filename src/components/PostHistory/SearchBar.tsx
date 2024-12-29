import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onSearch: (value: string) => void;
}

export function SearchBar({ value, onSearch }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-12 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      <Search 
        size={18} 
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      {value && (
        <button
          onClick={() => onSearch('')}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}