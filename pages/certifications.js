const certifications = [
      {
        title: "Certification SoloLearn - Developpeur web",
        org: "SoloLearn",
        description: "Certificat attestant de mes compétences a développer un site web .",
        date: "13/04/2025",
        img: "../images/walid-certif_web.jpg",
        link: "https://www.sololearn.com/certificates/CC-44TRYVHO"
      },
      {
        title: "Certification Cisco - Introduction à la cybersécurité",
        org: "Cisco",
        description: "Certificat attestant de mes acquis dans la cybersécurité .",
        date: "27/02/2024",
        img: "../images/walid_djouadi_certificat-cyber.png",
        link: "https://www.credly.com/badges/83c3fb48-bc3d-4de9-8258-d587a48f1806/public_url"
      },
      {
        title: "Certification Sololearn - JavaScript Intermédiaire",
        org: "Sololearn",
        description: "Certificat attestant de mes acquis en JavaScript .",
        date: "19/04/2024",
        img: "../images/Walid_Djouadi_certifications_js.jpg",
        link: "https://www.sololearn.com/certificates/CC-DVYYFHOM"
      }
    ];

    document.addEventListener("DOMContentLoaded", function () {
        

    const container = document.getElementById('certifications');

    certifications.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${cert.img}" alt="${cert.title}">
        <h3>${cert.title}</h3>
        <p><strong>${cert.org}</strong></p>
        <p>${cert.description}</p>
        <p><strong>Date d'obtention :</strong> ${cert.date}</p>
        <a href="${cert.link}" class="btn">🥇 Voir la certification</a>
      `;
      container.appendChild(card);
    })
    });