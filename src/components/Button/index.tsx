import { CSSProperties, ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  variant: "empty" | "selected";
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  style?: CSSProperties;
};

export default function Button({
  children,
  variant,
  onClick,
  disabled,
  ...rest
}: Props) {
  return (
    <Container
      {...rest}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
    >
      <span>{children}</span>
    </Container>
  );
}
