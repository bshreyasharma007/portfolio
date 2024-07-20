import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

interface ProjectImageProps {
  images: { src: string; alt: string }[]
  width: number
  height: number
}

export const ProjectImage = ({ images, height, width }: ProjectImageProps) => {
  return (
    <div>
      {" "}
      <Carousel className="w-full max-w-2xl">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={width}
                      height={height}
                    />{" "}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
