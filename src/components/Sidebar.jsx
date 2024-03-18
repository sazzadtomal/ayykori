import Logo from "../assets/logo.png";
import data from "../data/sidebarData";
import CustomLink from "./CustomLink";

const Sidebar = () => {
  const { menu, recruitment, organization } = data;

  return (
    <div className="flex flex-col shrink-0 overflow-y-auto">
      <div className="flex justify-center items-center px-24 py-8">
        <img src={Logo} alt="logo" />
      </div>
      <div className="mx-6">
        <section className="my-6 text-default">
          <h4 className="mb-2 font-bold">Menu</h4>
          <ul>
            {menu.map((sub) => (
              <li>
                <CustomLink data={sub}/>
              </li>
            ))}
          </ul>
        </section>
        <section className="my-6 text-default">
          <h4 className="mb-2 font-bold">Recruitment</h4>
          <ul>
            {recruitment.map((sub) => (
              <li>
                <CustomLink data={sub}/>
              </li>
            ))}
          </ul>
        </section>
        <section className="my-6 text-default">
          <h4 className="mb-2 font-bold">Organization</h4>
          <ul>
            {organization.map((sub) => (
              <li>
                <CustomLink data={sub}/>
              </li>
            ))}
          </ul>
        </section>
       
        
      </div>
    </div>
  );
};

export default Sidebar;
