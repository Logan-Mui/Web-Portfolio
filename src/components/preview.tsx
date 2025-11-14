import { useState } from "react";
import "../styles/work_cv/preview.css";
import Page from "react-pdf/src/Page.js";
import { Document } from "react-pdf";

interface PreviewProps {
  image: string;
}

export default function Preview({ image }: PreviewProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="preview-card">
      <a
        href={image}
        download
        className="preview-link"
        aria-label="Download preview"
      >
      <div className="preview-pdf">
        <Document file={image} onLoadSuccess={() => setLoaded(true)}>
          <Page
            pageNumber={1}
            width={250}
            renderAnnotationLayer={false}
          />
        </Document>
        {!loaded &&  <p>Loading preview...</p>}
      </div>
        <div className="preview-overlay">
          <p className="preview-text">Download PDF</p>
        </div>
      </a>
    </div>
  );
}
