import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="alert alert-primary">
        <h1>But de l'exercice :</h1>
        <ol>
          <li>créer un composant Marque qui a comme propriété
              <ul>
              <li>Un Nom</li>
              <li>Un lien vers une image</li>
            </ul>
          </li>
          <li>
            Créer un composant pneu qui a comme propriété
              <ul>
              <li>Un nom</li>
              <li>Une marque (id de la marque)</li>
              <li>Une description (avec du contenu HTML)</li>
            </ul>
          </li>
          <li>Dans le fichier App.js créer un tableau contenant la liste des marques et un tableau contenant la liste des pneus, et les afficher</li>
          <li>Rajouter un champ input qui permet de filtrer les pneus (sur le champ nom)</li>
          <li>Supprimer une marque au clic sur celle-ci (si elle n'est pas utiliser par un pneu)</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
