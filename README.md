# hw01-module2-additional
STEP 1
Write a bash script which will print date to output before starting the app, run container and mount that file, specify it as entrypoint of the container, if it works fine, add as default entrypoint in Dockerfile
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-44-03.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-44-15.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-46-47.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-47-59.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-48-21.png>)


STEP 2
Adjust Dockerfile and add health checks to make sure the app is alive, use the /healthz location for it
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-56-34.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 00-59-00.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 01-00-51.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 01-01-34.png>)

STEP 3
Add /uuid location to the app which will return generated uuid values {"uuid": "XXXXX"}, install and use the uuid module for that
![alt text](<screenshots/Знімок екрана з 2024-02-15 01-39-09.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 01-39-18.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 01-40-14.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 01-43-07.png>)


STEP 4
Create a new file Dockerfile.generator where install app using these instructions, run it and confirm that app works in your browser, if possible use port 8080
![alt text](<screenshots/Знімок екрана з 2024-02-15 04-51-58.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 04-53-05.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 04-55-38.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 04-58-01.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 04-58-50.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 04-59-42.png>)
![alt text](<screenshots/Знімок екрана з 2024-02-15 05-00-15.png>)