import React from "react"
import { Link } from "gatsby"

export default function Aside() {
    return (
        <aside>
            <h3>Additional materials</h3>
            <ul>
                <li>
                    <a href="https://densitydesign.github.io/teaching-dd16/" target="_blank">DD16 FSDS 2020/2021</a>
                </li>
                <li>
                    <a href="https://www4.ceda.polimi.it/manifesti/manifesti/controller/ManifestoPublic.do?EVN_DETTAGLIO_RIGA_MANIFESTO=evento&aa=2021&k_cf=19&k_corso_la=1162&k_indir=***&codDescr=052799&lang=EN&semestre=1&anno_corso=2&idItemOfferta=154784&idRiga=267427" target="_blank">2021/2022 Course manifesto</a>
                </li>
                <li>
                    <a href="https://t.me/density17" target="_blank">Telegram Channel</a>
                </li>
                <li>
                    <a href="https://drive.google.com/drive/folders/1UUxOIWTZFKAYVjlrfpAzPCEJayv8fcxY?usp=sharing" target="_blank">Google Drive Folder</a>
                </li>
            </ul>
        </aside>
    )
}