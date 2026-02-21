"use client";

import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "../styles/work_cv/preview.css";

// Use the local worker or a CDN. In Next.js, this is the most stable way:
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PreviewProps {
  image: string;
}

export default function Preview({ image }: PreviewProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Return a placeholder during SSR
  if (!isClient) {
    return <div className="preview-card">Loading...</div>;
  }

  return (
    <div className="preview-card">
      <div className="preview-inner">
        <Document file={image}>
          <Page 
            pageNumber={1} 
            renderTextLayer={false} 
            renderAnnotationLayer={false}
            // Add a specific width to prevent layout shift
            width={300} 
          />
        </Document>
      </div>
      <a className="preview-overlay" href={image} download>
        <p className="preview-text">Download PDF</p>
      </a>
    </div>
  );
}