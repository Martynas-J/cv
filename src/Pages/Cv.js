import { useState } from 'react';
import { CV_DATA } from "../Data";
import './Cv.scss';
import { Link, Router } from 'react-router-dom';
import 'react-range-slider-input/dist/style.css';
import Container from "../Components/Container/Container";
import ReactPDF, { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../Components/MyDocument/MyDocument';

function Cv() {
  const { name, tel, email, address, aboutMe, links, hobbies, driverLicenses, personInfo, experience, education, skills, courses } = CV_DATA

  ReactPDF.render(<MyDocument />, `C:/Users/aurim/Desktop/front end/example.pdf`);

  const contactsElement = tel || email || address ?
    <div className="person-data-box">
      <h2 className="title">KONTAKTAI</h2>
      {tel ? <span className="person-data-content"><span className="bold">Telefono Numeris:</span>{tel}</span> : ""}
      {email ? <span className="person-data-content"><span className="bold">El.paštas:</span>{email}</span> : ""}
      {address ? <span className="person-data-content"><span className="bold">Adresas:</span>{address}</span> : ""}
    </div> : ""
  const aboutMeElement =
    <div className="person-data-box">
      <h2 className="title">APIE MANE</h2>
      <span className="person-data-content">{aboutMe}</span>
    </div>

  const linksElement = links ?
    <div className="person-data-box">
      <h2 className="title">NUORODOS</h2>
      {links.map((link, index) =>
        < Router key={index}>
          <Link className="link" target="blank" to={link.url}><span className="bold">{link.name}:</span>{link.url}</Link>
        </Router>
      )}
    </div > : ""

  const hobbiesElement = hobbies ?
    <div className="person-data-box">
      <h2 className="title">POMĖGIAI</h2>
      <span>{hobbies.join(", ")}</span>
    </div > : ""

  const driverLicensesElement = driverLicenses ?
    <div className="person-data-box">
      <h2 className="title">VAIRUOTOJO PAŽYMĖJIMAS</h2>
      <span>
        <span className="bold">Vairuotojo pažymėjimo {driverLicenses.length > 1 ? "kategorijos" : "kategorija"}
        </span>{driverLicenses.join(", ")}
      </span>
    </div > : ""

  const personInfoElement = personInfo ?
    <div className="person-data-box">
      <h2 className="title">ASMENINĖ INFORMACIJA</h2>
      {personInfo.map((item, index) =>
        <span key={index} className="person-data-content"><span className="bold">{item.title}</span>{item.value}</span>
      )}
    </div > : ""

  const experienceElement = experience ?
    <div className="person-data-box">
      <h2 className="title line">DARBO PATIRTIS</h2>
      <span>{experience}</span>
    </div > : ""

  const educationElement = education ?
    <div className="person-data-box split">
      <h2 className="title line">IŠSILAVINIMAS</h2>
      {education.map((item, index) =>
        <div key={index} className="person-data-content odd">
          <span className="bold">{item.title}</span>
          {item.place}, {item.institution} {item.year}
          <p>{item.describe}</p>
        </div>
      )}
    </div > : ""

  const skillsElement = skills ?
    <div className="person-data-box split">
      <h2 className="title line">ĮGUDŽIAI</h2>
      {skills.map((skill, index) =>
        <div key={index} className="person-data-content">
          <span className="bold">{skill.title}</span>
          <input type="range" value={skill.lvl} max="10" readOnly></input>
        </div>
      )}
    </div > : ""

  const coursesElement = courses ?
    <div className="person-data-box split">
      <h2 className="title line">KURSAI</h2>
      {courses.map((course, index) =>
        <div key={index} className="person-data-content">
          <span className="person-data-content"><span className="bold">{course.name}</span>{course.institution} {course.startDate} - {course.endDate}</span>
        </div>
      )}
    </div > : ""

  const [pdfReady, setPdfReady] = useState(false);

  const handlePdfGenerate = () => {
    setPdfReady(true);
  };

  return (
    <Container>
      <header>
        {name}
      </header>
      <div className="wrapper">
        <aside className="sidebar-content">
          {contactsElement}
          {aboutMe && aboutMeElement}
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
      {pdfReady ? (
        <PDFViewer>
          <MyDocument />
        </PDFViewer>
      ) : (
        <button onClick={handlePdfGenerate}>Generuoti PDF</button>
      )}
    </Container>
  )
}

export default Cv;
