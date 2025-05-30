import images from "../images";

const link =
  "https://res.cloudinary.com/do6sozxbo/image/upload/v1748609871/wedding-linh-dung";

const weddingInfo = [
  {
    time: {
      date: "07/06",
      year: "2025",
      time: "11:00",
      full: "Thứ bảy, Ngày 7 Tháng 6 năm 2025",
    },
    address: "Thôn 8, Xã Bình Minh, huyện Bù Đăng , tỉnh bình phước",
    street: "Thôn 8, Xã Bình Minh, huyện Bù Đăng , tỉnh bình phước",
    phone: "0397 177 262",
    posision: "bottom left",
  },
];

const profile = [
  {
    title: "bride",
    name: "Lưu Thị Dung",
    avatar: `${link}/black7`,
    images: [`${link}/black6`, `${link}/black8`],
  },
  {
    title: "groom",
    name: "Đặng Quang Linh",
    avatar: `${link}/white8`,

    images: [`${link}/white11`, `${link}/white7`],
  },
];

const daysInMonth = [
  {
    title: "mon",
    days: [0, 2, 9, 16, 23, 30],
  },
  {
    title: "tue",
    days: [0, 3, 10, 17, 24, 0],
  },
  {
    title: "wed",
    days: [0, 4, 11, 18, 25, 0],
  },
  {
    title: "thu",
    days: [0, 5, 12, 19, 26, 0],
  },
  {
    title: "fri",
    days: [0, 6, 13, 20, 27, 0],
  },
  {
    title: "sat",
    days: [0, 7, 14, 21, 27, 0],
  },
  {
    title: "sun",
    days: [1, 8, 15, 22, 29, 0],
  },
];

// const daysInMonth = [
//   {
//     title: "mon",
//     days: [4, 11, 18, 25, 0],
//   },
//   {
//     title: "tue",
//     days: [5, 12, 19, 26, 0],
//   },
//   {
//     title: "wed",
//     days: [6, 13, 20, 27, 0],
//   },
//   {
//     title: "thu",
//     days: [7, 14, 21, 28, 0],
//   },
//   {
//     title: "fri",
//     days: [1, 8, 15, 22, 29],
//   },
//   {
//     title: "sat",
//     days: [2, 9, 16, 23, 30],
//   },
//   {
//     title: "sun",
//     days: [3, 10, 17, 24, 0],
//   },
// ];

const brideBank = {
  name: "Trần Thị Thuý",
  bankName: "Vietinbank ",
  bankNumber: "107880386791",
};

const groomBank = {
  name: "Đặng Quang Linh",
  bankName: "MB BANK",
  bankNumber: "0397177262",
};

const inv = [`${link}/white4`, `${link}/red1`, `${link}/red4`];

const album = [
  `${link}/black1`,
  `${link}/black5`,
  `${link}/black4`,
  `${link}/red6`,
  `${link}/red7`,
  `${link}/red8`,
  `${link}/red10`,
  `${link}/white21`,
  `${link}/white12`,
  `${link}/white13`,
  `${link}/white14`,
];

const albumHeader = [`${link}/white13`, `${link}/hi3`];
const alland = [`${link}/white1`, `${link}/white2`];

const frontImg = `${link}/hi3`;

const albumA = [
  {
    imgs: [
      {
        id: 1,
        img: `${link}/white1`,
      },

      {
        id: 2,
        img: `${link}/white3`,
      },
      {
        id: 3,
        img: `${link}/white4`,
      },
      {
        id: 4,
        img: `${link}/white5`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 5,
        img: `${link}/white7`,
      },

      {
        id: 6,
        img: `${link}/white9`,
      },
      {
        id: 7,
        img: `${link}/white10`,
      },
      {
        id: 8,
        img: `${link}/white11`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 9,
        img: `${link}/white13`,
      },
      {
        id: 10,
        img: `${link}/white14`,
      },
      {
        id: 11,
        img: `${link}/white15`,
      },
      {
        id: 12,
        img: `${link}/white16`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 13,
        img: `${link}/white18`,
      },
      {
        id: 14,
        img: `${link}/white19`,
      },
      {
        id: 15,
        img: `${link}/white20`,
      },
      {
        id: 16,
        img: `${link}/white21`,
      },
    ],
  },
];

const albumB = [
  {
    imgs: [
      {
        id: 17,
        img: `${link}/red1`,
      },
      {
        id: 18,
        img: `${link}/red2`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 19,
        img: `${link}/red3`,
      },
      {
        id: 20,
        img: `${link}/red4`,
      },
    ],
  },

  {
    imgs: [
      {
        id: 21,
        img: `${link}/red5`,
      },
      {
        id: 22,
        img: `${link}/red6`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 23,
        img: `${link}/red7`,
      },
      {
        id: 24,
        img: `${link}/red10`,
      },
    ],
  },
];

const albumC = [
  {
    imgs: [
      {
        id: 25,
        img: `${link}/hi2`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 26,
        img: `${link}/hi4`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 27,
        img: `${link}/hi6`,
      },
    ],
  },
  {
    imgs: [
      {
        id: 28,
        img: `${link}/hi7`,
      },
    ],
  },
];

const finalImages = [
  `${link}/hi7`,
  `${link}/hi5`,
  `${link}/hi1`,
  `${link}/hi6`,
];

// config Confetti

const configConfetti = {
  angle: "188",
  spread: 360,
  startVelocity: "50",
  elementCount: "133",
  dragFriction: 0.12,
  duration: 3000,
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const albums = [...albumA, ...albumB, ...albumC];
export {
  weddingInfo,
  daysInMonth,
  profile,
  brideBank,
  groomBank,
  album,
  finalImages,
  inv,
  alland,
  albumA,
  albumB,
  albumC,
  albums,
  configConfetti,
  albumHeader,
  frontImg,
};
