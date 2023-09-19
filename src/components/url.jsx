import {
  TextField,
  InputAdornment,
  Box,
  FormHelperText,
  FormControl,
} from "@mui/material";
import "./url.scss";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useState } from "react";
import validator from "validator";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Test from "./test";
import axios from "axios";
export default function UrlInput() {
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
      navigator.clipboard.writeText(outputLabel);
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
    // if (validator.isURL(inputURL)) {
    //   console.log("A URL");
    //   setInputURLError(false);

    // } else {
    //   console.log("Not a URL");
    //   setInputURLError(true);
    // }
    const test = "this is a test";
    try {
      await axios.post("http://192.168.137.1:8800/submit", inputURL);
      console.log("success");
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
      <Test />
      <FormControl>
        <TextField
          variant="filled"
          label="Type/Paste URL here"
          error={inputURLError}
          className="url-input"
          name="link"
          sx={{
            input: { color: "white", fontSize: "1.5em" },
            width: "500px",
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
          width: "400px",
          color: "white",
        }}
        className="url-output"
        defaultValue={outputURL}
        InputLabelProps={{
          style: {
            color: "white",
          },
        }}
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
              <ContentCopyIcon onClick={copyUrl} sx={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
