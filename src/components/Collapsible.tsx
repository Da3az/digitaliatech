"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Collapsible({
  TopComponent,
  BottomComponent,
  highLevelOpen,
  highIsOpen,
}: {
  TopComponent: ({
    isOpen,
    setIsOpen,
  }: {
    isOpen?: boolean;
    setIsOpen?: (bool: boolean) => void;
  }) => React.ReactNode;
  BottomComponent: ({
    isOpen,
    setIsOpen,
  }: {
    isOpen?: boolean;
    setIsOpen?: (bool: boolean) => void;
  }) => React.ReactNode;
  highLevelOpen?: (bool: boolean) => void;
  highIsOpen?: boolean;
}) {
  const [height, setHeight] = useState<number | undefined>();
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (highIsOpen !== undefined) {
      setIsOpen(highIsOpen);
    }
  }, [highIsOpen]);

  return (
    <div className="flex flex-col ">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => {
          if (highLevelOpen) {
            highLevelOpen(!isOpen);
          }
          setIsOpen(!isOpen);
        }}
      >
        {TopComponent({ isOpen, setIsOpen })}
      </div>
      <div
        ref={contentRef}
        style={{ height: height }}
        className={` transition-[height] overflow-hidden`}
      >
        {BottomComponent({ isOpen, setIsOpen })}
      </div>
    </div>
  );
}
