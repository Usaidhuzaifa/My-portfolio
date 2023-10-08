
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from "/publib/logo.png"


const Layout = ({ children} : {children: React.ReactNode}  ) => {
  
const isHomePage = useRouter().pathname === '/'; 

  return (
    <div>
      {!isHomePage && (
        <div>
          <Image src={Logo} alt="Image Alt Tet" width={100} height={100} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Layout;