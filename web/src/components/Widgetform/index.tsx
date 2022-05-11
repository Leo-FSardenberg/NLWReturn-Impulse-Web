
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import tipsUrl from '../../assets/tip.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";
import { Tips } from '../CarouselComponents/Carousel';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Ilustração de um inseto roxo'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Lâmpada acesa'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Núvem de pensamento'
    }
  },
  TIPS: {
    title: 'Dicas',
     image: {
     source: tipsUrl,
     alt: 'interrogação'}
  }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }
   if(feedbackType == 'TIPS'){ 
     return(
     <div  className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
     <Tips/>
    </div>)

   }
   else{
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ): (
        <>
   {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ): (
            <FeedbackContentStep 
            
              feedbackType={feedbackType} 
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )},
       
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
      </footer>
    </div>
  )
}}