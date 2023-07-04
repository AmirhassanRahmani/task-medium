import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import telegram from "../images/telegram.svg";
import whatsapp from "../images/Whatsapp.svg";
import twitter from "../images/Twitter - Original.svg";
import instagram from "../images/Instagram - Negative.svg";
import iconSans from "../images/Iconsax.svg";

const listProduct = [
  {
    title: "کد کالا:",
    info: "123456",
  },
  {
    title: "نام فروشگاه:",
    info: "مهراشاپ",
    icon: <KeyboardArrowLeftOutlinedIcon />,
  },
  {
    title: "تگ‌ها:",
    info: "روغن درمانی",
  },
  {
    title: "اشتراک‌گذاری:",
    urls: [
      `${telegram}`,
      `${twitter}`,
      `${instagram}`,
      `${whatsapp}`,
      `${iconSans}`,
    ],
  },
];
export default listProduct;
