"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
    "/lego/42083.webp",
    "/lego/10295.webp",
    "/lego/42111.webp",
    "/lego/42115.webp",
    "/lego/42141.webp",
    "/lego/42156.webp",
    "/lego/42171.webp",
    "/lego/76240.webp",
    "/lego/42096.jpeg",
];
