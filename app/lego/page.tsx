import { NavbarDemo } from "@/components/custom-navbar-menu";
import { ParallaxScrollDemo } from "@/components/custom-parallax";

export default function Lego() {
  return (
    <div className="flex justify-center min-h-screen flex-wrap">
      <NavbarDemo/>
      <ParallaxScrollDemo/>
    </div>
  )
}
