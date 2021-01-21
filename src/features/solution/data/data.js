import IMAGES from "assets/images/images";
import { useTranslation } from 'react-i18next';

const khTieubieu = [
  
    {
      "title": "TÀI CHÍNH NGÂN HÀNG",
      "countProject": "6+",
      "tonggiatridautu": "20+",
      "color":["linear-gradient(#0063B0, #008CF8)"],
      "linecolor":["numb"],
      "cardimg":[
        "card-img2"
      ],
      dsLogo: [
        IMAGES.EXIMBANK,
        IMAGES.ACB,
        IMAGES.EVN,
        IMAGES.EXIMBANK,
        IMAGES.ACB,
        IMAGES.EVN,
      ]
    },
    {
      "title": "ĐIỆN LỰC",
      "countProject": "7+",
      "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
      "linecolor":["num_red_1"],
      "tonggiatridautu": "21+",
      "cardimg":[
        "card-img"
      ],
      dsLogo: [
        IMAGES.EXIMBANK,
        IMAGES.ACB,
        IMAGES.EVN,
        IMAGES.EXIMBANK,
        IMAGES.ACB,
      ]
    },
    {
      "title": "DOANH NGHIỆP VỪA VÀ NHỎ",
      "countProject": "6+",
      "tonggiatridautu": "20+",
      "color":["linear-gradient(#0063B0, #008CF8)"],
      "linecolor":["numb"],
      "cardimg":["card-img2"],
      dsLogo: [
        IMAGES.EXIMBANK,
        IMAGES.ACB,
        IMAGES.EVN,
      ]
    },
    {
        "title": "CÔNG AN",
        "countProject": "7+",
        "color":["linear-gradient(#FF2700, #D20311, #BA0707)"],
        "linecolor":["num_red_1"],
        "cardimg":[
          "card-img1"
        ],
        "tonggiatridautu": "21+",
        dsLogo: [
          IMAGES.EXIMBANK,
          IMAGES.ACB,
          IMAGES.EVN,
          IMAGES.ACB,
          IMAGES.BIDV,
        ]
      }
  ]
  
  export default khTieubieu;