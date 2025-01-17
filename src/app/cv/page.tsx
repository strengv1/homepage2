"use client"

import { useState } from 'react'
import CVImage from "@/../public/me-CV.jpg"
import Image from 'next/image'


const CV = () => {
  const [language, setLanguage] = useState("FI")

  return (
    <div className="container cv-container">
      <div className="row cv-container">
        
        <div className="col-md-4 cv-left">   {/* CV left */}
          <div className="row">
            <Image src={CVImage} alt="Ville Strengell" className="cv-image"/>
          </div>
          {/* Yhteystiedot */}
          <div className="row">
            {language === 'FI' && <h2 className="cv-left-title">Yhteystiedot</h2>}
            {language === 'EN' && <h2 className="cv-left-title">Contact</h2>}

            <p className="cv-left-paragraph">
              Jämeräntaival 10 H 138,<br/>
              02150 Espoo
            </p>
            <p className="cv-left-paragraph">
              +358 50 494 5684
            </p>
            <p className="cv-left-paragraph">
              villes-97@hotmail.com
            </p>
            <p className="cv-left-paragraph">
              https://www.linkedin.com/in/ville-strengell-40b3a01a0/
            </p>
            <p className="cv-left-paragraph">
              github.com/strengv1
            </p>
          </div>
          {/* Ohjelmointi */}
          <div className="row">
            {language === 'FI' && <h2 className="cv-left-title">Ohjelmointi</h2>}
            {language === 'EN' && <h2 className="cv-left-title">Skills</h2>}

            <p className="cv-left-paragraph">
              Javascript<br/>
              React<br/>
              Node<br/>
              Delphi<br/>
              HTML/CSS<br/>
              Python<br/>
              SQL<br/>
              <br/>
              {language === 'FI' && <>Full Stack Open -kurssi suoritettu erinomaisin arvosanoin</>}
              {language === 'EN' && <>The course Full Stack Open completed with excellent grades.</>}
           
            </p>
          </div>
          {/* Muut taidot */}
          <div className="row">
            {language === 'FI' && <h2 className="cv-left-title">Muut taidot</h2>}
            {language === 'EN' && <h2 className="cv-left-title">Other Skills</h2>}

            <p className="cv-left-paragraph">
              Matlab, Excel, R, Express, Mongoose
            </p>
          </div>
          {/* Kielitaito */}
          <div className="row">
            {language === 'FI' && <h2 className="cv-left-title">Kielitaito</h2>}
            {language === 'EN' && <h2 className="cv-left-title">Language</h2>}
            
            {language === 'FI' &&
              <p className="cv-left-paragraph">
                Suomi - Äidinkieli<br/>
                Englanti - Erinomainen<br/>
                Ruotsi - Alkeet<br/>
                Espanja - Alkeet<br/>
              </p>}
            {language === 'EN' &&
              <p className="cv-left-paragraph">
                Finnish - Native<br/>
                English - Excellent<br/>
                Swedish - Basics<br/>
                Spanish - Basics
              </p>}


          </div>
        </div>

        {/* ------------------------- */}

        <div className="col-md-8 cv-right">   {/* CV right */}
          <div className="lang-buttons">
            <button onClick={() => setLanguage('FI')}>fi</button> / <button onClick={() => setLanguage('EN')}>en</button>
          </div>
          
          <div className="row">               {/* Title */}
            <h1>Ville <span>Strengell</span></h1>
            {language === 'FI' && <h3>Ohjelmistokehittäjä</h3>}
            {language === 'EN' && <h3>Software developer</h3>}
          </div>

          <div className="cv-line" />

          <div className="row"> {/* Koulutus */}
            {language === 'FI' && <h2>Koulutus</h2>}
            {language === 'EN' && <h2>Education</h2>}
            
            <p>
            {language === 'FI' &&
            <>
              <span className="cv-italic">Aalto-yliopisto | 2020 →</span><br/>
              Diplomi-insinööri, Automaatiotekniikka<br/>
              Sivuaine: Tietotekniikka
            </>}

            {language === 'EN' && <>
              <span className="cv-italic">Aalto University | 2020 →</span><br/>
              M.Sc<br/>
              Major: Automation technology<br/>
              Minor: Computer Science
            </>}
              
            </p>
            <p>
            {language === 'FI' &&
            <>
              <span className="cv-italic">Aalto-yliopisto | 2016 - 2020</span><br/>
              Tekniikan kandidaatti, Automaatiotekniikka<br/>
              Sivuaine: Tietotekniikka
            </>}
            {language === 'EN' && <>
              <span className="cv-italic">Aalto University | 2016 - 2020</span><br/>
              B.Sc<br/>
              Major: Automation technology<br/>
              Minor: Computer Science
            </>}
            </p>
          </div>
          <div className="cv-line" />

          <div className="row"> {/* Työkokemus */}
            {language === 'FI' && <h2>Työkokemus</h2>}
            {language === 'EN' && <h2>Work Experience</h2>}
            <div className="row"> {/* Polycon */}
              <p>
                <span className="cv-italic">3/2020 - 2/2023</span><br/>
                {language === 'FI' && <>Ohjelmistokehittäjä | Polycon oy</>}
                {language === 'EN' && <>Software developer | Polycon oy</>}     
              </p>
              <p style={{paddingLeft:"4em"}}>
                {language === 'FI' &&
                <>
                  - Kehitin Polyconin päätuotetta, Effectorin työpöytäversiota sekä kansalaisille sekä yrityksille suunnattua palse.fi-webportaalia. Kehitin sekä palvelin- että selainpään toimintoja. Ylläpidin olemassa olevaa koodikantaa sekä kehitin siihen uusia osioita ja laajennuksia.
                  <br />
                  - “Ville on ollut työssään huolellinen, dokumentoinut tekemisensä hyvin ja viestinyt työnsä tuloksista selkeästi. Yhteistyö eri tahojen ja sidosryhmien kanssa on sujunut aina hyvin. Ville on osoittanut halua ja kykyä ymmärtää kokonaisuuksia ja tuotteen käytettävyyttä, jotta sitä voidaan kehittää haluttuun suuntaan”
                </>}
                {language === 'EN' &&
                <>
                  - I developed Polycon&apos;s main product, Effector&apos;s desktop version, and the palse.fi web portal for both citizens and businesses. I worked on both the server and browser-side functionalities, maintained the existing codebase, and developed new sections and extensions for it.
                  <br />
                  - “Ville has been diligent in his work, well-documented his actions, and communicated the results of his work clearly. Collaboration with different parties and stakeholders has always gone well. Ville has shown a willingness and ability to understand the big picture and the usability of the product, so that it can be developed in the desired direction.”
                </>}
              </p>
            </div>
            <div className="row"> {/* Gemalto */}
              <p>
                <span className="cv-italic">06/2019 - 09/2019</span><br/>
                {language === 'FI' && <>Tuotantotyöntekijä | Gemalto oy</>}
                {language === 'EN' && <>Production Worker | Gemalto oy</>}
                
              </p>
              <p style={{paddingLeft:"4em"}}>
                {language === 'FI' && <>- Kesätyö passitehtaalla, jossa turvallisuus ja työntekijöiden luotettavuus olivat erittäin tärkeää. Toimin operaattorina.</>}
                {language === 'EN' && <>- Summer job at a passport factory, where safety and the reliability of employees were of utmost importance. I worked as an operator.</>}
                
              </p>
            </div>
            <div className="row"> {/* Intti */}
            <p>
              <span className="cv-italic">06/2017 - 12/2017</span><br/>
              {language === 'FI' && <>Asepalvelus</>}
              {language === 'EN' && <>Military service</>}
            </p>
          </div>
          </div>

          <div className="cv-line" />
          
          <div className="row"> {/* Suosittelijat */}
            {language === 'FI' && <h2>Suosittelijat</h2>}
            {language === 'EN' && <h2>Recommenders</h2>}
            
            {language === 'FI' &&
            <p>
              Sanna Huhtala, Esihenkilöni Polyconilta <br/>
              sanna.huhtala@polycon.fi
            </p>}
            {language === 'EN' &&
            <p>
              Sanna Huhtala, my supervisor at Polycon.<br/>
              sanna.huhtala@polycon.fi
            </p>}
      
            
          </div>
        </div>
      </div>  {/* Row */}
    </div> // container
  )
}
  

export default CV