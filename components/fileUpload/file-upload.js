import { Dropdown, Button, Input } from "@nextui-org/react";
import { useState, useRef } from "react";
import axios from 'axios';

export default function FileUpload() {
  const inputRef = useRef(null);
  let [file, loadFiles] = useState([])
  const [isLoading, setLoading] = useState(false)
  if (isLoading) return <p>Loading...</p>

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {

    data.append('file', event.target.files[0]);

    const fileObj = event.target.files && event.target.files[0];
    loadFiles(arr => [...arr, event.target.files[0]])
    if (fileObj) {
      axios.post('http://localhost:3001/fileUpload',
        {files:file}
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
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        multiple
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
    </>
  );
}