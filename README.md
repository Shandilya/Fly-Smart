[Fly-Smart Website](https://fly-smart.herokuapp.com/)

# Final Project - Predictive Analysis
![predictive_analytics_technologies](https://user-images.githubusercontent.com/37318055/49330804-8231db00-f559-11e8-9db7-861a98d1070e.png)

## Backgound - Business Problem Overview
Flight cancellation and delay is a very common problem in the real world. It can have a negatively financial impact both the airlines and passengers. Furthermore, it will also impact personal scheduled events and commitments. A passenger who is delayed on a multi-plane trip could miss a connecting flight. Anger, frustration and even Air rage can occur in delayed passengers.
1) Bad customer satisfaction
2) Financial losses and negative reputation for airlines
3) Inconvenience for passengers and impacting personal scheduled events


## Project Proposal
1) Using data visualization tools/skills to graphically display results using historic flight data gathered from Bureau of Transportation Statistic
2) Training the same set of historic data using predictive algorithms to create a working model
3) Allow user input of flight criteria (such as weather, date/time, airline, etc.) and predict probability of on-time departure, cancellation and diversion.

## Team Member
    Saifee Dalal
    Sandeep Komuravelli
    Randy Chan
    Deepti Shandilya
    Ghassan Aleqabi
    Aparna Paul


## Data Source and Tools
    Bureau of Transportation Statistics (https://www.bts.gov/)
    https://openflights.org/data.html
    Python
    PySpark
    Scikit-Learn
    Javascript 
    HTML
    CSS
    Tableau
    MongoDB
    Heroku
    NLTK


## Data Flow Diagram
![capture](https://user-images.githubusercontent.com/37318055/49331086-82cc7080-f55d-11e8-96c3-54607b3a3221.PNG)

![predictive-1](https://user-images.githubusercontent.com/37318055/49330803-7fcf8100-f559-11e8-8107-989757428ad1.png)


## Data Challenges/Limitation
<b>No Price Information</b> - Datasource did not include price information. Limitation on price impacting business decision<br>
<b>Data Cleanup</b> - Large sets of data including too many features which also include unusable data (N/A or Null)<br>
<b>Data Field Dictionary</b> - Data set includes many fields with unclear description. Need to create a dictionary table to easy user interpretation.<br>
<b>Weather</b> - Weather can be a big impact on flight cancellation or delay. However, in order to include all weather data tying to airport location, it will expotentially increased data size.

