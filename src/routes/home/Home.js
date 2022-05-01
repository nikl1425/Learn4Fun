import React from 'react';
import styles from "../../style/home.module.scss";
import colors from "../../style/colors.scss";
import fonts from "../../style/fonts.scss";
import {Header} from "../../components/Header";
import { TextContainer } from '../../components/TextContainer';


export const Home = () => (
  
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col">
          <Header text="Learn4Fun" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mx-4 mt-4 mb-4">
            <TextContainer background_color="black" border_color="2px solid orange">
              <div className="px-4 py-4">
                <span className="text-light font-main">
              Velkommen! Jeg har lavet denne side på grund af den mangel jeg selv synes der har været på gratis kode-relateret kurser på dansk. Da jeg selv tog min MsC. i computer science havde jeg ofte svært ved at forstå koncepter og forskelle på de mange paradigmer og kode sporg der eksistere. Denne er side er for dig, der har svært ved at implementere eller løse tekniske opgaver i skolen eller dig der bare vil blive bedre til kode. På denne side finder du flere kurser der forklare alt det fundamentale til det mere udfordrende og bedst af det hele det koster intet!
              </span>
              </div>
            </TextContainer>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">

        </div>
      </div>
    </div>


);