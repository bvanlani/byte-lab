import ColorLegend from "./ColorLegend.jsx";
import { Link } from "react-router-dom";
import LearnSection from "./LearnSection.jsx";
import OutputBox from "./OutputBox.jsx";
import CodeBox from "../effects/CodeBox.jsx";

export default function PythonBasics() {

    //The main page
    return (
        <>
            {/* <LearnSection num={} heading={} description={} output={} code={}/> */}

            <section className="python-guide mt-5">
                {/* Intro Section */}
                <div className="container text-center p-5 mb-5 bg-dark text-light rounded p-6">
                    <h1>Python Basics Guide</h1>
                    <br />
                    <p>Welcome to the Byte Lab Python Basics Guide! This page introduces the fundamental concepts of Python — including variables, conditionals, loops, and functions. Perfect for beginners learning to code for the first time.</p>
                </div>
                
                <ColorLegend></ColorLegend>

                {/* VARIABLES */}
                <LearnSection num={"1"} heading={"Variables"} description={"Variables store data values. You can think of them like labeled boxes that hold information."} output={"Alex" + "\n" + "17"} code={`# Example
name = "Alex"
age = 15
is_student = True

print(name)        # Output: Alex
print(age + 1)     # Output: 16`}/>                

                {/* PRINT & INPUT */}
                <LearnSection num={"2"} heading={"Print & Input"} description={<p><code>print()</code> displays text or data. <code>input()</code> asks the user to type something in.</p>} output={"What is your name: Cayden" + "\n" + "Hello, Cayden!"} code={`# Example
name = input("What is your name? ")
print("Hello, " + name + "!")`}/>

                {/* IF / ELIF / ELSE */}
                <LearnSection num={"3"} heading={"If Statements (If, Elif, and Else)"} description={<p>If statements are also called Conditional statements. There are three types of Conditional Statements: <list><li><code>if</code></li><li><code>elif</code></li><li><code>else</code></li></list> We use them to test values, and make decisions based on the result. <br />Conditional Statements return either <code>true</code> or <code>false</code>. When they evaluate to <code>true</code>, the code inside them executes. When they evaluate to <code>false</code> the program skips the code. The program then checks any <code>elif</code> statements until one of them evaluates to true. If none of the <code>if</code> or <code>elif</code> statements evaluate to <code>true</code> then the code checks for an <code>else</code> statement. If there is an <code>else</code> statement then the code inside the <code>else</code> statement executes. If there is no <code>else</code> statement then the code segment stops.</p>} output={"B grade"} code={`# Example
score = 85

if score >= 90:
    print("A grade")
elif score >= 80:
    print("B grade")
else:
    print("Keep improving!")`}/>

                {/* FOR LOOPS */}
                <LearnSection num={"4"} heading={"For Loops"} description={<p><code>for</code> loops repeat code a fixed number of times or go through a list of items.</p>} output={"Apple" + "\n" + "Banana" + "\n" + "Cherry"} code={`# Example 1: Counting
for i in range(5):
    print("Loop:", i)

# Example 2: Looping through a list
fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)`}/>

                {/* WHILE LOOPS */}
                <LearnSection num={"5"} heading={"While Loops"} description={<p><code>while</code> loops run as long as a condition is true.</p>} output={"Count is 0" + "\n" + "Count is 1" + "\n" + "Count is 2"} code={`# Example
count = 0
while count < 3:
    print("Count is " + count)
    count += 1`}/>

                {/* FUNCTIONS */}
                <LearnSection num={"6"} heading={"Functions"} description={<p>Functions let you reuse code by grouping instructions together under a name.</p>} output={"Hello, Liam" + "\n" + "Hello, Sofia"} code={`# Example
def greet(name):
    print("Hello, " + name)

greet("Liam")
greet("Sofia")`}/>

                {/* COMMENTS */}
                <LearnSection num={"7"} heading={"Comments"} description={<p>Comments are ignored by the computer. Use them to explain your code.</p>} output={""} code={`# This is a comment
# Use comments to describe what your code does`}/>

                {/* NEXT STEPS */}
                <div className="container text-center p-5 mb-5 bg-dark text-light rounded p-6">
                    <h1>Next Steps</h1>
                    <br />
                    <p>Now that you know the basics, try combining these concepts! You can write a guessing game, calculator, or story generator. Visit <Link to="/the-lab" className="fst-italic fw-bold text-light text-decoration-none">The Lab</Link> to experiment with your new skills.</p>
                </div>
            </section>
        </>
    );
}