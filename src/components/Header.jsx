export default function Header() {
  return (
    // <header className="hero is-dark is-bold">
    //   <div className="hero-body">
    //     <div className="container">
    //       <h1 className="title">Cute Dog Images</h1>
    //     </div>
    //   </div>
    // </header>

    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1>Birdwatching</h1>
          <img src="./public/images/dove.png" alt="a simple dove logo" />

          <ul>
            <li><span>Home</span></li>
            <li><a href="#">Get started</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Gear</a></li>
            <li><a href="#">Forum</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}