import * as motion from "motion/react-client" 
import React from "react";

interface LinkButtonProps extends React.PropsWithChildren {
  src: string;
}

export type IconProps = React.HTMLAttributes<SVGElement>;

const LinkButton: React.FC<LinkButtonProps> = ({ children, src }) => {
  return (
    <motion.a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 p-2 rounded-2xl border-violet-200 shadow-violet-500 shadow-md inline-block"
      whileHover={{
        scale: 1.15,
        transition: {
          ease: "easeIn",
        },
      }}
    >
      {children}
    </motion.a>
  );
};

export default LinkButton;
