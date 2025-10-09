import Footer from "../componenets/Footer";
import Editor from "@monaco-editor/react";
import ColorLegend from "./ColorLegend.jsx";
import { Link } from "react-router-dom";

export default function PythonBasics() {
    // A reusable component for consistent editor styling
    const CodeBox = ({ code }) => (
        <div className="border rounded bg-dark my-3">
            <Editor
                height="200px"
                defaultLanguage="python"
                value={code}
                theme="vs-dark"
                readOnly={true}
                options={{
                    readOnly: true,
                    minimap: { enabled: true },
                    fontSize: 15,
                    scrollBeyondLastLine: false,
                    lineNumbers: "on",
                    roundedSelection: false,
                    cursorStyle: "line",
                    contextmenu: false,
                    domReadOnly: true,
                    automaticLayout: true
                }}
            />
        </div>
    );

     function handleEditorDidMount(editor, monaco) {
        // Disable editing fully
        editor.updateOptions({ readOnly: true });
        // Prevent all keyboard input
        editor.onKeyDown(e => e.preventDefault());
        // Prevent paste or typing via commands
        editor.onDidAttemptReadOnlyEdit(() => editor.trigger('', 'undo', ''));
    }


    return (
        <>
            <section className="python-guide mt-5">
                {/* Intro Section */}
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Python Basics Guide</h1>
                    <p>Last updated: <em>October 7th, 2025</em></p>
                    <br />
                    <p>Welcome to the Byte Lab Python Basics Guide! This page introduces the fundamental concepts of Python — including variables, conditionals, loops, and functions. Perfect for beginners learning to code for the first time.</p>
                </div>
                
                <ColorLegend></ColorLegend>
                {/* VARIABLES */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>1. Variables</h1>
                    <br />
                    <p>Variables store data values. You can think of them like labeled boxes that hold information.</p>
                    <CodeBox code={`# Example
name = "Alex"
age = 15
is_student = True

print(name)        # Output: Alex
print(age + 1)     # Output: 16`} />
                </div>

                {/* PRINT & INPUT */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>2. Print & Input</h1>
                    <br />
                    <p><code>print()</code> displays text or data. <code>input()</code> asks the user to type something in.</p>
                    <CodeBox code={`# Example
name = input("What is your name? ")
print("Hello, " + name + "!")`} />
                </div>

                {/* IF / ELIF / ELSE */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>3. If, Elif, and Else</h1>
                    <br />
                    <p>Conditional statements let your code make decisions.</p>
                    <CodeBox code={`# Example
score = 85

if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")
else:
    print("Keep improving!")`} />
                </div>

                {/* FOR LOOPS */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>4. For Loops</h1>
                    <br />
                    <p><code>for</code> loops repeat code a fixed number of times or go through a list of items.</p>
                    <CodeBox code={`# Example 1: Counting
for i in range(5):
    print("Loop:", i)

# Example 2: Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`} />
                </div>

                {/* WHILE LOOPS */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>5. While Loops</h1>
                    <br />
                    <p><code>while</code> loops run as long as a condition is true.</p>
                    <CodeBox code={`# Example
count = 0
while count < 3:
    print("Count is", count)
    count += 1`} />
                </div>

                {/* FUNCTIONS */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>6. Functions</h1>
                    <br />
                    <p>Functions let you reuse code by grouping instructions together under a name.</p>
                    <CodeBox code={`# Example
def greet(name):
    print("Hello,", name)

greet("Liam")
greet("Sofia")`} />
                </div>

                {/* COMMENTS */}
                <div className="container text-start p-5 mb-5 bg-dark text-light">
                    <h1>7. Comments</h1>
                    <br />
                    <p>Comments are ignored by the computer. Use them to explain your code.</p>
                    <CodeBox code={`# This is a comment
# Use comments to describe what your code does`} />
                </div>

                {/* NEXT STEPS */}
                <div className="container text-center p-5 mb-5 bg-dark text-light">
                    <h1>Next Steps</h1>
                    <br />
                    <p>Now that you know the basics, try combining these concepts! You can write a guessing game, calculator, or story generator. Visit <Link to="/the-lab">The Lab</Link> to experiment with your new skills.</p>
                </div>
            </section>
        </>
    );
}