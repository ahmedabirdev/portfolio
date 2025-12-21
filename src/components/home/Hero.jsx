"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { isViewTransitioning } from '../utility/viewTransitionState';
import ImageTrail from '../effects/ImageTrail';

const Hero = () => {
  const glyphs = ["▄", "█", "□", "▀", "►", "●", "○", "▪", "▫", "▲", "▼", "◄", "∞"];
  const line1 = "Design  ↘ That ▫ Connects ";
  const line2 = "Creativity ▪ That ↗ Resonates";
  const container = useRef(null);
  const charsRef = useRef([]);

  const startInitialGlitch = () => {
    charsRef.current.forEach((c) => {
      c.isCoded = true;
    });
    glitchTick();
  };

  const startGlitch = () => {
    if (isViewTransitioning) return;

    charsRef.current.forEach((c) => {
      c.isCoded = Math.random() > 0.5;
    });

    glitchTick();
  };

  const glitchTick = () => {
    let stillGlitching = false;

    charsRef.current.forEach((c) => {
      if (c.isCoded) {
        stillGlitching = true;

        c.isCoded = Math.random() > 0.25;

        c.el.textContent = c.isCoded
          ? [...glyphs, c.char][
          Math.floor(Math.random() * (glyphs.length + 1))
          ]
          : c.char;
      }
    });

    if (stillGlitching) {
      const t = setTimeout(glitchTick, 80);
      charsRef.current.forEach(c => (c.timeout = t));
    }
  };

  useLayoutEffect(() => {
    const chars = gsap.utils.toArray(
      container.current.querySelectorAll(".char")
    );

    charsRef.current = chars.map((el) => ({
      el,
      char: el.textContent, // ORIGINAL TEXT
      isCoded: false,
      timeout: null
    }));
  }, []);

  useEffect(() => {
    // ✅ ALWAYS restore text first
    charsRef.current.forEach(c => {
      c.el.textContent = c.char;
      c.isCoded = false;
    });

    // then start glitch
    startInitialGlitch();

    const timeout = setTimeout(() => {
      charsRef.current.forEach(c => {
        c.el.textContent = c.char;
        c.isCoded = false;
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);

      // ✅ CLEANUP on route change
      charsRef.current.forEach(c => {
        if (c.timeout) clearTimeout(c.timeout);
        c.el.textContent = c.char;
        c.isCoded = false;
      });
    };
  }, []);

  return (
    <>
      <div className="w-full background  h-screen relative center text-center">
        <div className=" text-3xl absolute  top-10 left-10 text-start  font-semibold">
          <h2>Hello, 👋 </h2>
          <h2> I’m Ahmed Abir.</h2>
        </div>
        <ImageTrail
          items={[
            'https://picsum.photos/id/287/300/300',
            'https://picsum.photos/id/1001/300/300',
            'https://picsum.photos/id/1025/300/300',
            'https://picsum.photos/id/1026/300/300',
            'https://picsum.photos/id/1027/300/300',
            'https://picsum.photos/id/1028/300/300',
            'https://picsum.photos/id/1029/300/300',
            'https://picsum.photos/id/1030/300/300',
            // ...
          ]}
          variant={5}
        />
        <h2 className='absolute bottom-5 text-xl font-semibold '>Scroll  ↓</h2>
        <div
          ref={container}
          onMouseEnter={startGlitch}
          className="whitespace-nowrap relative z-[10] font-semibold flex flex-col "
        >
          <p className="capitalize text-6xl leading-none">
            {line1.split("").map((c, i) => (
              <span key={i} className="char inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </p>

          <p className="capitalize text-6xl leading-none">
            {line2.split("").map((c, i) => (
              <span key={i} className="char inline-block">
                {c === " " ? "\u00A0" : c}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero