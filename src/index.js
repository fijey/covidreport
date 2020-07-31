// global style
import "./styles/main.css";
import "./images/kecewa.png";
import "./images/nangis.png";
import "./images/senang.png";

// component

import "./components/navigasi-bar/index";
import getindopositif from "./components/get-data/get-local/getindopositif.js"
import getindoprov from "./components/get-data/get-local/getindoprov"
import getupdate from "./components/get-data/getdate.js";
import getglobalpositif from "./components/get-data/get-global/getglobalpositif.js"
import getglobalmeninggal from "./components/get-data/get-global/getglobalmeninggal.js"
import getglobalsembuh from "./components/get-data/get-global/getglobalsembuh.js"
getupdate();
getglobalpositif();
getglobalmeninggal();
getglobalsembuh();
getindopositif();
getindoprov();


