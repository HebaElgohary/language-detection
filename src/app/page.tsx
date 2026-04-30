import Title from "@/components/atoms/Title";
import PublicLayout from "@/components/layout/PublicLayout";
import ErrorCard from "@/components/molecules/ErrorCard";
import DetectLanguageBox from "@/components/organisms/DetectLanguageBox";
export default function page() {
  return (
    <div>
      <PublicLayout>
      <DetectLanguageBox />
      <ErrorCard />
      </PublicLayout>
    </div>
  );
}
