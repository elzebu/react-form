export const data = {
    filter: '',
    brands: [
        {
            id: 1,
            src: 'https://www.logodesignlove.com/images/classic/michelin-man-running.jpg',
            name: 'michelin'
        },
        {
            id: 2,
            src: 'https://www.bridgestoneamericas.com/content/dam/bscorpcomm-sites/bridgestone-americas/images/brand-assets/logos/bridgestone-logos/bridgestone-b-mark-logos/album-cover.png',
            name: 'bridgestone'
        },
        {
            id: 3,
            src: 'https://cdn.freebiesupply.com/logos/large/2x/goodyear-racing-logo-png-transparent.png',
            name: 'goodyear'
        }
    ],
    tyres: [
        {
            id: 1,
            name: 'Energy saver +',
            brandId: 1,
            description: `
        <h3>Points forts</h3>
        <ul>
          <li>Economie de carburant</li>
          <li>Très bonne longévité</li>
          <li>Excellente adhérence sur sol sec et mouillé</li>
        </ul>`
        },
        {
            id: 2,
            name: 'Primacy 4',
            brandId: 1,
            description: `
        <h3>Points forts</h3>
        <ul>
          <li>En toute sécurité neuf comme usé</li>
          <li>Excellente longévité</li>
          <li>Très hautes performances de freinage sur sol mouillé</li>
        </ul>`
        },
        {
            id: 3,
            name: 'CrossClimate +',
            brandId: 1,
            description: `
        <h3>Points forts</h3>
        <ul>
          <li>Armez-vous face aux aléas climatiques, jusqu'au dernier kilomètre</li>
          <li>Et avec MICHELIN Total performance, plus de performances réunies</li>
        </ul>`
        },
        {
            id: 4,
            name: 'Weather control A005',
            brandId: 2,
            description: `
        <h3>Points forts</h3>
        <ul>
          <li>Maîtrisez votre route, en toutes saisons</li>
          <li>Certifié pour l'usage sur la neige (marquage 3PMSF)</li>
          <li>Kilométrage au-delà des attentes du consommateur</li>
        </ul>`
        }
    ]
}