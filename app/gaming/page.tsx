import { ExpandableCardDemo } from "@/components/custom-list-cards";
import { NavbarDemo } from "@/components/custom-navbar-menu";

export default function Gaming() {
  return (
    <div className="flex justify-center min-h-screen flex-wrap">
      <NavbarDemo/>
      <div className="h-16 w-full"></div>
      <ExpandableCardDemo/>
    </div>
  )
}
