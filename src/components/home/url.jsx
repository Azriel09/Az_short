import {
  TextField,
  InputAdornment,
  Box,
  FormHelperText,
  FormControl,
  useTheme,
} from "@mui/material";
import "./url.scss";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState } from "react";
import validator from "validator";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import axios from "axios";
const api = import.meta.env.VITE_API;
export default function UrlInput() {
  const theme = useTheme();
  const [inputURL, setInputURL] = useState({
    link: "",
  });
  const [outputURL, setOutputURL] = useState("");
  const [inputURLError, setInputURLError] = useState(false);
  const [outputLabel, setOutputLabel] = useState("Shortened URL will be here");

  //
  const copyUrl = () => {
    if (outputURL.length <= 5) {
      setOutputLabel("No URL generated yet");
    } else {
      navigator.clipboard.writeText(outputURL);
      setOutputLabel("URL Copied");
    }
  };

  // Detects Input URL changes
  const handleInputURLChange = (e) => {
    setInputURL((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Checks if input is a URL or Not
    if (!validator.isURL(inputURL.link)) {
      console.log("Not a URL");
      setInputURLError(true);
      return;
    }
    setInputURLError(false);

    try {
      await axios.post(`${api}submit`, inputURL).then((response) => {
        console.log(response.data);
        setOutputURL(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <FormControl
        sx={{
          width: "100%",
          [theme.breakpoints.down("520")]: {
            width: "90%",
          },
          [theme.breakpoints.down("420")]: {
            width: "80%",
          },
          [theme.breakpoints.down("320")]: {
            width: "70%",
          },
        }}
      >
        <TextField
          variant="filled"
          label="Type/Paste URL here"
          error={inputURLError}
          className="url-input"
          name="link"
          sx={{
            input: { color: "white", fontSize: "1.5em" },
          }}
          InputLabelProps={{
            style: {
              color: "white",
            },
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                <ArrowCircleUpIcon
                  onClick={handleSubmit}
                  sx={{ color: "white" }}
                />
              </InputAdornment>
            ),
          }}
          onChange={handleInputURLChange}
        />
        {inputURLError ? (
          <FormHelperText
            sx={{ fontSize: "1.4em", color: "#fb7500", fontWeight: "bold" }}
          >
            Invalid URL
          </FormHelperText>
        ) : (
          <FormHelperText error> </FormHelperText>
        )}
      </FormControl>
      <TextField
        disabled
        variant="filled"
        label={outputLabel}
        sx={{
          input: { color: "white", fontSize: "1.3em" },

          width: "100%",
          [theme.breakpoints.down("520")]: {
            width: "90%",
          },
          [theme.breakpoints.down("420")]: {
            width: "80%",
          },
          [theme.breakpoints.down("320")]: {
            width: "70%",
          },
        }}
        className="url-output"
        value={outputURL}
        InputLabelProps={{
          style: {
            color: "black",
          },
        }}
        color="primary"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
              <ContentCopyIcon onClick={copyUrl} sx={{ color: "black" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
