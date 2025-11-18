import "../styles/work_cv/preview.css";

interface PreviewProps {
  image: string;
  description: string;
}

export default function Preview({ image, description }: PreviewProps) {
  return (
    <div className="preview-card">
      <a
        href={image}
        download
        className="preview-link"
        aria-label="Download preview"
      >
      <div className="preview-pdf">
        <img alt={description} src={require(image)}/>
      </div>
        <div className="preview-overlay">
          <p className="preview-text">Download PDF</p>
        </div>
      </a>
    </div>
  );
}