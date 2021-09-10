import React, { AnchorHTMLAttributes } from "react";
import { Container } from "./styles";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  to: string;
}

const HeadLine: React.FC<LinkProps> = ({ title, to, ...rest }) => {
  return (
    <Container className="container">
      <a href={to} {...rest}>
        {title}
      </a>
    </Container>
  );
};

export default React.memo(HeadLine);
