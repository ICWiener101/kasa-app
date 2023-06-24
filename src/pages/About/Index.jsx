import React from 'react';
import Header from './../../components/Header/index';
import aboutBackground from '../../assets/aboutBack.png';
import Dropdown from './../../components/Dropdown/index';
import '../../styles/about.scss';

function About() {
      const contentList = [
            {
                  buttonText: 'Fiabilité',
                  content: 'Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
            },
            {
                  buttonText: 'Respect',
                  content: 'La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
            },
            {
                  buttonText: 'Service',
                  content: 'Chez Kasa, nous nous engageons à fournir un service exceptionnel à nos utilisateurs. Notre équipe est dédiée à vous offrir une expérience sans pareille, en répondant rapidement à vos besoins et en vous fournissant un support personnalisé à chaque étape de votre parcours sur notre plateforme. Nous nous efforçons de rendre votre expérience de location de logement aussi fluide et agréable que possible.',
            },
            {
                  buttonText: 'Sécurité',
                  content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&#39;hôte qu&#39;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes',
            },
      ];
      const isAbout = true;
      return (
            <div className="about">
                  <Header image={aboutBackground} />
                  {contentList.map((content) => (
                        <Dropdown
                              content={content.content}
                              buttonText={content.buttonText}
                              isAbout
                        />
                  ))}
            </div>
      );
}

export default About;
