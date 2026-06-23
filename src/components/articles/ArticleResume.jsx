import React from "react";
import { useParser } from "/src/helpers/parser.js";

const Resume = ({ data }) => {
  const parser = useParser();
  const parsedData = parser.parseArticleData(data);
  const resumeItem = parser.parseArticleItems(parsedData.items)[0];
  const resumePreviewUrl = resumeItem.firstLink.href;
  const resumeDownloadUrl = resumeItem.links?.[1]?.href || resumePreviewUrl;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#28a745",
          marginBottom: "10px",
        }}
      >
        📄 My Resume
      </h2> */}

      <p style={{ fontSize: "16px", color: "lime", marginBottom: "15px" }}>
        View or download my latest resume below:
      </p>

      <div
        style={{
          width: "90%",
          maxWidth: "1000px",
          height: "700px",
          border: "1px solid #ddd",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          src={resumePreviewUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Resume PDF"
          onError={(e) => (e.target.outerHTML = "<p>Failed to load PDF.</p>")}
        />
      </div>

      <a
        href={resumeDownloadUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          display: "inline-block",
          boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
      >
        📥 Download Resume
      </a>
    </div>
  );
};

export default Resume;
