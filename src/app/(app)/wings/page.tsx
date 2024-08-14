"use client";

import Card from "@/components/wings/card";
import { differentWingTypes } from "@/lib/differentWingTypes";
import { useEffect, useState } from "react";
// import "./global.css";

export default function Wings() {

  const [data, setData] = useState([])
  const [culturalCards, setCulturalCards] = useState([])
  const [nonCulturalCards, setNonCulturalCards] = useState([])

  useEffect(() => {
    fetch('../../admin/api/wings')
      .then(response => {
        console.log("JSON RES", response);
        return response.json();
      })
      .then(res => {
        const fetchedData = res.message;
        setData(fetchedData); // Assuming setData is a useState function

        console.log("RES : ", fetchedData);

        differentWingTypes.map((wingType) => {
          //@ts-ignore
          const cardData = fetchedData[wingType] || [];
          if (wingType === "Cultural Wings") {
            console.log("Card Data : ", cardData);
            const temp = cardData.map((item: any) => <Card key={item._id} name={item.name} description={item.description} />);
            //@ts-ignore
            setCulturalCards([...temp]);
          } else {
            const temp = cardData.map((item: any) => <Card key={item._id} name={item.name} description={item.description} />);
            //@ts-ignore
            setNonCulturalCards([...temp]);
          }
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });

  }, []);

  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="header">
          <span className="samkaran">OUR</span>
          W<span className="samkaran">INGS</span>
        </div>
      </div>
      {culturalCards.length !== 0 && <div className="flex flex-row gap-2">
        <div className="header sub-heading">
          C<span className="samkaran">ULTURAL</span>
        </div>
      </div>}
      <div className="content">
        {...culturalCards}
      </div>
      {nonCulturalCards.length !== 0 && <div className="flex flex-row gap-2">
        <div className="header sub-heading">
          N<span className="samkaran">ON</span> C
          <span className="samkaran">ULTURAL</span>
        </div>
      </div>}
      <div className="content">
        {...nonCulturalCards}
      </div>
    </>
  );
}