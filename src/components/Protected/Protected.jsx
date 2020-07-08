import React, { useState, useEffect } from "react";

const Protected = () => {
  const [demoText, setDemoText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchDemoText = async () => {
    setIsLoading(true);

    await fetch(`${process.env.REACT_APP_BASE_API_URL}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setDemoText(result.data.message);
      });
  };

  useEffect(() => {
    fetchDemoText();
  }, []);

  return isLoading ? (
    <div>...loading</div>
  ) : (
    <div className="demo">{demoText}</div>
  );
};

export default Protected;
