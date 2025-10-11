(function(){"use strict";self.onmessage=async o=>{const{type:t,code:r}=o.data;if(t==="load"){importScripts("https://cdn.jsdelivr.net/pyodide/v0.28.3/full/pyodide.js"),self.pyodide=await loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.28.3/full/"}),self.postMessage({type:"ready"});return}else if(t==="run"){const n=`
import sys
import io

sys.stdout = io.StringIO()
sys.stderr = io.StringIO()

${r}
`;try{const l=await self.pyodide.runPythonAsync(n),e=await self.pyodide.runPythonAsync("sys.stdout.getvalue()");self.postMessage({type:"result",result:e||"So empty here"})}catch{try{const e=await self.pyodide.runPythonAsync("sys.stderr.getvalue()");let s=e.lastIndexOf("Error");s=e.slice(s+6,e.length);let i=`
---
 ERROR: `+s+`
`;self.postMessage({type:"result",result:"Uh oh looks like you have an error! "+i})}catch(e){console.log(e),self.postMessage({type:"result",result:"Something went wrong, please try again."})}}}}})();
