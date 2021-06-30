title Part 0 Full Stack Open 2021
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
note right of browser
Start Callback to the API
end note
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: application/json [{ content: "HTML is easy", date: "2019-05-23" }, ...]
note left of server
First Response data Json from the server
end note
server-->browser:favicon.ico

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
note right of browser 
 Send first user note: twitter.com/nicoarkano
end note
server-->browser:HTML-code
note left of server
Reload all the page (with cdn only the new_data change)
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
note right of browser
Send new petition for data changes
end note 
server-->browser: application/json 
note left of server 
[{ content: "note: twitter.com/nicoarkano", date: "2021-06-29" }, ...]
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
server-->browser:favicon.ico

