const Zodiac = () => {
  const zodiac_data = [
    {
      hindi_name: "Mesha",
      eng_name: "Aries",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xaries_mesha.png.pagespeed.ic.giRq6Yi40O.webp",
    },
    {
      hindi_name: "Vrishabha",
      eng_name: "Taurus",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xtaurus_vrishabha.png.pagespeed.ic.-N4KZ0R5w6.webp",
    },
    {
      hindi_name: "Mithuna",
      eng_name: "Gemini",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xgemini_mithuna.png.pagespeed.ic.59DXkrbsPz.webp",
    },
    {
      hindi_name: "Karka",
      eng_name: "Cancer",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xcancer_karka.png.pagespeed.ic.VQrb_WFA_u.webp",
    },
    {
      hindi_name: "Simha",
      eng_name: "Leo",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xleo_simha.png.pagespeed.ic.667WG0YhnM.webp",
    },
    {
      hindi_name: "Kanya",
      eng_name: "Virgo",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xvirgo_kanya.png.pagespeed.ic.CntL9lhiYt.webp",
    },
    {
      hindi_name: "Tula",
      eng_name: "Libra",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xlibra_tula.png.pagespeed.ic.8vhvtG2RkC.webp",
    },
    {
      hindi_name: "Vrishchika",
      eng_name: "Scorpio",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xscorpio_vrishchika.png.pagespeed.ic.8RIQlEF8gE.webp",
    },
    {
      hindi_name: "Dhanu",
      eng_name: "Sagittarius",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xsagittarius_dhanu.png.pagespeed.ic.W5B86kYFMz.webp",
    },
    {
      hindi_name: "Makara",
      eng_name: "Capricorn",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xcapricorn_makara.png.pagespeed.ic.KTHpYDtEP6.webp",
    },
    {
      hindi_name: "Kumbha",
      eng_name: "Aquarius",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xaquarius_kumbha.png.pagespeed.ic.rYFRwTU4Yp.webp",
    },
    {
      hindi_name: "Meena",
      eng_name: "Pisces",
      image:
        "https://www.drikpanchang.com/images/jyotisha/zodiacs/anchor/100x100/xpisces_meena.png.pagespeed.ic.m1QqF-97Aj.webp",
    },
  ];
  return (
    <div className="zodiac-section">
      {zodiac_data.map((data) => {
        return (
          <div className="zodiac-item" key={data.hindi_name}>
            <p>{data.hindi_name}</p>
            <img
              src={data.image ? data.image : ""}
              alt={`${data.eng_name} zodiac sign`}
            />
            <span>{data.eng_name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Zodiac;
