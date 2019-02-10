GitHub LINK: [https://git.cs.dal.ca/sreekumar/eventhub]

# EventHub

The main idea of creating this web application is to bring students together that allows them to share, find and go to occasions that fuel their interests and improve their lives. EventHub is a one stop solution website to find amazing events, register for different courses and workshops and grow their events with the students-first approach.

# Built with 

* Bootstrap - The web framework used
* JavaScript - Scripting Language
* HTML and CSS - Used for basic designing of webpage

# Instructions:

1.	Using the given FCS GitURL above you can clone/download the repository to your local machine. The command to clone the git repository is as given 
	git clone https://git.cs.dal.ca/sreekumar/eventhub.git
2.	Once the git is cloned to the local you can open the files and navigate to the HTML folder which consist of all the HTML file.
3.	The file named User_Login is the *Login page*and is a static webpage with only validations in it. Since there is no backend developed for this assignment there will not be any check for correct id and password match. So, I have displayed the browse event page on entering both the field. Else a corresponding error message will be shown to user.
4.	Now you can click on the profile button present on the top right corner of the page. This will load the user Profile page. And it has an Edit button which leads the user to the next page where they can edit their information.
(Now open another HTML file named User_profile.  This is a simple *User Profile* page which has a general information about the users.) 
5.	The users can edit the information in the *Profile Edit* page. And proper validation checks have been done to validate the inputs before it is been saved. The inputs are dynamically checked and prompts the user if any mistakes are done right away. Once all the inputs are given the form will be saved and then success message will be displayed to the user.
6.	For the *Event Description* page you need to click on the Browse event tab on the page which shows all the details about the event and this page is also responsive.

# Web pages

In this assignment I have developed 4 webpages that will be used in the application. They are 

- Login Management
- User Profile
- User profile edit information
- Event Description

/***For setting up the Navbar onn top of each webpages i used Bootstrap framework "navbar". Which i had referenced on [10].
I had modified the navbar in such a way that it becomes responsive even after the size of the window is reduced ***/
 
## Login Management
This web page has a login screen where the user will be asked for their username and password inorder to login into the account in case if they need to register for the event. The validation has been done if the user clicks on the Login button without entering any of the details the user will be prompted with a corresponding error message. Also, the email Id validation is been done. Once the user has given the correct username and password a success message will be displayed.

## User Profile
User profile page displays the user's information such as their name, date of birth, college, email id and photo.

## User profile edit information
This screen helps the users to change their personal information if needed. This page contains a form asking the users for their firstname, lastname, email id, university, gender and phone number. All these fields are validated and only if all the validations are successful the user will be allowed to submit the form.
The validations in this form are:
- If the user tries to enter any number in the First name and Last name field the user will be prompted with an error message "*Enter a valid name*.
- If the user tried to enter some alphabets in the phone number field the user will be shown a corresponding error message like " *Enter a valid Phone number*"
- If any fields are empty even then the user will be prompted with an error message "*Fields cannot be empty*"
- The error messages will be dynamically displayed to the users for better user experience. 
- Once the user has completed all the mandatory fields the save button will be enabled and the user will be allowed to save their information
- Email id validation is done for the email id field.
To make the webpage more responsive once the user has submitted / saved the form a success message will be displayed to the user, letting them know that the information is been saved.

/***For this webpage I had referred [11] in order to use the form. Also, for the form validation I used regex checking validation of alphabets and numbers.
 To understand how to validation is done on JavaScript I referred to [2].***/

## Event Description
This page in the application describes about an event that is been posted on the website. If a student who is looking for some workshops, events or any social meeting wishes to know more about the event. They can select a event and this webpage displays the students the exact details of the events. Such as the location of the event, the speaker, event date and time and a detailed description about the event. The students can also register to the event from this page by clicking on the register button. The students can also share the event in social media platform from the website like Facebook, Twitter, LinkedIn.
In this I have used an mdbootstrap API to display the maps on the page. The reason of using maps is to help the students to find out the exact location about the event. The user can navigate through the maps and reach their destination.

/***In this i have used Grid Layout[1] and GoogleMaps API[6] for setting the card layout of the page. 
And maps is used to show the location of the event. 
I have modified the API Keys and also added the feature of tracing the Geolocation of the user and finding the exact location of the individual. ***/
   

# Versioning
Have used [GitLab](https://git.cs.dal.ca/sreekumar/eventhub) for versioning. 

## References
[1]"Introduction", _Getbootstrap.com_, 2019. [Online]. Available: https://getbootstrap.com/docs/4.2/getting-started/introduction/. [Accessed: 09- Feb- 2019].
[2]"Validating multiple fields in a form", _Stack Overflow_, 2019. [Online]. Available: https://stackoverflow.com/questions/10856887/validating-multiple-fields-in-a-form. [Accessed: 09- Feb- 2019].
[3]"HTML Tutorial", _W3schools.com_, 2019. [Online]. Available: https://www.w3schools.com/html/. [Accessed: 09- Feb- 2019].
[4]"CSS Tutorial", _W3schools.com_, 2019. [Online]. Available: https://www.w3schools.com/css/default.asp. [Accessed: 09- Feb- 2019].
[5]"JavaScript Tutorial", _W3schools.com_, 2019. [Online]. Available: https://www.w3schools.com/js/. [Accessed: 09- Feb- 2019].
[6]"Theming Bootstrap", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.0/getting-started/theming/#maps-and-loops. [Accessed: 09- Feb- 2019].
[7]"Flaticon, the largest database of free vector icons", Flaticon, 2019. [Online]. Available: https://www.flaticon.com. [Accessed: 09- Feb- 2019].
[8]"Eventbrite", Eventbrite, 2019. [Online]. Available: https://www.eventbrite.ca/. [Accessed: 09- Feb- 2019].
[9]" Sublime Text", Sublimetext.com, 2019. [Online]. Available: https://www.sublimetext.com/3. [Accessed: 09- Feb- 2019].
[10]"Navbar", Getbootstrap.com, 2019. [Online]. Available: https://getbootstrap.com/docs/4.2/components/navbar/. [Accessed: 09- Feb- 2019].
[11]"HTML Forms", W3schools.com, 2019. [Online]. Available: https://www.w3schools.com/html/html_forms.asp. [Accessed: 09- Feb- 2019].
