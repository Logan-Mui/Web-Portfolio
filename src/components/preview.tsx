import "../styles/work_cv/preview.css";

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
        <img
          src={image}
          alt="preview"
          className="preview-image"
        />
        <div className="preview-overlay">
          <p className="preview-text">Download preview</p>
        </div>
      </a>
    </div>
  );
}
