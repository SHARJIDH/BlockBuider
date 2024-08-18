import { FlipWords } from '@/components/ui/flip-words';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { Vortex } from '@/components/ui/vortex';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';
import React from 'react'

function Hero() {
  const words = ["Roadmaps", "Block-Diagrams", "AI-Diagrams", "Flowcharts"];
  return (
    <section className="bg-black">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <div className='flex items-baseline 
        justify-center pt-20'>
          <h2 className='text-white border 
            px-3 p-2 rounded-full
        text-center border-white'>See What's New | <span className='text-sky-300'>
              <FlipWords words={words} className='text-sky-300' /> <br />
            </span></h2>

        </div>
        <div className="mx-auto h-screen max-w-screen-xl px-4 py-12 lg:flex  ">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
              Unified Documentation and Diagrams
              <strong className="font-extrabold text-white sm:block">
                for engineering teams. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-slate-200">
              Markdown Editing, Collaboration, and Diagrams—All in One Place
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-black text-white flex items-center space-x-2"
              >
                <LoginLink postLoginRedirectURL="/dashboard"> Try now</LoginLink>
              </HoverBorderGradient>



            </div>
          </div>
        </div>
      </Vortex>
    </section>
  )
}

export default Hero