import "../styles/work_cv/preview.css";

export default function Preview(image: string) {
  return (
    <div className="preview-card">
      <a
        href={image}
        download
        className="preview-link"
        aria-label="Download preview"
      >
        <img
          src="/preview_preview.png"
          alt="preview preview"
          className="preview-image"
        />
        <div className="preview-overlay">
          <p className="preview-text">Download preview</p>
        </div>
      </a>
    </div>
  );
}
