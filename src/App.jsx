import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import "./assets/background.webp";
import Footer from "./components/Footer";
const App = () => {
  const cardsData = [
    {
      title: "realme C75",
      tagline: "Dhulai Horai Hai",
      price: null,
      imageUrl:
        "https://image01.realme.net/general/20241212/1733967866096fa2982967549485db8c3259a0f9a1fe7.png.webp",
      isNew: true,
    },
    {
      title: "realme 13+ 5G",
      tagline: "Speed to Victory",
      price: "89,999",
      imageUrl:
        "https://image01.realme.net/general/20241108/1731062061605d960daec82634da8ae53a2b5bba2b081.png.webp",
      isNew: true,
    },
    {
      title: "realme GT 6",
      tagline: "Power meets AI",
      price: "149,999",
      imageUrl:
        "https://image01.realme.net/general/20240930/17276898714837028c74b7ec64f578595a0bec73bd213.png.webp",
      isNew: true,
    },
    {
      title: "realme Note 60",
      tagline: "Chapion Quality",
      price: "26,999",
      imageUrl:
        "https://image01.realme.net/general/20240919/17267273214814cc35277c25042d580c622fec0dad738.png.webp",
      isNew: true,
    },
    {
      title: "realme C61",
      tagline: "Hard to break",
      price: "32,999",
      imageUrl:
        "https://image01.realme.net/general/20240827/17247517057780f136750f9ab445193022ca17ab4b885.png.webp",
      isNew: true,
    },
    {
      title: "realme C65",
      tagline: "Unbreakable Chapion",
      price: "49,999",
      imageUrl:
        "https://image01.realme.net/general/20240726/17219881569684931245943754b279da88be96c1ba769.png.webp",
      isNew: true,
    },
    {
      title: "realme 12",
      tagline: "Power in Every Shot",
      price: "59,999",
      imageUrl:
        "https://image01.realme.net/general/20240624/171922460925609665c170ea145d0a40db9866d4a1d51.png.webp",
      isNew: true,
    },
    {
      title: "realme 12+ 5G",
      tagline: "Power in Every Shot",
      price: "74,999",
      imageUrl:
        "https://image01.realme.net/general/20240620/1718869504893402543bcb87c4708aedfe7ce612e8725.png.webp",
      isNew: true,
    },
    {
      title: "realme C63",
      tagline: "3 min Charge, 60 min T20 Match",
      price: "39,999",
      imageUrl:
        "https://image01.realme.net/general/20240607/1717742184050e38a613e33f146b49dfa47720aea45cf.png.webp",
      isNew: true,
    },
    {
      title: "realme Note 50",
      tagline: "Long-lasting Value Beast",
      price: "24,999",
      imageUrl:
        "https://image01.realme.net/general/20240221/170850139998146c2183ef4824e00ab6ed688ebc55037.png.webp",
      isNew: true,
    },
    {
      title: "realme C67",
      tagline: "108MP 3x In-sensor Zoom Camera, Snapdragon 685",
      price: "39,999",
      imageUrl:
        "https://image01.realme.net/general/20240105/1704419834105be51d94716d4469084d9ba9b1a904eb6.png.webp",
      isNew: true,
    },
    {
      title: "realme C53",
      tagline: "Champion Gold, 33W Champion Charge",
      price: "39,999",
      imageUrl:
        "https://image01.realme.net/general/20231129/17012403962026a15564d103748a6931a17233c223eb7.png.webp",
      isNew: true,
    },
  ];

  const cardsData2 = [
    {
      title: "realme Buds T110",
      tagline: "Listen in Full Color",
      price: '4,999',
      imageUrl:
        "https://image01.realme.net/general/20240628/1719540050662f1db6cdfd9104e5896203287689d7d2d.png.webp",
      isNew: true,
    },
    {
      title: "realme Buds Q",
      tagline: "Music Never Ends",
      price: "7,999",
      imageUrl:
        "https://image01.realme.net/general/20201111/1605080175371.jpg.webp",
      isNew: false,
    },
  ];
  return (
    <>
      <Navbar />
      <div className="back-ground">
        
      </div>
      <div>
        <h1 style={{ paddingLeft: "30px" }}>SmartPhones</h1>
      </div>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div>
        <h1 style={{ paddingLeft: "30px" }}>Accessories</h1>
        <p style={{display:'flex',justifyContent:'end',fontSize:'17px',marginTop:'-51px',fontWeight:'bold',marginRight:"160px"}}>Audio
        </p>
        {/* <p style={{display:'flex',justifyContent:'end',fontSize:'20px',marginTop:'-50px',fontWeight:'bold'}}>Smart Wearable
        </p> */}
      </div>
      <div className="card-container">
        {cardsData2.map((card, index) => (
          <Card2 key={index} {...card} />
        ))}
      </div>
    <Footer/>
    </>
  );
};

export default App;
