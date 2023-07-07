import style from "../styles/Experience.module.css";
import Girlcartoon from "../public/girlcartoon.png";
import Image from "next/image";

const listTitleStyle = {
  fontWeight: 900,
  fontFamily: "var(--fontfamily-alternative)",
  marginBottom: "4px",
  listStyleType: "none",
  fontSize: "22px",
};

const studies = (
  <ul className={style.ul}>
    <li key="one" style={listTitleStyle}>
      Studier
    </li>
    <li key="two">
      VT2023: 11 veckors LIA (praktik) på KB, Kungliga Biblioteket, som
      backendutvecklare.
    </li>
    <li key="three">
      HT2022: 10 veckors LIA (praktik) på SEB som backendutvecklare.
    </li>
    <li key="four">
      2021-2023: Javautvecklare, yrkeshögskolan Stockholms Tekniska Institut.
    </li>
    <li key="five">
      2014-2016: Kurser inom förskollärarprogrammet, Stockholms universitet.
    </li>
    <li key="six">
      2008-2011: Universitetsstudier vid Uppsala universitet och Sveriges
      Lantbruksuniversitet. Kurser i biologi, ekonomi, konstvetenskap, etnologi
      och geografi.
    </li>
    <li key="seven">
      2004-2007: Gymnasiet: Marinbiologi, Marina Läroverket, Stocksund.
    </li>
  </ul>
);

const jobs = (
  <ul className={style.ul}>
    <li key="eight" style={listTitleStyle}>
      Jobb
    </li>
    <li key="nine">
      2016-10 - 2017-01: Projektanställning som administratör på Action DataTeam
      AB/serveOffice ab, Stockholm. Registrering av bokföringsordrar och
      kontroll av bl.a. moms på fakturor (leverantörsreskontran) hos en av
      arbetsgivarens kunder.
    </li>
    <li key="ten">
      2013-2014: Praktik och vikariat på Flottiljens förskola, Täby, Stockholms
      län.
    </li>
    <li key="eleven">
      2012: Receptionist på Stockholm International School, Stockholm.
    </li>
    <li key="twelve">
      2007-2008: Butiksbiträde och köksassistent på Gamla Stans Fisk & Catering,
      Stockholm.
    </li>
  </ul>
);

const other = (
  <ul className={style.ul}>
    <li key="thirteen" style={listTitleStyle}>
      Övrigt
    </li>
    <li key="forteen">
      Sommaren 2011: Fyra veckors kurs i Miljökunskap och segling i regi av
      Skeppsholmens folkhögskola och Naturskyddsföreningen. <br></br> En veckas
      studier vid Skeppsholmens folkhögskola om Östersjöns miljö och tre veckors
      segling på galeasen S/Y Shamrock då vi bl.a. deltog i
      Naturskyddsföreningens havskampanj.
    </li>
    <li key="fifteen">
      Våren 2007: Elva veckors segling med skonaren S/Y Älva, i Karibien och
      sedan över Atlanten via Bermuda och Azorerna till Frankrike (ingick i min
      gymnasieutbildning). <br></br> Studier ombord, studiebesök iland,
      tjänstgöring ombord med olika arbetsuppgifter.
    </li>
  </ul>
);

const totalExperience = [studies, jobs, other];

const Experience = () => {
  return (
    <div className={style.Experience}>
      <div className={style.Content}>
        <div className={style.Container}>
          {totalExperience.map((experience) => {
            return (
              <div key="1" className={style.List}>
                {experience}
              </div>
            );
          })}
        </div>
        <div className={style.Photo}>
          <Image
            className={style.Girlcartoon}
            src={Girlcartoon}
            alt="girlcartoon"
            width={223}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
