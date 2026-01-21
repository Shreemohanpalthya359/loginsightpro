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
      <input
        type="file"
        accept=".log,.txt"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload} style={styles.button}>
        {loading ? "Uploading..." : "Upload & Analyze"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

const styles = {
  box: {
    marginTop: "40px",
    textAlign: "center",
  },
  button: {
    marginLeft: "10px",
    padding: "8px 16px",
    cursor: "pointer",
  },
};
