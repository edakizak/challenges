import ChevronLeft from "../../design-resources/icons/chevron-left.svg";
import NavigationLink from "../NavigationLink/index.js";

export default function AllVolumesNavigation() {
  return (
    <NavigationLink href="/volumes">
      <ChevronLeft /> All Volumes
    </NavigationLink>
  );
}
