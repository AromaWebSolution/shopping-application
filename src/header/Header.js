import './Header.css';
import { Route } from 'react-router-dom';

function Header() {
    return(
        <div>
       <header className="App-header">
    <nav>
    <ul>
        <ul>
            <li className="App-logo"><a href="/">logo</a></li>
            <li><a href="/">Shop</a></li>
        </ul>
        <div className="Search-bar">
            <input type="search" placeholder="Search product" value=""></input>
        </div>
        <ul className="Right-header">
            <li><a href="/signin">Sigin in</a></li>
            <li><a href="/orders">Orders</a></li>
            <li><a href="/cart">Cart</a></li>
        </ul>
    </ul>
    </nav>
    </header>
    <Route path="/" exact render={()=> <h1>Home page</h1>}/>
    <Route path="/orders" exact render={()=> <h1>orders page</h1>}/>
    <Route path="/signin" exact render={()=> <h1>signin page</h1>}/>
</div>
    );
}

export default Header;

