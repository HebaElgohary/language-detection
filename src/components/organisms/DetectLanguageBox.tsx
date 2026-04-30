import React from 'react'
import Title from '../atoms/Title'
import Text from '../atoms/Text'
import TextArea from '../atoms/TextArea'
import Button from '../atoms/Button'

export default function DetectLanguageBox() {
  return (
    <div className='text-center flex flex-col gap-7'>
          <Title className="ds-text-primary-300 font-semibold text-center !text-md md:!text-3xl">
          Detect the Language instantly{" "}
        </Title>
        <Text variant='disabled'>Type any sentence and we'll identify its language</Text>
        <TextArea placeholder='Type any sentence'className='md:w-150 md:h-40 h-30 ' />
        <Button className='text-sm md:w-70'variant='primary'>Detect Language</Button>
    </div>
  )
}
