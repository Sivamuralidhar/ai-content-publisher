import React from 'react';
// import { Download, FileText, FileImage, Table } from 'lucide-react';
import { FileText, Table } from 'lucide-react';
import { Post } from '../../types';
import { generatePDF } from '../../utils/exporters/pdfExporter';
import { generateDOCX } from '../../utils/exporters/docxExporter';
import { generateCSV } from '../../utils/exporters/csvExporter';

interface DownloadOptionsProps {
  post?: Post;
  posts?: Post[];
  onClose: () => void;
}

export function DownloadOptions({ post, posts, onClose }: DownloadOptionsProps) {
  const handleDownload = async (format: 'pdf' | 'docx' | 'csv') => {
    const data = post || posts;
    if (!data) return;

    try {
      switch (format) {
        case 'pdf':
          await generatePDF(data);
          break;
        case 'docx':
          await generateDOCX(data);
          break;
        case 'csv':
          await generateCSV(data);
          break;
      }
      onClose();
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
      <button
        onClick={() => handleDownload('pdf')}
        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
      >
        <FileText size={16} />
        Export as PDF
      </button>
      <button
        onClick={() => handleDownload('docx')}
        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
      >
        <FileText size={16} />
        Export as DOCX
      </button>
      <button
        onClick={() => handleDownload('csv')}
        className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
      >
        <Table size={16} />
        Export as CSV
      </button>
    </div>
  );
}