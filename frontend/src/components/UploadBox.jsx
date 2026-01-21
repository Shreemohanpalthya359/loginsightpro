import { useState } from "react";

export default function UploadBox({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a log file");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      onResult(data);
    } catch (err) {
      setError("Failed to upload file");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.box}>
      <div style={styles.uploadContainer}>
        <label style={styles.fileInputLabel}>
          <input
            type="file"
            accept=".log,.txt"
            onChange={(e) => setFile(e.target.files[0])}
            style={styles.fileInput}
          />
          <span style={styles.fileInputSpan}>
            📁 {file ? file.name : "Choose File"}
          </span>
        </label>
      </div>

      <button onClick={handleUpload} style={styles.button}>
        {loading ? "Uploading..." : "Upload & Analyze"}
      </button>

      {error && <p style={{ color: "#dc2626", fontSize: "14px", marginTop: "12px" }}>{error}</p>}
    </div>
  );
}

const styles = {
  box: {
    marginTop: "0px",
    textAlign: "center",
  },
  uploadContainer: {
    marginBottom: "20px",
  },
  fileInputLabel: {
    display: "inline-block",
    cursor: "pointer",
  },
  fileInput: {
    display: "none",
  },
  fileInputSpan: {
    display: "inline-block",
    padding: "14px 24px",
    backgroundColor: "#f9fafb",
    border: "2px solid #000000",
    borderRadius: "10px",
    color: "#1f2937",
    fontWeight: "900",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  button: {
    marginLeft: "14px",
    padding: "14px 32px",
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "900",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
};