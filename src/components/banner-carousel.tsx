"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Slide {
  title?: string;
  description?: string;
  content?: string;
  image: string;
}

interface BannerCarouselProps {
  slides: Slide[];
  intervalSeconds: number;
}

export default function BannerCarousel({ slides, intervalSeconds }: BannerCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, intervalSeconds * 1000)

    return () => clearInterval(interval)
  }, [slides.length, intervalSeconds])

  return (
    <div className="w-full relative">
      <Card className="overflow-hidden border rounded-lg shadow-md p-0">
        <CardContent className="p-0">
          <div className="relative h-[400px] md:h-[350px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                {(slide.title || slide.description || slide.content) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                )}

                <div className="relative h-full flex flex-col justify-center p-8 md:p-12 md:max-w-[60%] text-white z-10">
                  {slide.title && <h2 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h2>}
                  {slide.description && <p className="text-lg md:text-xl mb-2">{slide.description}</p>}
                  {slide.content && <p className="text-sm md:text-base mb-6 opacity-90">{slide.content}</p>}
                  {(slide.title || slide.description || slide.content) && (
                    <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white">Khám phá ngay</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-colors ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

