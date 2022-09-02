function Drawer() {
    return (
        <div className="overlay" style={{ display: 'none' }}>
            <div className="drawer">
                <h2 className="mb-40 d-flex justify-between">Корзина<img className="removeBtn" src="/img/remove-btn.svg" alt="remove" /></h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-15">

                        <div className="cartItemImg" style={{ backgroundImage: `url(/img/sneakers/1.jpg)` }}></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove-btn.svg" alt="remove" />
                    </div>
                    <div className="cartItem d-flex align-center mb-15">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
                        <div className="mr-20">
                            <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b>12 990 руб.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove-btn.svg" alt="remove" />
                    </div>
                </div>

                <div className="basket">
                    <ul>
                        <li>
                            <span className="mt-20">Итого:</span>
                            <div></div>
                            <b>22 500 руб.</b>
                        </li>
                        <li>
                            <span>Налог 20%:</span>
                            <div></div>
                            <b>4 500 руб.</b>
                        </li>
                    </ul>
                    <button className="btn-accept">Оформить заказ<img src="/img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
};

export default Drawer;