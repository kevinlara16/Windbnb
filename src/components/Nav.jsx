import logo from '../img/logo.png';
import Cities from './Cities';

const Nav = ({ filtered, handleChange }) => {
    return (
        <nav>
            <div className="nav">
                <div className="figure">
                    <img src={logo} alt="" />
                </div>
                <div className="finland">
                    <div className="cities">
                    {filtered.slice(0, 1).map((el, i) => <Cities key={i} el={el} />)}
                    </div>
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder='Add guests'
                    />
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>
        </nav>
    )
};

export default Nav;