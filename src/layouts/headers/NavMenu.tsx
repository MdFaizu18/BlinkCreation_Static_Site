import { Link } from "react-router-dom";
import menu_data from "./menu_data";

export default function NavMenu() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
  ) => {
    // Check if the link is an in-page anchor (starts with "#")
    if (link.startsWith("#")) {
      e.preventDefault();
      const targetId = link.substring(1); // Remove the "#" to get the ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown && "has-dropdown"}`}>
            <Link
              to={item.link}
              onClick={(e) => handleSmoothScroll(e, item.link)}
            >
              {item.title}
            </Link>
            {item.has_dropdown && (
              <ul className="sub-menu">
                {item.sub_menus?.map((sub_menu, index) => (
                  <li key={index}>
                    <Link
                      to={sub_menu.link}
                      onClick={(e) => handleSmoothScroll(e, sub_menu.link)}
                    >
                      {sub_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
