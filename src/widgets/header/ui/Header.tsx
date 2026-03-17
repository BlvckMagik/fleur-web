"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navigation } from "@/shared/config";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          px: { xs: 1.5, md: 2.5 },
          pt: { xs: 1, md: 1.5 },
          transition: "padding 0.4s ease",
        }}
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: scrolled
              ? "rgba(255,245,247,0.95)"
              : "rgba(255,245,247,0.85)",
            backdropFilter: "blur(12px)",
            transition: "all 0.4s ease",
            borderRadius: { xs: "16px", md: "20px" },
            boxShadow: scrolled
              ? "0 4px 24px rgba(196,139,159,0.18)"
              : "0 2px 12px rgba(196,139,159,0.08)",
            border: "1px solid rgba(212,112,138,0.1)",
          }}
        >
          <Toolbar
            sx={{
              maxWidth: 1200,
              width: "100%",
              mx: "auto",
              px: { xs: 2, md: 4 },
              height: { xs: 56, md: scrolled ? 56 : 64 },
              transition: "height 0.4s ease",
              minHeight: "unset !important",
            }}
          >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Box
              component="svg"
              viewBox="0 0 24 24"
              sx={{
                width: { xs: 24, md: 28 },
                height: { xs: 24, md: 28 },
                fill: "#d4708a",
                transition: "width 0.4s ease, height 0.4s ease",
              }}
            >
              <path d="M12 2C10.5 4.5 7 6 5 8c-2.5 2.5-2.5 6.5 0 9s6.5 2.5 9 0c-2.5 2.5-2.5 6.5 0 9s6.5 2.5 9 0c2.5-2.5 2.5-6.5 0-9C21 6 17.5 4.5 16 2c-1 2-2.5 3.5-4 4C10.5 5.5 13 4 12 2z" />
            </Box>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: { xs: "1.6rem", md: scrolled ? "1.7rem" : "1.9rem" },
                color: "#4A3035",
                letterSpacing: "0.02em",
                transition: "font-size 0.4s ease",
                lineHeight: 1,
              }}
            >
              Fleur
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#4A3035",
                    px: 1.5,
                    py: 0.5,
                    position: "relative",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#d4708a",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 0,
                      height: 2,
                      bgcolor: "#d4708a",
                      borderRadius: 1,
                      transition: "width 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "60%",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Box>

          <IconButton
            onClick={toggleDrawer}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#4A3035",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 280,
            bgcolor: "#FFF5F7",
            pt: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: "#4A3035",
            }}
          >
            Fleur
          </Typography>
          <IconButton onClick={toggleDrawer} sx={{ color: "#4A3035" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navigation.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={toggleDrawer}
                sx={{
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    bgcolor: "rgba(212,112,138,0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: '"Raleway", sans-serif',
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "#4A3035",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        sx={{
          height: { xs: 72, md: 84 },
        }}
      />
    </>
  );
};
