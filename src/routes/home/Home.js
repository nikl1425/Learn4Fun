import React from 'react';
import styles from "../../style/home.module.scss";
import {Banner} from "../../components/Banner";
import { TextContainer } from '../../components/TextContainer';
import { Heading } from '../../components/Heading';
import { MultiCarousel } from '../../components/MultiCarousel';
import { CourseThumpNail } from '../../components/CourseThumpNail';
import {CourseData, RetrieveCourseToList} from '../../helper/JsonPasser';
import { VideoContainer } from 'components/VideoContainer';
import { MenuItem } from 'components/MenuItem';
import { Principles } from 'assets/information/Principles';

export const Home = () => {
  const Courses = RetrieveCourseToList(CourseData);



  return(
    <div className="container-fluid p-0">
          <div className="row">
            <div className="col">
              <Banner text="Learn4Fun" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mx-4 mt-4 mb-4">
                <TextContainer background_color="black" border_color="2px solid orange">
                  <div className="px-4 py-4">
                    <span className={`text-light ${styles['font-main']} ${styles.font_standard_size}`}>
                  Velkommen! Jeg har lavet denne side på grund af den mangel jeg selv synes der har været på gratis kode-relateret kurser på dansk. Da jeg selv tog min MsC. i computer science havde jeg ofte svært ved at forstå koncepter og forskelle på de mange paradigmer og kode sporg der eksistere. Denne er side er for dig, der har svært ved at implementere eller løse tekniske opgaver i skolen eller dig der bare vil blive bedre til kode. På denne side finder du flere kurser der forklare alt det fundamentale til det mere udfordrende og bedst af det hele det koster intet!
                  </span>
                  </div>
                </TextContainer>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
            <div className={styles.center_txt_container}>
                <Heading>
                  <h1 className={`${styles['font-main']} ${styles.font_color_main_gradient}`}>Intro Video</h1>
                </Heading>
              </div>
              <div className="mx-4 py-4">
                <TextContainer background_color="black" border_color="2px solid orange">
                  <VideoContainer embedId=""/>
                </TextContainer>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.center_txt_container}>
                <Heading>
                  <h1 className={`${styles['font-main']} ${styles.font_color_main_gradient}`}>Læring og Kurser</h1>
                </Heading>
              </div>
              <div className="mx-4 py-4">
                <MultiCarousel>
                  {
                    Courses.map((e) => {
                      return (
                        <div key={e.id}>
                          <CourseThumpNail
                            banner_background="black"
                            title={e.name}
                            font_color={e.color}
                            font_type=""
                            font_weight=""
                            border_color="2px solid orange"
                            path={`/CourseIcons/${e.pattern}.png`}
                            img_width="100px"
                            sub_heading="Usage:"
                            description={e.short_description}
                          />
                        </div>
                      )
                    })
                  }
                </MultiCarousel>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={styles.center_txt_container}>
                  <Heading>
                    <h1 className={`${styles['font-main']} ${styles.font_color_main_gradient}`}>Kerne Principper</h1>
                  </Heading>
              </div>
              <div className="">
                <div className="mx-4 py-4">
                  
                <TextContainer background_color="black" border_color="2px solid orange">
                      {Principles.map((element) => {
                        return (
                            <ul className="my-4">
                            <MenuItem item={element}/>
                            </ul>
                        )})

                        }
                        </TextContainer>
                    
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    
  };