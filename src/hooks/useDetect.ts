
'use client';
import { useState } from "react";

type DetectResponse = any; 

export function useDetect() {
  const [data, setData] = useState<DetectResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const detect = async (text: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/detect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.message || "Error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    detect,
  };
}