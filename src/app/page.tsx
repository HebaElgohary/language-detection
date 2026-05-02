'use client';

import Title from "@/components/atoms/Title";
import PublicLayout from "@/components/layout/PublicLayout";
import ErrorCard from "@/components/molecules/ErrorCard";
import FlagCard from "@/components/molecules/FlagCard";
import DetectLanguageBox from "@/components/organisms/DetectLanguageBox";
import TopLanguage from "@/components/organisms/TopLanguage";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function Page() {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
console.log('error issssssssssssssssssssssss', error)

  return (
    <PublicLayout>

      <DetectLanguageBox
        setResult={setResult}
        setError={setError}
        setLoading={setLoading}
        error={error?error:'null'}
      />
{/* {result && */}
     {/* (   */}
     <div className="flex justify-center mt-10 flex-col">
     <FlagCard lang={result?.language || 'arabic'} code={result?.code || 'EG'} />  
     <TopLanguage probabilities={result?.probabilities||[{language:'arabic',confidence:70},{language:'english',confidence:20}]} loading={loading} />
     
     </div>)
     {/* } */}


{/* {error && 
      <ErrorCard error={error} />
} */}
 </PublicLayout>
  );
}