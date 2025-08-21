"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function Home() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [translateFrom, setTranslateFrom] = useState("");
  const [translateTo, setTranslateTo] = useState("");

  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  useEffect(() => {
    const output = document.getElementById("output");

    const applyCOde = `
    <html>
      <head>
        <style>${cssCode}</style>
      </head>

      <body>${htmlCode}</body>
      <script>${jsCode}</script>
    </html>
    `;

    output.contentDocument.open();
    output.contentDocument.write(applyCOde);
    output.contentDocument.close();
  }, [htmlCode,cssCode,jsCode]);

  return (
    <div className="w-full h-full ">
      <section className="w-full h-full">
        <h1 className=" py-3 px-3 text-lg flex items-center">
          <img
            src="/Icons/responsive-icon.svg"
            alt=""
            className="w-12 h-auto"
          />{" "}
          <span className="pl-1 pt-4 mt-4">Responsive</span>
        </h1>
        <br /> <hr /> <br />
        <div className="lg:flex md:flex">
          <div className="left-screen flex flex-col items-start md:w-2/4 lg:w-2/4 w-full p-3">
            <label className="flex items-center pb-3">
              HTML <img src="/Icons/html-icon.svg" alt="" className="w-8 h-8" />
            </label>
            <textarea
              className="bg-white w-full h-64 rounded-lg text-black p-3 focus:outline-0"
              name="html-code"
              id="html-code"
              onChange={(e)=>setHtmlCode(e.target.value)}
            ></textarea>

            <label className="flex items-center py-4">
              CSS <img src="/Icons/css-icon.svg" alt="" className="w-8 h-8" />
            </label>
            <textarea
              className="bg-white w-full h-64 rounded-lg text-black p-3 focus:outline-0"
              name="css-code"
              id="css-code"
              onChange={(e)=>setCssCode(e.target.value)}
            ></textarea>

            <label className="flex items-center py-4">
              <span className="pt-1">JAVASCRİPT </span>{" "}
              <img src="/Icons/js-icon.svg" alt="" className="w-8 h-8" />
            </label>
            <textarea
              className="bg-white w-full h-64 rounded-lg text-black p-3 focus:outline-0"
              name="js-code"
              id="js-code"
              onChange={(e)=>setJsCode(e.target.value)}
            ></textarea>
          </div>
          <div className="right-screen text-start lg:w-2/4 md:w-2/4 w-full p-3">
            <label className="flex items-center pl-3 pb-3">
              Output
              <img
                src="/Icons/play-button-icon3.svg"
                alt=""
                className="w-5 h-5 ml-1.5"
              />
            </label>
            <iframe
              className="bg-white w-full h-full rounded-lg"
              title="output"
              id="output"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
