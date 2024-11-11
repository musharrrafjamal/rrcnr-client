"use client";
import { useState } from "react";
import Form from "./result/Form";
import ResultTable from "./result/ResultTable";

export default function StatusCheck() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="text-center mx-auto max-w-7xl">
      <h1 className="text-black font-bold text-lg mb-2">
        Notice No. RRC/NR-04/2024/S&G Level 1
      </h1>
      <h2 className="text-black text-xl font-semibold mb-6">
        Find Your Status
      </h2>
      {error && <p className="text-red-600 mt-4">{error}</p>}

      <div className="grid grid-cols-1 gap-4 max-w-md mx-auto mb-4">
        <Form setError={setError} setResult={setResult} />
        {result && <ResultTable result={result} />}
      </div>
    </div>
  );
}
