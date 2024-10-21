import AboutIntro from "./AboutIntro";

import AboutTechno from "./AboutTechno";
import AboutTools from "./AboutTools";

import AboutFormation from "./AboutFormation";
import AboutXp from "./AboutXp";

export default function About() {

  return (
    <div className="flex flex-col gap-16 lg:gap-32">
        <AboutIntro />

        <AboutTechno />
        <AboutTools />

        <AboutFormation />
        <AboutXp />
    </div>
  );
}
