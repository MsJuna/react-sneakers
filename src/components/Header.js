function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-15" width="40" height="40" src="/img/logo.png" alt="" />
          <div>
            <h3>React Sneakers</h3>
            <p className="opacity-5">Shop of the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width="18" height="18" src="img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li className="mr-30">
            <img width="18" height="18" src="img/user.svg" alt="" />
          </li>
        </ul>
      </header>
    )
}

export default Header;