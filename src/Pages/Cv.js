import { useEffect, useState } from 'react';
import { CV_DATA } from "../Data";
import './Cv.scss';
import { Link, useNavigate } from 'react-router-dom';
import 'react-range-slider-input/dist/style.css';
import Container from "../Components/Container/Container";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';


import MyDocument from '../Components/MyDocument/MyDocument';

function Cv() {

  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem("data")));
  const [pdfReady, setPdfReady] = useState(false);

  const { name, tel, email, address, aboutMe, links, hobbies, driverLicenses, personInfo, experience, education, skills, courses } = storedData || CV_DATA

  const navigate = useNavigate()

  const contactsElement = tel || email || address ? (
    <div className="person-data-box">
      <h2 className="title">KONTAKTAI</h2>
      {tel && <span className="person-data-content"><span className="bold">Telefono Numeris:</span>{tel}</span>}
      {email && <span className="person-data-content"><span className="bold">El.paštas:</span>{email}</span>}
      {address && <span className="person-data-content"><span className="bold">Adresas:</span>{address}</span>}
    </div>
  ) : null;

  const aboutMeElement = aboutMe ? (
    <div className="person-data-box">
      <h2 className="title">APIE MANE</h2>
      <span className="person-data-content">{aboutMe}</span>
    </div>
  ) : null;

  const linksElement = links ? (
    <div className="person-data-box">
      <h2 className="title">NUORODOS</h2>
      {links.map((link, index) => (
        <Link key={index} className="link" target="blank" to={link.url}><span className="bold">{link.name}:</span>{link.url}</Link>
      ))}
    </div>
  ) : null;

  const hobbiesElement = hobbies ? (
    <div className="person-data-box">
      <h2 className="title">POMĖGIAI</h2>
      <span className="person-data-content" >{hobbies.join(", ")}</span>
    </div>
  ) : null;

  const driverLicensesElement = driverLicenses ? (
    <div className="person-data-box">
      <h2 className="title">VAIRUOTOJO PAŽYMĖJIMAS</h2>
      <span className="person-data-content">
        <span className="bold">Vairuotojo pažymėjimo {driverLicenses.length > 1 ? "kategorijos" : "kategorija"}
        </span>{driverLicenses.join(", ")}
      </span>
    </div>
  ) : null;

  const personInfoElement = personInfo ? (
    <div className="person-data-box">
      <h2 className="title">ASMENINĖ INFORMACIJA</h2>
      {personInfo.map((item, index) => (
        <span key={index} className="person-data-content"><span className="bold">{item.title}</span>{item.value}</span>
      ))}
    </div>
  ) : null;

  const experienceElement = experience ? (
    <div className="person-data-box">
      <h2 className="title line">DARBO PATIRTIS</h2>
      <span>{experience}</span>
    </div>
  ) : null;

  const educationElement = education ? (
    <div className="person-data-box split">
      <h2 className="title line">IŠSILAVINIMAS</h2>
      {education.map((item, index) => (
        <div key={index} className="person-data-content odd">
          <span className="bold">{item.title}</span>
          {item.place}, {item.institution} {item.year}
          <p>{item.describe}</p>
        </div>
      ))}
    </div>
  ) : null;

  const skillsElement = skills ? (
    <div className="person-data-box split">
      <h2 className="title line">ĮGUDŽIAI</h2>
      {skills.map((skill, index) => (
        <div key={index} className="person-data-content">
          <span className="bold">{skill.title}</span>
          <input type="range" value={skill.lvl} max="10" readOnly></input>
        </div>
      ))}
    </div>
  ) : null;

  const coursesElement = courses ? (
    <div className="person-data-box split">
      <h2 className="title line">KURSAI</h2>
      {courses.map((course, index) => (
        <div key={index} className="person-data-content">
          <span className="person-data-content"><span className="bold">{course.name}</span>{course.institution} {course.startDate} - {course.endDate}</span>
        </div>
      ))}
    </div>
  ) : null;

  const handlePdfGenerate = () => {
    setPdfReady(true);
  };
  const FormHandler = () => {
    navigate(`/form`);
  };
  const deleteHandler = () => {
    localStorage.removeItem("data");
    setStoredData("")
  };
  const editHandler = () => {
    navigate(`/form/edit`);
  };

  return (
    <>
      <Container>
        <div className='pdf-control-wrapper'>
          <button className='button' onClick={FormHandler}>Įvesti naujus duomenis</button>
          <button className='button' onClick={deleteHandler}>Ištrinti duomenis</button>
          <button className='button' onClick={editHandler}>Keisti duomenis</button>

          {pdfReady ? (
            <div className='pdf-viewer'>
              <button className="pdf-viewer-exit" onClick={() => setPdfReady(false)}> X</button>
              <PDFViewer width={"100%"} height={"100%"}>
                <MyDocument data={storedData || CV_DATA} />
              </PDFViewer>
            </div>
          ) : (
            <button className='button' onClick={handlePdfGenerate}>Generuoti PDF</button>
          )}

          <PDFDownloadLink document={<MyDocument data={storedData || CV_DATA} />} fileName="cv.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Kraunama...' : 'Parsisiųsti PDF'
            }

          </PDFDownloadLink>
        </div>
        <header>

          {name}
        </header>
        <div className="wrapper">
          <aside className="sidebar-content">
            {contactsElement}
            {aboutMeElement}
            {linksElement}
            {hobbiesElement}
            {driverLicensesElement}
            {personInfoElement}
          </aside>
          <main className="main-content">
            {experienceElement}
            {educationElement}
            {skillsElement}
            {coursesElement}

          </main>
        </div>
      </Container>
    </>
  );
}

export default Cv;
