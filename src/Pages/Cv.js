import { useEffect, useState } from 'react';
import { CV_DATA } from "../Data";
import './Cv.scss';
import { Link, useNavigate } from 'react-router-dom';
import 'react-range-slider-input/dist/style.css';
import Container from "../Components/Container/Container";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';


import MyDocument from '../Components/MyDocument/MyDocument';

function Cv() {

  const [headerBackgroundColor, setheaderBackgroundColor] = useState('#000000')
  const [headerColor, setheaderColor] = useState('#ffffff')
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [storedData, setStoredData] = useState(JSON.parse(localStorage.getItem("data")));
  const [pdfReady, setPdfReady] = useState(false);

  const { name, phone, email, address, aboutMe, links, hobbies, driverLicenses, birthday, nationality, maritalStatus, experience, education, skills, courses } = storedData || CV_DATA

  const navigate = useNavigate()

  const contactsElement = phone || email || address ? (
    <div className="person-data-box">
      <h2 className="title">KONTAKTAI</h2>
      {phone && <span className="person-data-content"><span className="bold">Telefono Numeris:</span>{phone}</span>}
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
      <span className="person-data-content" >{hobbies}</span>
    </div>
  ) : null;

  const driverLicensesElement = driverLicenses ? (
    <div className="person-data-box">
      <h2 className="title">VAIRUOTOJO PAŽYMĖJIMAS</h2>
      <span className="person-data-content">
        <span className="bold">Vairuotojo pažymėjimo {driverLicenses.length > 1 ? "kategorijos" : "kategorija"}
        </span>{driverLicenses}
      </span>
    </div>
  ) : null;

  const personalInfoElement = birthday || nationality || maritalStatus ? (
    <div className="person-data-box">
      <h2 className="title">ASMENINĖ INFORMACIJA</h2>
      <span className="person-data-content">
        <span className="bold">Gimimo data: </span>{birthday && birthday}
      </span>
      <span className="person-data-content">
        <span className="bold">Tautybė: </span>{nationality && nationality}
      </span>
      <span className="person-data-content">
        <span className="bold">Šeimyninė padėtis: </span>{maritalStatus && maritalStatus}
      </span>

    </div>
  ) : null;

  const experienceElement = experience.length > 0 ? (
    <div className="person-data-box split">
      <h2 className="title line">DARBO PATIRTIS</h2>
      {experience.map((item, index) => <span key={index}>{item}</span>)}
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
  const selectPhotoHandler = e => setProfilePhoto(e.target.files[0]);
  return (
    <>
      <Container>
        <div className='pdf-control-wrapper'>
          <label htmlFor="profilePhoto" className="img-btn">Pasirinkti Nuotrauka</label>
          <input className='hidden-input' type="file" id="profilePhoto" name="profilePhoto" onChange={selectPhotoHandler} />
          <button className='button' onClick={FormHandler}>Įvesti naujus duomenis</button>
          <button className='button' onClick={deleteHandler}>Ištrinti duomenis</button>
          <button className='button' onClick={editHandler}>Keisti duomenis</button>

          {pdfReady ? (
            <div className='pdf-viewer'>
              <button className="pdf-viewer-exit" onClick={() => setPdfReady(false)}> X</button>
              <PDFViewer >
                <MyDocument profilePhoto={profilePhoto} colors={{ headerBackgroundColor, headerColor }} data={storedData || CV_DATA} />
              </PDFViewer>
            </div>
          ) : (
            <button className='button' onClick={handlePdfGenerate}>Generuoti PDF</button>
          )}

          <PDFDownloadLink document={<MyDocument profilePhoto={profilePhoto} colors={{ headerBackgroundColor, headerColor }} data={storedData || CV_DATA} />} fileName="cv.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Kraunama...' : 'Parsisiųsti PDF'
            }
          </PDFDownloadLink>
          <input className='color-input' id='headerBackgroundColor' value={headerBackgroundColor} type='color' onChange={(e) => setheaderBackgroundColor(e.target.value)}></input>
          <input className='color-input' id='headerColor' type='color' value={headerColor} onChange={(e) => setheaderColor(e.target.value)}></input>
        </div>
        <header style={{ background: headerBackgroundColor, color: headerColor }}>
          {profilePhoto ? <img className='small-photo' src={URL.createObjectURL(profilePhoto)} alt="Profilio nuotrauka" />
            : <div className='empty' />}
          <h1 className='name'>{name}</h1>
        </header>
        <div className="wrapper">
          <aside className="sidebar-content">
            {contactsElement}
            {aboutMeElement}
            {linksElement}
            {hobbiesElement}
            {driverLicensesElement}
            {personalInfoElement}
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
