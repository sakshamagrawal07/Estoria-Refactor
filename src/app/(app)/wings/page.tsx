"use Client";

import Card from "@/components/wings/card";
import "./global.css";

export default function Wings() {
  const cultural = [
    { index: "01", title: "ACTING" },
    { index: "02", title: "POETRY " },
    { index: "03", title: "SCRIPT-WRITING" },
    { index: "04", title: "CINEMATO-GRAPHY" },
  ];
  const nonCultural = [
    { index: "01", title: "MANAGEMENT" },
    { index: "02", title: "MARKETING" },
    { index: "03", title: "COORPORATE & PR" },
    { index: "04", title: "DESIGN" },
    { index: "05", title: "SOCIAL MEDIA" },
  ];

  const culturalCards = cultural.map((item) => <Card key={item.index} {...item} />);
  const nonCulturalCards = nonCultural.map((item) => <Card key={item.index} {...item} />);

  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="header">
          <span className="samkaran">OUR</span>
          W<span className="samkaran">INGS</span>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="header sub-heading">
          C<span className="samkaran">ULTURAL</span>
        </div>
      </div>
      <div className="content">
        {...culturalCards}
      </div>
      <div className="flex flex-row gap-2">
        <div className="header sub-heading">
          N<span className="samkaran">ON</span> C
          <span className="samkaran">ULTURAL</span>
        </div>
      </div>
      <div className="content">{...nonCulturalCards}</div>
    </>
  );
}