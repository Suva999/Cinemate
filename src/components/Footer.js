import { Link } from "react-router-dom";
export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.instagram.com/limitless_p_a_u_l?igsh=ODlueGV3OTZjbTRw" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/suvadeep-paul-b269b1233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://x.com/Aryo66624?t=8z1BMbpBR2aE4DnlYQePig&s=08" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Twitter</a>
              </li>
              <li>
                  <a href="https://www.youtube.com/@AryoXP-hp7yv" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
              </li>
              <li>
                  <a href="https://github.com/Suva999 " target="_blank" rel="noreferrer" className="hover:underline">Github</a>
              </li>
              
          </ul>
      </footer>
  )
}
