Team H
Members:
	Jeremy Leu
	Joshua Navi
	Kyle Zhu
	Paul Kim
	Paris Do

##### Apply each of the six design principles listed below in your application and document this in your README. Justify your decisions and show strong signifiers that the principles you mentioned in your README are indeed present.

1. Discoverability/Signifiers - Are users able to easily find the points of the application that they are interested in?
	In our application, we made it so that there is a description right at the top, so that the users know what the app does right off the bat. We organized our website in a vertical layout, so that the main point of interest is right under the description. We also indicated that you can click the map with the font description on the left of the map, and explained what it does so that users will not wonder what the map is showing. As for the bar graph on the bottom, we have clear x and y axis labels as well as a title to make it more self-explanatory.  

2. Learnability - Are users able to easily learn and remember how to interact with your application?
	Our application is quite simple, and we used a heat map coloring scheme that is visually easy to follow -- darker shades of red mean higher values, and lighter shades of red mean lower values. We kept the scheme the same for the bar graph, so as to remove any possible confusion. There is not much difference between a first time user and a power user on our site, so that means we successfully made it simple enough to learn on first glance. 
	

3. Feedback - Is there strong evidence of user feedback for actionable items?
	Yes, because we made it so that the area highlighted on mouseover for the graph darker when mousing-over. As such, it gives the users an implied feeling of "clickability", showing that it is a clickable region. Also, we included a message on the left side to click a region to view the top 5 crimes, so that users will know that it is clickable. As for the bottom graph, we gave user feedback for when hovering over the bar graph to view the exact number of crimes committed per hour. As such, the user will intuitively know to explore with their mouse in order to fully utilize the application. 

4. Natural Mapping/Mental Metaphors - Is there strong evidence of providing natural mappings or relatable metaphors that help the user navigate the application?
	We have given a literal map representation for the map section, so that users will feel like they are literally "exploring" each region they want to view the crimes for. We also added animation to the pie chart to give a smoother feel to the application and keep the user interested for longer. Also, we made the website vertical, so that the users know that scrolling up and down will reveal more information like most modern websites. 

5. Constraints - Does the application have deliberate constraints to guide the flow of user interaction?
	The application deliberately keeps the user on the top description so that they will read it before proceeding to the map. Regardless, we have enough descriptors on the map and bar graph so that they will know what is possible and what is not. Anything clickable has been stated to be clickable, so hopefully users will take that into account to further solidify their understanding of our application. 

6. Error Prevention/Recovery - Is there strong evidence of error prevention and error recovery so that the user won’t be left confused when something unexpected happens?
	There is error prevention in that if a user faces a slip and misclicks an area on the map, they can click anywhere else or click on the X to close the modal pop-up (with the pie chart). We designed our app to be as error-free as possible, since the primary goal of this app is just to give users an interactive display where they can learn more about police crimes and which ones/how often they occur in areas of San Diego.


##### Justify your design decisions:
	With overall design, we tried to keep it minimal so that the main attractions (the map, the bar graph, the pie chart) were at the heart of our application. We used CSS to make the website look like a law-enforcement page, so that the users will have a clear depiction/idea of what the app is about before they even read the description. We chose to do a vertical design because that way, the users discover more information as they scroll down, allowing them freedom to look at the bar graph and map and compare the two. Furthermore, we chose to use a red range of heatmap-coloring for the map color-code, since we are documenting number of crimes per community. Crime is a bad thing, and red is generally an error/important color, so the darker the shade of red, the more severe the crime. This makes the map more intuitive to look at, and doesn't even require a legend to understand how it works at first glance. As for the bar graph, we chose to use the same color scheme and fonts so that consistency and understanding for the charts would be similar. As for our pie chart, we made it a pop up modal so that users can quickly click through multiple areas and check out the crime rates efficiently. Also, we used the same color scheme in our pie chart, so that users would understand the pie chart at first glance as well. Lastly, we chose to have the numbers display next to the map rather than on the map itself, so that the website would be less cluttered and users could compare areas very quickly with a quick hover-over. We added animations to bring the map to life, and to show the user that our site was not just a thing to look at, but interactive as well. 

##### Group member contributions:
	Jeremy Leu
		Oversaw CSS design and created the overall page layout. Also worked with Paul & Kyle to get animations working and fixing up the charts. Attended all team meetings, and was a contributor for the overall brainstorm / implementation of certain design aspects (primarily the bar graph/pie chart). Worked with team to figure out which kind of layout was best (created two). 
	Joshua Navi
		Worked hard with Paris & Paul on the map, and figured out how to pass data from our Database to the actual map. Also implemented querying code for sorting through results in the map, and handled most of the SQL querying. Took part in the design / brainstorm aspect, and provided ideas for the team to explore. Kept team on track and was a constant contributor in meetings. 
	Kyle Zhu
		Worked with Paul on the transitions for the graphs, as well as the highlighting on the map when mouse-over. Helped with SQL query-writing / searching the database with Josh & Paris for potential data we could use (when we first started the project). Checked over heuristics and documented progress for team meetings by keeping track of what we needed/wanted/still needed to implement. Worked more on the design side rather than the back-end side due to skill set. 
	Paul Kim
		Researched and implemented large amounts of code for the Leaflet map. Figured out how to properly highlight areas on the map by using JSON coordinate data, and worked with Jeremy & Kyle by helping adding the animations/transitions to our graphs with d3. Came up with great ideas for app idea, and also helped write some of the SQL queries. Gave great visual design feedback between early potential design ideas.
	Paris Do
		Came up with idea to use red color scheme for heat-mapping, and implemented the modal for the pie chart. Helped search database for information/data to interpret, and helped with much of the back-end implementation. Passed in the data for the bar graph, as well as the hover-over for the bar graph tooltips. Constant contributor during group meetings, and helped Joshua keep the team on track by keeping the group productive