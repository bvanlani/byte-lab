//Importing the needing extensions. Need react the monaco editor and the pyodide
import React, { useEffect, useRef } from "react";
import { Editor } from "@monaco-editor/react";
import { loadPyodide } from "pyodide";
import Compiler from "./Compiler";
import ColorLegend from "./ColorLegend";
import SectionSplit from "./SectionSplit";
//Creating the compiler function
export default function TheLabMainPage() {


//returning the compiler component.
  return (
    <section className="min-vh-100 d-flex flex-column">
      <div className="container bg-transparent text-light text-center py-4">
        <h1>The Lab</h1>
      </div>
     <ColorLegend/>
     <Compiler/>
     <SectionSplit/>
    </section>
  );
}



