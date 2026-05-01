import Title from "@/components/atoms/Title";
import PublicLayout from "@/components/layout/PublicLayout";
import ErrorCard from "@/components/molecules/ErrorCard";
import FlagCard from "@/components/molecules/FlagCard";
import DetectLanguageBox from "@/components/organisms/DetectLanguageBox";
import TopLanguage from "@/components/organisms/TopLanguage";

export default function page() {
  return (
    <div>
      <PublicLayout >
        {/* <div className="flex-col"> */}
      <DetectLanguageBox />
      <TopLanguage/>
        {/* </div> */}
      <ErrorCard />
      <FlagCard lang="english" />
      </PublicLayout>
    </div>
  );
}
