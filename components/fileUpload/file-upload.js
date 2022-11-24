import { Dropdown, Button, Input } from "@nextui-org/react";
import { useState, useRef } from "react";
import axios from 'axios';

export default function FileUpload() {

  let appleFiles = []
  let facebookFiles = []
  let amazonFiles = []
  const appleInputRef = useRef(null);
  const facebookInputRef = useRef(null);
  const amazonInputRef = useRef(null);
  const [appleFile, uploadtAppleFiles] = useState()
  const [facebookFile, uploadtFacebookFiles] = useState()
  const [amazonFile, uploadtAmazonFiles] = useState()
  const [uploadButton, showUploadButton] = useState(false)
  const [isLoading, setLoading] = useState(false)
  if (isLoading) return <p>Loading...</p>

  const handleClick = (e) => {
    e.target.innerText == "Apple File" ? appleInputRef.current.click() : e.target.innerText == "Facebook File" ? facebookInputRef.current.click() : e.target.innerText == "Amazon File" ? amazonInputRef.current.click() : false
  };

  const handleFileChange = (event) => {
    if (event.target.name == "Apple") {
      Object.values(event.target.files).map(file => {
        appleFiles.push(file)
      })
      uploadtAppleFiles(appleFiles)
      showUploadButton(true)
    }
    else if (event.target.name == "Facebook") {
      Object.values(event.target.files).map(file => {
        facebookFiles.push(file)
      })
      uploadtFacebookFiles(facebookFiles)
      showUploadButton(true)
    }
    else if (event.target.name == "Amazon") {
      Object.values(event.target.files).map(file => {
        amazonFiles.push(file)
      })
      uploadtAmazonFiles(amazonFiles)
      showUploadButton(true)
      console.log(appleFile)
    }
  };

  const uploadFiles = (files) => {
    if (files) {
      axios.post('http://localhost:3001/fileUpload',
        { files: files }
        ,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'mode': 'no-cors'
          }
        })
        .then(function (response) {
          setLoading(true)
          console.log(response);
          setLoading(false)
        })
        .catch(function (error) {
          console.log(error);
        });
      return;
    }
  }

  const menuItems = [
    { key: "apple", name: "Apple File" },
    { key: "facebook", name: "Facebook File" },
    { key: "amazon", name: "Amazon File" },
  ];

  return (
    <>
      <Input
        style={{ display: "none" }}
        ref={appleInputRef}
        type="file"
        name="Apple"
        onChange={handleFileChange}
        multiple
      // accept=".csv"
      />
      <Input
        style={{ display: "none" }}
        ref={facebookInputRef}
        type="file"
        name="Facebook"
        onChange={handleFileChange}
        multiple
      // accept=".csv"
      />
      <Input
        style={{ display: "none" }}
        ref={amazonInputRef}
        type="file"
        name="Amazon"
        onChange={handleFileChange}
        multiple
      // accept=".csv"
      />
      <Dropdown>
        <Dropdown.Button flat className="bg-blue-700 text-white hover:shadow-2xl hover:bg-blue-900">Upload File</Dropdown.Button>
        <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
          {(item) => (
            <Dropdown.Item key={item.key}>
              <Button light color="primary" auto onClick={handleClick}>
                {item.name}
              </Button>
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
      {/* {
        appleFile.length > 0 ? <div>
          <p>Apple:</p>
          {
            appleFile.map((file) => {
              <div>{file}</div>
            })
          }
        </div>
          : facebookFile.length > 0 ? <div>
            <p>Facebook:</p>
            {
              facebookFile.map((file) => {
                <div>{file}</div>
              })
            }
          </div>
            : amazonFile.length > 0 ? <div>
              <p>Amazon:</p>
              {
                amazonFile.map((file) => {
                  <div>{file}</div>
                })
              }
            </div>
              : false
      } */}
      {uploadButton ? <Button className="bg-blue-700 m-2 text-white hover:shadow-2xl hover:bg-blue-900" onClick={uploadFiles([appleFile, facebookFile, amazonFile])}>Upload</Button> : false}
    </>
  );
}