import tw from "twin.macro";

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import {useState} from "react";

const MainHeading = tw.h1`font-bold text-2xl text-gray-700 w-4/6 text-center`;
const ParagraphText = tw.p`text-sm text-gray-500 text-center w-5/6 pb-2`;

export default function Home() {
  const [fieldError, setFieldError] = useState(false);
  return (
    <main>
      <div tw="flex items-center justify-center h-screen bg-gray-200">
        <Card variant="big">
          <div tw="flex flex-col items-center space-y-4">
            <MainHeading>Subscribe to newsletter</MainHeading>
            <ParagraphText>Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut laborea.</ParagraphText>
            <Input hasError={fieldError} variant={"full"} placeholder="Your email" type="text"/>
            <Button variant="full" onClick={() => setFieldError(!fieldError)}>
              Subscribe
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}
