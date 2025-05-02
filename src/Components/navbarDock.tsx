import * as motion from "motion/react-client";

import React from "react";
import LinkButton from "./LinkButton";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function NavbarDock() {
  return (
    <div className="flex items-center gap-2">
      <LinkButton src="https://github.com/piyushk8">
        {" "}
        <SiGithub className="size-6" />
      </LinkButton>

      <LinkButton src="https://x.com/piyushk5531">
        <SiX className="size-6" />
      </LinkButton>
      <LinkButton src="https://www.linkedin.com/in/piyush-kumar-588098297/">
        <SiLinkedin className="size-6" />
      </LinkButton>
    </div>
  );
}
