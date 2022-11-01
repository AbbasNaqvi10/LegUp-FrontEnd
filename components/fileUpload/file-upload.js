import { Dropdown, Button, Input } from "@nextui-org/react";
import { useRef } from "react";

export default function FileUpload() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
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
      />
      <Dropdown>
        <Dropdown.Button flat light>Upload File</Dropdown.Button>
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