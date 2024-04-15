import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilComments,
  UilUserNurse,
  UilPuzzlePiece,
  UilQuestion,
  UilUsdSquare,
  UilMoneyWithdrawal,
} from "@iconscout/react-unicons";

import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";


import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
         
          {
            icon: UilEstate,
            heading: "Dashboard",
            key: "/",
         
          },
          {
            icon: UilUserNurse,
            heading: "Orthophonistes",
           
          },
          {
            icon: UilUsersAlt,
            heading: "Patients",
            key:"/Patients",
          },
          {
            icon: UilComments,
            heading: "Forum",
          },
          {
            icon: UilPuzzlePiece,
            heading: "Exercices",
          },
          {
            icon: UilQuestion,
            heading: "Questions",
          },
        
          
        ]}
      ></Menu>
    </div>
  );
}
// data.js
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    key: "/",
 
  },
  {
    icon: UilUserNurse,
    heading: "Orthophonistes",
    key:"./Orthophonistes",
  },
  {
    icon: UilUsersAlt,
    heading: "Patients",
    key:"./patients",
  },
  {
    icon: UilComments,
    heading: "Forum",
  },
  {
    icon: UilPuzzlePiece,
    heading: "Exercices",
  },
  {
    icon: UilQuestion,
    heading: "Questions",
  },

];


export default SideMenu;


export const cardsData = [
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Revenue",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Patients",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Patients",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Orthophonistes",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Orthophonistes",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];






export const UpdatesData = [
  {
    img: img1,
    name: "Amine ben salah",
    noti:
      "Que faire si je rencontre des problèmes de facturation ou de paiement liés à mon abonnement ?",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Dr Sami",
    noti:
      "Si je rencontre des difficultés techniques lors de mes consultations en ligne, comment puis-je les résoudre ?",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Dr Meryem",
    noti:
      "Que faire si je rencontre des difficultés à planifier ou à gérer mes consultations via la plateforme ?",
    time: "2 hours ago",
  },
];
