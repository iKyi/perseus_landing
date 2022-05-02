import { IAboutEntry } from "components/Home/AbousUsBox/AboutUsBox";
import {
  RocketLaunchOutlined,
  VerifiedUserOutlined,
  Image,
} from "@mui/icons-material";

export const mockAboutUsItems: IAboutEntry[] = [
  {
    icon: VerifiedUserOutlined,
    name: "Blockchain security",
  },
  {
    name: "100% Personalistation",
    icon: Image,
  },
  {
    name: "Level up your business",
    icon: RocketLaunchOutlined,
  },
];
