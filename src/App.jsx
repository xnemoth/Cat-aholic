import React, { useState, useEffect } from "react";
import ImageList from "./request.js";

function App() {
  const [tab, setTab] = useState("CATAHOLIC");
  const [numberImage, setNumberImage] = useState(20);
  const holic = ["CATAHOLIC", "WAIFU-HOLIC", "SKY-HOLIC"];
  const allTabTag = document.getElementsByClassName("head__menu-button"); // list of tabs

  //List of url response img from thisxdoesnotexist
  const requestURL = {
    CATAHOLIC: "https://d2ph5fj80uercy.cloudfront.net",
    "WAIFU-HOLIC": "https://thiswaifudoesnotexist.net/example-",
    "SKY-HOLIC": "https://firebasestorage.googleapis.com/v0/b/thisnightskydoesnotexist.appspot.com/o/images%2Fseed",
  };


  //side effects of title and tab selection
  useEffect(() => {
    document.title = tab;
    for (let i = 0; i < allTabTag.length; i++) {
      if (allTabTag[i].dataset.tab == tab) {
        allTabTag[i].classList.add("active");
      } else {
        allTabTag[i].classList.remove("active");
      }
    }
  }, [tab]);

  const chooseTab = (item) => {
    setTab(item.target.innerText);
    setNumberImage(20);
  };

  const chooseNumberImage = (e) => {
    e.preventDefault();
    setNumberImage(e.target[0].value > 100 ? (alert("Từ từ thôi!")) : e.target[0].value);
    e.target[0].value = "";
  }

  return (
    <React.Fragment>
      <div className="container mx-3 bg-head-background w-screen opacity-90 min-h-screen z-10">
        <div className="header">
          <h1 className="text-center space-x-5 text-pastelBlue font-bold mx-2">
            {tab.split('').join(' ')}
          </h1>
          <div className="flex flex-col">
            <div className="head__menu flex flex-row flex-wrap text-center align-middle justify-around w-100">
              {holic.map((item) => (
                <button
                  onClick={(e) => chooseTab(e)}
                  key={item}
                  data-tab={item}
                  className="head__menu-button basis-1/3 mx-2 my-2 py-6 px-6 w-50 rounded-md text-pastelHardPink  hover:text-pastelBlue bg-pastelSoftPink font-extrabold hover:bg-pastelPink"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="input__number-image text-center my-4">
            <form onSubmit={(e) => chooseNumberImage(e)} className="">
              <input
                type="number"
                className="p-4 rounded text-pastelBlue font-semibold border-pastelBlue"
                placeholder="Số ảnh cần tạo"
              />
              <button type="submit" className="text-pastelBlue bg-pastelLight rounded border-pastelBlue font-semibold mx-4 my-2 p-4">
                Tạo
              </button>
            </form>
          </div>
        </div>
        <div className="content flex flex-row justify-around align-middle flex-wrap mx-2 my-2">
          {ImageList(requestURL[tab], tab, numberImage).map((cat, index) => (
            <div key={index} className="content__item max-w-96 mx-4 my-4">
              <img src={cat} alt={tab} />
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
