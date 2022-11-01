import { Input, Link, Navbar, Text } from "@nextui-org/react";
import React from "react";
import { FeedbackIcon } from "../icons/navbar/feedback-icon";
import { GithubIcon } from "../icons/navbar/github-icon";
import { SupportIcon } from "../icons/navbar/support-icon";
import { SearchIcon } from "../icons/searchicon";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { BurguerButton } from "./burguer-button";
import { NotificationsDropdown } from "./notifications-dropdown";
import { UserDropdown } from "./user-dropdown";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  const router = useRouter();

  const collapseItems = [
    "Dashboard",
    "Social Data",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Box
      css={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Navbar
        isBordered
        css={{
          borderBottom: "1px solid $border",
          justifyContent: "space-between",
          width: "100%",
          "@md": {
            justifyContent: "space-between",
          },

          "& .nextui-navbar-container": {
            border: "none",

            gap: "$6",
            "@md": {
              justifyContent: "space-between",
            },
          },
        }}
      >
        <Navbar.Content showIn="md">
          <BurguerButton />
        </Navbar.Content>
        {/* <Navbar.Content
               hideIn={'md'}
               css={{
                  width: '100%',
               }}
            >
               <Input
                  clearable
                  contentLeft={
                     <SearchIcon
                        fill="var(--nextui-colors-accents6)"
                        size={16}
                     />
                  }
                  contentLeftStyling={false}
                  css={{
                     'w': '100%',
                     'transition': 'all 0.2s ease',
                     '@xsMax': {
                        w: '100%',
                        // mw: '300px',
                     },
                     '& .nextui-input-content--left': {
                        h: '100%',
                        ml: '$4',
                        dflex: 'center',
                     },
                  }}
                  placeholder="Search..."
               />
            </Navbar.Content> */}
        <Navbar.Content
          css={{
            width: "100%",
          }}
        >
          {/* <Navbar.Content hideIn={'md'}>
                  <Flex align={'center'} css={{gap: '$4'}}>
                     <FeedbackIcon />
                     <Text span>Feedback?</Text>
                  </Flex>
               </Navbar.Content>

               <Navbar.Content>
                  <NotificationsDropdown />
               </Navbar.Content> */}

          {/* <Navbar.Content hideIn={'md'}>
                  <SupportIcon />
               </Navbar.Content>
               <Navbar.Content>
                  <Link
                     href="https://github.com/"
                     target={'_blank'}
                  >
                     <GithubIcon />
                  </Link>
               </Navbar.Content> */}

          <Navbar.Content
            css={{
              width: "100%",
              "@sm": {
                $px: "$10",
              },
            }}
          >
            {router.pathname === "/dashboard" ? (
              <h2>Overview</h2>
            ) : (
              <h2>Home</h2>
            )}
          </Navbar.Content>

          <Navbar.Content
            css={{
              marginLeft: "auto",
            }}
          >
            <UserDropdown />
          </Navbar.Content>
        </Navbar.Content>

        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
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
      {children}
    </Box>
  );
};
