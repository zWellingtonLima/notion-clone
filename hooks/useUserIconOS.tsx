import { useState, useEffect } from "react";

const detectOS = (userAgent: string): "Windows" | "Mac" | "Unknown" => {
  if (/win/i.test(userAgent)) {
    return "Windows";
  } else if (/mac/i.test(userAgent)) {
    return "Mac";
  } else {
    return "Unknown";
  }
};

export const useUserOSIcon = () => {
  const [os, setOs] = useState<"Windows" | "Mac" | "Unknown">("Unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const detectedOS = detectOS(userAgent);
    setOs(detectedOS);
  }, []);

  let iconResult = "";

  if (os === "Windows") {
    iconResult = "CTRL";
  } else if (os === "Mac") {
    iconResult = "⌘";
  } else {
    return (iconResult = "CTRL");
  }

  return iconResult;
};
