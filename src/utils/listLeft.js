import fast from "../images/fast.svg";
import returning from "../images/returning.svg";
import warrenty from "../images/warranty.svg";
import frame from "../images/Frame 316.svg";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const listLeft = [
  {
    url: `${fast}`,
    title: "ارسال سریع",
    subTitle: "ارسال با پست ویژه (3 روزه)",
  },
  {
    url: `${returning}`,
    title: "مرجوعی تا 7 روز",
    subTitle: "درصورت وجود مشکل در کالا",
  },
  {
    url: `${warrenty}`,
    title: "ضمانت 6 ماهه",
    subTitle: "درصورت وجود مشکل در کالا",
  },
  {
    url: `${frame}`,
    title: "امکان خرید حضوری",
    subTitle: "پروفایل فروشگاه",
    icon: <KeyboardArrowLeftOutlinedIcon />,
  },
];
export default listLeft;
