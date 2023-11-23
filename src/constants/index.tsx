import {
  GridView,
  ArticleOutlined,
  AddLinkOutlined,
  PieChartOutlined,
  PaidOutlined,
  ManageAccountsOutlined,
} from "@mui/icons-material";

export const HomeSidebarLinks = [
  {
    image: <GridView />,
    route: "/",
    label: "Dashboard",
  },
  {
    image: <ArticleOutlined />,
    route: "/posts",
    label: "Maqolalar",
  },
  {
    image: <AddLinkOutlined />,
    route: "/streams",
    label: "Oqimlar",
  },
  {
    image: <PieChartOutlined />,
    route: "/stats",
    label: "Statistika",
  },
  {
    image: <PaidOutlined />,
    route: "/transactions",
    label: "To'lov",
  },
];

export const ProfileSidebarLinks = [
  {
    image: <ManageAccountsOutlined />,
    route: "/profile",
    label: "Shaxsiy ma'lumotlar",
  },
  // {
  //   image: <EmailOutlined />,
  //   route: "/profile/change-email",
  //   label: "Emailni o'zgartirish",
  // },
  // {
  //   image: <LockClockOutlined />,
  //   route: "/profile/change-password",
  //   label: "Parolni o'zgartirish",
  // },
];

enum IFormInput {
  card_number = "card_number",
  card_name = "card_name",
  amount = "amount",
}

export const paymentRequestItems = [
  {
    id: 1,
    title: "Karta raqam",
    descr: "Kartadagi 16 xonali karta raqamini kiriting",
    input_name: IFormInput.card_number,
    input_type: "number",
    error_label: "Karta raqam",
    minLength: 16,
    minLength_message: `Karta raqami kamida 16 belgi bo'lishi kerak`,
    maxLength: 16,
    input_placeholder: "0000-0000-0000-0000",
  },
  {
    id: 2,
    title: "Karta nomi",
    descr: "To'liq holda yozilsin",
    input_name: IFormInput.card_name,
    input_type: "text",
    error_label: "Karta nomi",
    minLength: 5,
    minLength_message: `Karta nomi kamida kamida 5 ta harf bo'lishi kerak`,
    input_placeholder: "Juratbek Xudayberganov",
  },
  {
    id: 3,
    title: "Summani kiriting",
    error_label: "Summa miqdori",
    descr: "Summa kiritilishi shart!",
    input_name: IFormInput.amount,
    input_type: "number",
    min: 100,
    minLength_message: `Minimal pul yechish miqdori 100 so'm`,
    input_placeholder: "50000",
  },
];

export const PRIMARY_COLOR = "#9D1F4F";
