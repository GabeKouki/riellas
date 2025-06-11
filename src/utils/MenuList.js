import DineInImage from "../assets/DineInImage.png";
import TakeOutImage from "../assets/TakeoutImage.png";
import CateringImage from "../assets/CateringImage.png";
import PartyImage from "../assets/PartyImage.png";

export const menuList = [
  {
    displayName: "Dine-In Menu",
    endpoint: "dine-in",
    infoText: "Experience our full menu in our warm, welcoming atmosphere",
    image: DineInImage
  },
  {
    displayName: "Take-Out Menu",
    endpoint: "take-out",
    infoText: "Enjoy our homestyle cooking in your own home",
    image: TakeOutImage
  },
  {
    displayName: "Catering Menu",
    endpoint: "catering", 
    infoText: "Let us bring the flavor to your next event",
    image: CateringImage
  },
  { displayName: "Party Packages", 
    endpoint: "party-packages",
    infoText: "Create memorable celebrations with our custom packages",
    image: PartyImage
  },
];