import OutputBox from "./OutputBox.jsx";
import CodeBox from "../effects/CodeBox.jsx";

export default function LearnSection({num, heading, description, code, output}){
    return(
        <div className="container text-start p-5 mb-5 bg-dark text-light rounded p-6">
            <h1>{num}. {heading}</h1>
            <br />

            {description}
            <CodeBox code={code} />
            <br />

            <OutputBox content={output} />
        </div>
    )
}