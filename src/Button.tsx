import { SvgIconComponent } from "@mui/icons-material";
import Button from "@mui/material/Button";

type ButtonPropsType = {
  title: string;
  image?: SvgIconComponent;
  onClick?: () => void;
};

export const ButtonComponent = ({
  title,
  image: Icon,
  onClick,
}: ButtonPropsType) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {title}
      {Icon && <Icon />}
    </Button>
  );
};
