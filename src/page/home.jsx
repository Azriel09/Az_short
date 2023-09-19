import { useEffect, useState } from "react";
import Container from "../components/container";
import axios from "axios";
import { Navigate, useLocation, useParams } from "react-router-dom";
export default function Home() {
  const body = { id: useParams().id };
  const [link, setLink] = useState("");

  return <Container />;
}
