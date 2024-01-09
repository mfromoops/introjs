"use client";
import dynamic from "next/dynamic";
import React, { ReactNode, useEffect } from "react";
const Tour = dynamic(() => import("reactour"), { ssr: false });
import { Mask } from '@reactour/mask';

const tourConfig = [
  {
    selector: '[data-tut="step-1"]',
    content: `Ok, let's start with the name of the Tour that is about to begin.`,
  },
  {
    selector: '[data-tut="step-2"]',
    content: `Ok, let's start with the name of the Tour that is about to begin.`,
  },
  {
    selector: '[data-tut="step-3"]',
    content: `Ok, let's start with the name of the Tour that is about to begin.`,
  },
  {
    selector: '[data-tut="step-4"]',
    content: `Ok, let's start with the name of the Tour that is about to begin.`,
  },
];
export default function Test(props: {children: ReactNode}) {
  const [isTourOpen, setTourOpen] = React.useState(false);

  const handleClickOpen = () => {
    setTourOpen(true);
  };

  const closeTour = () => {
    setTourOpen(false);
  };

  const openTour = () => {
    handleClickOpen();
  };
  useEffect(() => {
    openTour();
  }, [])
  return (
    <>
      <Tour
        onRequestClose={closeTour}
        disableInteraction={true}
        steps={tourConfig}
        isOpen={isTourOpen}
        rounded={5}
        maskClassName="bg-red-500 opacity-50"
        prevButton={<button>Prev</button>}
        nextButton={<button>Next</button>}
        accentColor={"rgb(65, 104, 177)"}
      >
        <p>Hello</p>
    </Tour>
    
    {isTourOpen && <Mask 
    styles={{
        maskWrapper: (base) => {
            return {
                ...base,
                color: '#4168B1'
            };
        },
        highlightedArea: (base) => {
            return {
                display: 'none',
                width: 0,
                color: 'red',
                backgroundColor: 'red',
                
            }
        }
    
    }}
    sizes={{
        x: 0,
        y: 0,
        width: 100,
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
    }} />}
    <div className="card-demo" data-tut="step-1">
      <div className="card shadow--md max-w-64 bg-white px-2 rounded-md py-2">
        <div className="card__image" data-tut="step-2">
          <img
            src="/next.svg"
            alt="Image alt text"
            title="Logo Title Text 1"
            width={180}
          />
        </div>
        <div className="card__body" data-tut="step-3">
          <h4 className="text-blue-500">Quaco Lighthouse</h4>
          <small>
            The Quaco Head Lighthouse is a well maintained lighthouse close to
            St. Martins. It is a short, beautiful walk to the lighthouse along
            the seashore.
          </small>
        </div>
      </div>
    </div>
    {props.children}
    </>
  );
}