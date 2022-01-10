import React from 'react';
import { AiOutlineFacebook } from "@react-icons/all-files/ai/AiOutlineFacebook";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineInstagram } from "@react-icons/all-files/ai/AiOutlineInstagram";
import { AiOutlineGlobal } from "@react-icons/all-files/ai/AiOutlineGlobal";
import { MdMailOutline } from "@react-icons/all-files/md/MdMailOutline";

const logo = "https://andreabenedetti.github.io/dd-15/assets/img/Logo_DensityDesign.svg";
const polimi = "https://andreabenedetti.github.io/dd-15/assets/img/polimi.svg";

const faculty = ["Michele Mauri", "Ángeles Briones", "Gabriele Colombo", "Simone Vantini", "Salvatore Zingale"],
assistants = ["Andrea Benedetti", "Tommaso Elli", "Beatrice Gobbo"];

class Footer extends React.Component {
  render() {
    return (
      <footer>
      <div className="logo">
      <img src={logo} alt="DensityDesign Lab" className="density--logo" />
      <img src={polimi} alt="Politecnico di Milano" />
      </div>

      <div id="faculty">
      <h1>Faculty</h1>
      <ul>
      {faculty.map(faculty => (
        <li key={faculty}>{faculty}</li>
      ))}
      </ul>
      </div>

      <div id="assistants">
      <h1>Teaching Assistants</h1>
      <ul>
      {assistants.map(assistants => (
        <li key={assistants}>{assistants}</li>
      ))}
      </ul>
      </div>

      <div id="contacts">
      <p>The Final Synthesis Design Studio is a laboratory that takes place at Politecnico di Milano, in the last year of the Master's Degree in Communication Design between September 2021 and January 2022.</p>
      <ul>
      <li><a href="https://www.facebook.com/densitydesign"><AiOutlineFacebook className="icon" /></a> <a href="https://twitter.com/densitydesign"><AiOutlineTwitter className="icon" /></a> <a href="https://www.instagram.com/densitydesign/"><AiOutlineInstagram className="icon" /></a></li>
      <li><a href="http://densitydesign.org/"><AiOutlineGlobal className="icon" /> densitydesign.org</a></li>
      <li><a href="mailto:info@densitydesign.org"><MdMailOutline className="icon" /> email</a></li>
      </ul>
      </div>
      </footer>
    )
  }
}

export default Footer
