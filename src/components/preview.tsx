import "../styles/work_cv/preview.css";
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.mjs`;

interface PreviewProps {
  image: string;
}

export default function Preview({ image }: PreviewProps) {
  return (
    <div className="preview-card">
      <div className="preview-inner">
        <Document file={image}>
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
      </div>
        <a className="preview-overlay" href={image} download>
          <p className="preview-text">Download PDF</p>
        </a>
    </div>
  );
}