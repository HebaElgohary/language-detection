import Title from "@/components/atoms/Title";
import PublicLayout from "@/components/layout/PublicLayout";
import DetectLanguageBox from "@/components/organisms/DetectLanguageBox";
import TopLanguage from "@/components/organisms/TopLanguage";

export default function page() {
  return (
    <div>
      <PublicLayout >
        <div className="flex-col">
      <DetectLanguageBox />
      <TopLanguage/>
        </div>
      </PublicLayout>
    </div>
  );
}
