import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";

export default function App() {
  const collapseItems = [
    "Home",
    "Lenders",
    "Consumers",
    "About US",
    "Contact US",
  ];

  return (
    // <Layout>
    <Navbar isBordered>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        {/* <AcmeLogo /> */}
        <Text b color="inherit" hideIn="xs">
          LegUp
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        // variant="highlight-rounded"
      >
        <Navbar.Link isActive href="#">
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Lender</Navbar.Link>
        <Navbar.Link href="#">Comsumer</Navbar.Link>
        <Navbar.Link href="#">About US</Navbar.Link>
        <Navbar.Link href="#">Contact US</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          {/* <AcmeLogo /> */}
          <Text b color="inherit" hideIn="xs">
            LegUp
          </Text>
        </Navbar.Brand>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 0}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
    //</Layout>
  );
}
