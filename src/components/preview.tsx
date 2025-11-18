import "../styles/work_cv/preview.css";
import { Document, Page } from 'react-pdf';
interface PreviewProps {
  image: string;
}

export default function Preview({ image }: PreviewProps) {
  return (
    <div className="preview-card">
      <a
        href={image}
        download
        className="preview-link"
        aria-label="Download preview"
      >
      <div className="preview-pdf">
        <Document file={image}>
          <Page pageNumber={1}/>
        </Document>
      </div>
        <div className="preview-overlay">
          <p className="preview-text">Download PDF</p>
        </div>
      </a>
    </div>
  );
}