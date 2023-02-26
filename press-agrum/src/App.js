import './App.css';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <nav className='NavContainer'>
          <img alt='Logo du site' src={require('./img/logo_press_agrum_horizontal_blanc.png')}/>
          <ul className='navlistItem'>
            <li className='navItem'>Formulaire<img alt='Fléche décorative' src={require('./img/fleche.png')}/></li>
          </ul>
        </nav>

        <div className='headerTitle'>
          <h1>Propulseur <br/>
              de nouveaux talents</h1>
          <h3>Press-Agrum accompagne les pépites de la com !</h3>
        </div>

        <div className='headerButton'>
          <button className='headerButton1'>Press-Agrum<img alt='Fléche décorative' src={require('./img/fleche.png')}/></button>
          <button className='headerButton2'>La Dream-Team<img alt='Fléche décorative' src={require('./img/fleche.png')}/></button>
        </div>
      </header>

      <section className='slideshow'>
        <h2>L'agence racontée par ...</h2>
        <div className='slideshowContainer'>
          <div className="mySlides">
            <img alt='Slide' src={require("./img/AdobeStock_314822427.jpeg")}/>
          </div>

          <div className="mySlides">
            <img alt='Slide' src={require("./img/AdobeStock_314822427.jpeg")}/>
          </div>

          <div className="mySlides">
            <img alt='Slide' src={require("./img/AdobeStock_314822427.jpeg")}/>
          </div>
        </div>
        <div className="slideshowButton">
          <button>Voir plus</button>
        </div>
      </section>

      <section className='grid'>
        <div className="parent">
            <div className="div1"><img alt='babyfoot' src={require('./img/20210219_074917.jpg')}/> </div>
            <div className="div2"><img alt='bureau' src={require('./img/20210219_075153.jpg')}/> </div>
            <div className="div3"><img alt='cafétéria' src={require('./img/20210219_074912.jpg')}/> </div>
            <div className="div4"><img alt='salle de repos' src={require('./img/20210219_074852.jpg')}/> </div>
            <div className="div5">
              <h3>Qui sommes-nous ?</h3>
              <p>Avec bientôt 15 ans d'expérience, Press-Agrum est une agence de communication strasbourgeoise spécialisée dans la communication 360°. Notre activité s'étend essentiellement de la région Alsace-Grand Est à Paris.</p>
              <br/>
              <p>Nous proposons à nos clients une étendue de solutions marketing pour répondre avec précision et professionnalisme à tous leurs besoins d'image et de conseil. Nos compétences sont à leurs services, stratégie, branding, web, print ou encore photographie.</p> 
              <br/>
              <p>Centrée sur l'humain, notre agence a à coeur de proposer un cadre de travail idéal. Télévision, Nintendo Switch, billard après votre repas, cuisine toute équipée ou encore partie de ping pong sur notre grande terrasse !</p>
            </div>
            <div className="div6"> </div>
            <div className="div7"> </div>
            <div className="div8"> </div>
            <div className="div9"> </div>
            <div className="div10"> </div>
            <div className="div11"> </div>
            <div className="div12"> </div>
            <div className="div13"> </div>
            <div className="div14"> </div>
        </div>
      </section>
    </div>
  );
}

export default App;
