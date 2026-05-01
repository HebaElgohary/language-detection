'use client';
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import { Locale, useLocale, useTranslations } from "next-intl";
import { useDetect } from "@/hooks/useDetect";

export default function DetectLanguageBox() {
  const locale:Locale = useLocale();
  const { detect,loading,error,data } = useDetect();
    console.log('locale isssssss',locale)

  const t = useTranslations('detectLangBox');
  return (
    <div className="md:text-center flex flex-col gap-7">
      <Title className="ds-text-primary-300 font-semibold md:text-center !text-[19px] md:!text-3xl">
      {t('title')}
      </Title>
      <Text variant="disabled" className="text-center !text-[14px]">
      {t('text')}
       
      </Text> 
      <div className="flex flex-col gap-3 ">
        <TextArea
          placeholder={t('placeholder')}
          className="md:w-150 md:h-40 h-30 w-full "
        />
        <Button onClick={() => 
          
          { 
detect('hello world')
console.log('data isssssss',data)
console.log('loading isssssss',loading)
console.log('error isssssss',error)

          }} className="text-sm md:w-70 w-full" variant="primary">
      {t('btn')}
          
        </Button>
      </div>
    </div>
  );
}
