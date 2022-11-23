import { Dropdown, Button, Input } from "@nextui-org/react";
import { useState, useRef } from "react";
import axios from 'axios';

export default function FileUpload() {
  const appleInputRef = useRef(null);
  const facebookInputRef = useRef(null);
  const amazonInputRef = useRef(null);
  const [appleFile, uploadtAplleFiles] = useState([])
  const [facebookFile, uploadtFacebookFiles] = useState([])
  const [amazonFile, uploadtAmazonFiles] = useState([])
  const [uploadButton, showUploadButton] = useState(false)
  const [isLoading, setLoading] = useState(false)
  if (isLoading) return <p>Loading...</p>

  const handleClick = (e) => {
    e.target.innerText == "Apple File" ? appleInputRef.current.click() : e.target.innerText == "Facebook File" ? facebookInputRef.current.click() : e.target.innerText == "Amazon File" ? amazonInputRef.current.click() : false
  };

  const handleFileChange = (event) => {

    event.name == "Apple" ? uploadtAplleFiles(arr => [[...arr, event.target.files]]) : event.name == "Facebook" ? uploadtFacebookFiles(arr => [[...arr, event.target.files]]) : event.name == "Amazon" ? uploadtAmazonFiles(arr => [[...arr, event.target.files]]) : false
    showUploadButton(true)
    //console.log(event)
    // data.append('file', event.target.files[0]);

    // const fileObj = event.target.files && event.target.files[0];
    // loadFiles(arr => [...arr, event.target.files[0]])
    // if (fileObj) {
    //   axios.post('http://localhost:3001/fileUpload',
    //     {files:file}
    //     ,
    //     {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //         'mode': 'no-cors'
    //       }
    //     })
    //     .then(function (response) {
    //       setLoading(true)
    //       console.log(response);
    //       setLoading(false)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   return;
    // }
  };

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
        accept=".csv"
      />
      <Input
        style={{ display: "none" }}
        ref={amazonInputRef}
        type="file"
        name="Amazon"
        onChange={handleFileChange}
        multiple
        accept=".csv"
      />
      <Dropdown>
        <Dropdown.Button flat className="bg-blue-700 text-white hover:shadow-2xl hover:bg-blue-900">Upload File</Dropdown.Button>
        {/* <Dropdown.Menu aria-label="Actions">
          <Dropdown.Item key="new">
            <Button light color="primary" auto onClick={handleClick}>Open file upload box</Button>
          </Dropdown.Item>
          <Dropdown.Item key="copy">Copy link</Dropdown.Item>
        <Dropdown.Item key="edit">Edit file</Dropdown.Item>
        <Dropdown.Item key="delete" color="error" withDivider>
          Delete file
        </Dropdown.Item>
        </Dropdown.Menu> */}

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
      {
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
      }
      {uploadButton ? <Button className="bg-blue-700 m-2 text-white hover:shadow-2xl hover:bg-blue-900">Upload</Button> : false}
    </>
  );
}