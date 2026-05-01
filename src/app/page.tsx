'use client';

import Title from "@/components/atoms/Title";
import PublicLayout from "@/components/layout/PublicLayout";
import ErrorCard from "@/components/molecules/ErrorCard";
import FlagCard from "@/components/molecules/FlagCard";
import DetectLanguageBox from "@/components/organisms/DetectLanguageBox";
import TopLanguage from "@/components/organisms/TopLanguage";
import { useState } from "react";

export default function Page() {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  return (
    <PublicLayout>
      <DetectLanguageBox
        setResult={setResult}
        setError={setError}
        setLoading={setLoading}
      />
{result &&
     (  
     <div className="flex justify-center mt-10">
     <FlagCard lang={result.language} />  
     <TopLanguage data={result} loading={loading} />
     
     </div>)}


{error && 

      <ErrorCard error={error} />
}
 </PublicLayout>
  );
}