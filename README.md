## How to kill the running of the program from the CL
There is sometimes when using Ctrl + C doesn't works 
### First, list the process related to Docusaurus
ps aux | grep docusaurus
### Then, we select the process we want to kill per its PID (the second value in the list)
kill -9 <PID>
That's all, sometimes it is necessary to kill all the processes.

Check this package for jupyter notebooks integration  
https://www.npmjs.com/package/@datalayer/jupyter-docusaurus-plugin