import React, { useRef, useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { Link, withRouter } from "react-router-dom"; // Ensure withRouter is imported
import { withTranslation } from "react-i18next";
import MetisMenu from "metismenujs";

const SidebarContent = ({ location, t }) => {
  const ref = useRef();
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSendingEmails, setIsSendingEmails] = useState(false); // State for email sending

  const activateParentDropdown = (item) => {
    item.classList.add("active");
    let parent = item.parentElement;
    while (parent) {
      if (parent.classList.contains("metismenu-item")) {
        parent.classList.add("mm-active");
        const parent2El = parent.querySelector(".metismenu-container");
        if (parent2El) {
          parent2El.classList.add("mm-show");
        }
      }
      parent = parent.parentElement;
    }
  };

  useEffect(() => {
    const pathName = location?.pathname; // Optional chaining to prevent errors

    const initMenu = () => {
      new MetisMenu("#side-menu");
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");

      let matchingMenuItem = null;

      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }

      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };

    if (location) {
      initMenu();
    }
  }, [location]); // Depend on location to rerun when location changes

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) {
      alert("No file selected. Please select a file.");
      return;
    }
    if (!file.name.endsWith(".csv")) {
      alert("Please upload a CSV file.");
      return;
    }
    setSelectedFile(file);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("No file selected. Please choose a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setIsUploading(true);
    try {
      const response = await fetch("http://localhost:4000/api/upload-csv", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setSelectedFile(null);
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSendEmails = async () => {
    setIsSendingEmails(true);
    try {
      const response = await fetch("http://localhost:4000/api/bulk-sender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        alert("Emails sent successfully!");
      } else {
        alert("Failed to send emails");
      }
    } catch (error) {
      console.error("Error sending emails:", error);
      alert("An error occurred while sending emails");
    } finally {
      setIsSendingEmails(false);
    }
  };

  return (
    <React.Fragment>
      <SimpleBar ref={ref} className="vertical-simplebar">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{t("Menu")}</li>
            <li>
              <Link to="/#" className="waves-effect">
                <i className="mdi mdi-airplay"></i>
                <span className="badge rounded-pill bg-info float-end"></span>
                <span>{t("Dashboard")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/dashboard2">{t("T-shirt Dashboard")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-email"></i>
                <span>{t("Student Delivery Report")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <label htmlFor="file-upload" className="waves-effect">
                    <i className="mdi mdi-upload"></i>
                    <span>{t("Select CSV")}</span>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  />
                </li>
                <li>
                  <button
                    onClick={handleFileUpload}
                    className="btn btn-primary mt-3"
                    disabled={!selectedFile || isUploading}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    {isUploading ? t("Uploading...") : t("Upload CSV")}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleSendEmails}
                    className="btn btn-primary mt-3"
                    disabled={isSendingEmails}
                    style={{ width: "100%", padding: "10px" }}
                  >
                    {isSendingEmails ? t("Sending Emails...") : t("Send Emails to Everyone")}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

export default withTranslation()(withRouter(SidebarContent));
