import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex mb-40 align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ... " />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unfavorite.png" alt='unfavorite' />
            </div>
            <img src="/img/sneakers/1.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/2.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 990 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/3.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>9 000 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/4.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>7 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/5.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Under Armour Curry 8</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>6 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/6.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Kyrie 7</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>11 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/7.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Jordan Air Jordan 11</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>11 199 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/8.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike LeBron XVIII</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>16 500 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/9.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>13 990 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/10.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 499 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/11.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>8 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>
          <div className="card">
            <img src="/img/sneakers/12.jpg" alt="Sneakers" width={133} height={112} />
            <h5>Мужские Кроссовки Nike Kyrie Flytrap IV</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>11 499 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="" width={11} height={11} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
