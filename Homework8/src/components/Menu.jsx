import menuItems from '../data/menu';
import { Link } from "react-router-dom";

const SubMenu = ({ items, title }) => (
  <div className="menu__box">
    <div className="menu__item">
      <h3 className="menu__headding">{title}</h3>
      {items.map((item, index) => (
        <Link to="#" className="menu__link" key={index}>
          {item}
        </Link>
      ))}
    </div>
  </div>
);

const Menu = () => {
  return (
    <nav className="menu">
      {menuItems.map((menuItem, index) => (
        <li className="menu__list" key={index}>
          <Link to={menuItem.path} className="menu__title">
            {menuItem.title}
          </Link>
          {menuItem.submenu && (
            <SubMenu items={menuItem.submenu} title={menuItem.title} />
          )}
        </li>
      ))}
    </nav>
  );
};

export default Menu;
