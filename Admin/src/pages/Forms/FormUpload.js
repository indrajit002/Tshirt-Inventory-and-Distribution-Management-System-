import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  CardBody,
  CardTitle
} from "reactstrap";
import Dropzone from "react-dropzone";
import axios from "axios";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const FormUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    const updatedFiles = files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectedFiles(updatedFiles);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const handleFileUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("No file selected. Please drop a file to upload.");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach(file => {
      formData.append("file", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:4000/api/upload-csv", // Replace with your backend API URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message); // Display success message from backend
      setSelectedFiles([]); // Clear selected files state after successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file"); // Display error message
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Breadcrumbs title="Form" breadcrumbItem="Form File Upload" />
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
                <CardTitle className="h4">Dropzone</CardTitle>
                <p className="card-title-desc">
                  DropzoneJS is an open source library that provides
                  drag’n’drop file uploads with image previews.
                </p>
                <Form>
                  <Dropzone
                    onDrop={acceptedFiles => {
                      handleAcceptedFiles(acceptedFiles);
                    }}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div className="dropzone dz-clickable">
                        <div
                          className="dz-message needsclick"
                          {...getRootProps()}
                        >
                          <input {...getInputProps()} />
                          <div className="mb-3">
                            <i className="display-4 text-muted mdi mdi-upload-network-outline"></i>
                          </div>
                          <h4>Drop files here or click to upload.</h4>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                  <div className="dropzone-previews mt-3" id="file-previews">
                    {selectedFiles.map((f, i) => (
                      <Card
                        className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                        key={i + "-file"}
                      >
                        <div className="p-2">
                          <Row className="align-items-center">
                            <Col className="col-auto">
                              <img
                                data-dz-thumbnail=""
                                height="80"
                                className="avatar-sm rounded bg-light"
                                alt={f.name}
                                src={f.preview}
                              />
                            </Col>
                            <Col>
                              <Link
                                to="#"
                                className="text-muted font-weight-bold"
                              >
                                {f.name}
                              </Link>
                              <p className="mb-0">
                                <strong>{f.formattedSize}</strong>
                              </p>
                            </Col>
                          </Row>
                        </div>
                      </Card>
                    ))}
                  </div>
                </Form>
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    onClick={handleFileUpload}
                  >
                    Upload Files
                  </button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default FormUpload;
