import caseImg1 from "../img/PC/1/1.png";
import caseImg2 from "../img/PC/2/1.png";
import caseImg3 from "../img/PC/3/1.png";
import caseImg4 from "../img/PC/4/1.png";
import caseImg5 from "../img/PC/5/1.png";
import caseImg6 from "../img/PC/6/1.png";
import caseImg7 from "../img/PC/7/1.png";
import caseImg8 from "../img/PC/8/1.png";
import caseImg9 from "../img/PC/9/1.png";
// IMG SCREEN
import scrImg1 from "../img/SCREEN/1/scr1.png";
import scrImg2 from "../img/SCREEN/2/scr1.png";
import scrImg3 from "../img/SCREEN/3/scr1.png";
import scrImg4 from "../img/SCREEN/4/scr1.png";
import scrImg5 from "../img/SCREEN/5/scr1.png";
import scrImg6 from "../img/SCREEN/6/scr1.png";
import scrImg7 from "../img/SCREEN/7/scr1.png";
import scrImg8 from "../img/SCREEN/8/scr1.png";
import scrImg9 from "../img/SCREEN/9/scr1.png";
import scrImg10 from "../img/SCREEN/10/scr1.png";
const products = [
  {
    id: "01",
    productName: "PC GVN Intel i5-12400F/ VGA RX 6600 (H610)",
    price: "7,990,000₫",
    originalPrice: "9,990,000₫",
    discount: "-20%",
    category: "case",
    imgUrl: caseImg1,
    firm: "",
  },
  {
    id: "02",
    productName:
      "PC GVN x ASUS EVANGELION 2 (Intel i9-14900K/ VGA RTX 4090) (Powered by ASUS)",
    price: "127.500.000₫",
    originalPrice: "151.100.000₫",
    discount: "-16%",
    category: "case",
    imgUrl: caseImg2,
    firm: "",
  },
  {
    id: "03",
    productName: "PC GVN Intel i3-12100F/ VGA RX 6600",
    price: "11.790.000₫",
    originalPrice: "12.530.000₫",
    discount: "-6%",
    category: "case",
    imgUrl: caseImg3,
    firm: "",
  },
  {
    id: "04",
    productName: "PC GVN Intel i5-12400F/ VGA RTX 4060",
    price: "22.990.000₫",
    originalPrice: "27.330.000₫",
    discount: "-6%",
    category: "case",
    imgUrl: caseImg4,
    firm: "",
  },
  {
    id: "05",
    productName: "PC GVN Intel i5-12400F/ VGA GTX 1650",
    price: "14.790.000₫",
    originalPrice: "15.640.000₫",
    discount: "-5%",
    category: "case",
    imgUrl: caseImg5,
    firm: "",
  },
  {
    id: "06",
    productName: "PC GVN Intel i5-12400F/ VGA RX 6600",
    price: "15.990.000₫",
    originalPrice: "16.980.000₫",
    discount: "-6%",
    category: "case",
    imgUrl: caseImg6,
    firm: "",
  },
  {
    id: "07",
    productName:
      "PC GVN G-STUDIO AMD R9-7900X/ VGA RTX 4070 Ti (Powered by ASUS)",
    price: "75.990.000₫",
    originalPrice: "79.990.000₫",
    discount: "-6%",
    category: "case",
    imgUrl: caseImg7,
    firm: "",
  },
  {
    id: "08",
    productName:
      "PC GVN G-STUDIO AMD R9-7950X3D/ VGA RX 7900 XTX (Powered by ASUS)",
    price: "96.990.000₫",
    originalPrice: "98.380.000₫",
    discount: "-1%",
    category: "case",
    imgUrl: caseImg8,
    firm: "",
  },
  {
    id: "09",
    productName: "PC GVN AMD R9-7950X/VGA RTX 4090",
    price: "115.990.000₫",
    originalPrice: "122.420.000₫",
    discount: "-5%",
    category: "case",
    imgUrl: caseImg9,
    firm: "",
  },

  ///// COMPUTER SCREEN
  {
    id: "10",
    productName: "Màn hình AOC 24B3HM/74 (VA - FHD - 75Hz)",
    price: "2,150,000₫",
    originalPrice: "2,150,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg2,
    firm: "AOC",
  },
  {
    id: "20",
    productName: "Màn hình AOC 24B3HM/74 (VA - FHD - 75Hz)",
    price: "2,150,000₫",
    originalPrice: "2,150,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg2,
    firm: "AOC",
  },
  {
    id: "21",
    productName: "Màn hình AOC 24B3HM/74 (VA - FHD - 75Hz)",
    price: "2,150,000₫",
    originalPrice: "2,150,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg2,
    firm: "AOC",
  },
  {
    id: "11",
    productName: "Màn Hình AOC 24G2Z (IPS/ Full HD/ 240Hz/ 0.5ms)",
    price: "2,150,000₫",
    originalPrice: "5,699,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg2,
    firm: "AOC",
  },
  {
    id: "12",
    productName: "Màn Hình AOC 25G3Z/74 ( IPS/ FHD/ 240Hz )",
    price: "2,150,000₫",
    originalPrice: "5,490,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg3,
    firm: "AOC",
  },
  {
    id: "13",
    productName:
      "Màn hình Asus PA328QV (31.5 inch/WQHD/IPS/75Hz/5ms/350 nits/HDMI+DP+USB+Audio)",
    price: "2,150,000₫",
    originalPrice: "14,199,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg4,
    firm: "ASUS",
  },
  {
    id: "14",
    productName:
      "Màn hình Asus Pro Art PA279CV (27 inch/UHD/IPS/60Hz/5ms/350 nits/HDMI+DP+USB+USBC+Audio)",
    price: "2,150,000₫",
    originalPrice: "12,699,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg5,
    firm: "ASUS",
  },
  {
    id: "15",
    productName:
      "Màn hình Asus ProArt PA247CV (23.8inch/FHD/IPS/75Hz/5ms/300nits/HDMI+DP+USBC+Audio)",
    price: "2,150,000₫",
    originalPrice: "6,299,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg6,
    firm: "ASUS",
  },
  {
    id: "16",
    productName:
      "Màn hình Asus ProArt PA248QV (24inch/WUXGA/IPS/75Hz/5ms/300nits/HDMI+DP+DSub+Audio+USB)",
    price: "2,150,000₫",
    originalPrice: "5,899,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg7,
    firm: "ASUS",
  },
  {
    id: "17",
    productName: "Màn hình ASUS ProArt PA248QV 24″ IPS 75Hz -",
    price: "2,150,000₫",
    originalPrice: "5,890,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg8,
    firm: "ASUS",
  },
  {
    id: "18",
    productName:
      "Màn hình Asus ProArt PA278CV (27inch/WQHD/IPS/75Hz/5ms/350nits/HDMI+DP+USBC+Audio)",
    price: "2,150,000₫",
    originalPrice: "10,199,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg9,
    firm: "ASUS",
  },
  {
    id: "19",
    productName: "Màn hình Asus ProArt PA278QV-P (27 inch/WQHD/IPS/75Hz/5ms)",
    price: "2,150,000₫",
    originalPrice: "9,099,000₫",
    discount: "",
    category: "screen",
    imgUrl: scrImg10,
    firm: "ASUS",
  },
];
export default products;
