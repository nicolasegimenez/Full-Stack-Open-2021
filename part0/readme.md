# Part 0 Full Stack Open 2021

##Gimenez Nicolas Emanuel

## 0.4)

<img src='https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgUGFydCAwIEZ1bGwgU3RhY2sgT3BlbiAyMDIxCmJyb3dzZXItPnNlcnZlcjogSFRUUCBHRVQgaHR0cHM6Ly9zdHVkaWVzLmNzLmhlbHNpbmtpLmZpL2V4YW1wbGVhcHAvbm90ZXMKbm90ZSByaWdodCBvZiAAUQcKU3RhcnQgQ2FsbGJhY2sgdG8gdGhlIEFQSQplbmQgbm90ZQoAdAYtLT4AgQUHOiBIVE1MLWNvZGUAWkVtYWluLmNzcwBWEwASCQAfSWoAThlqACBGZGF0YS5qc29uAIIlE2FwcGxpY2F0aW9uL2pzb24gW3sgY29udGVudDogIkhUTUwgaXMgZWFzeSIsIGRhdGU6ICIyMDE5LTA1LTIzIiB9LCAuLi5dAINFBmxlZgCDRQUAhBMGCkZpcnN0IFJlc3BvbnNlIGRhdGEgSnNvbiBmcm9tAINQBQAiBwCDPhpmYXZpY29uLmljbwoAhGIXUE9TAIRNLWV3XwCEPwUAhGgVIAogU2VuZCBmAIE2BXVzZXIAhGwFOiB0d2l0dGVyLmNvbS9uaWNvYXJrYW5vAIR3GwCFBwoAggcUUmVsb2FkIGFsbACFWAVwYWdlICh3aXRoIGNkbiBvbmx5AIVwBW5ld18AgjIFY2hhbmdlKQCFeAoAg0qCHACIQBcAiDkFZXcgcGV0aXRpb24gZm9yAIUPBgCCWAZzAIhXCSAAhgUkAIVfFCAKAIYyDQCEHxwAhkMMMjEtMDYtMjkAhkUKAIMmQgCGLgwAhjke&s=modern-blue'></img>

```
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
```

## 0.5)
<img src='https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgUGFydCAwLjUgRnVsbCBTdGFjayBPcGVuIDIwMjEKYnJvd3Nlci0-c2VydmVyOiBIVFRQIEdFVCBodHRwczovL3N0dWRpZXMuY3MuaGVsc2lua2kuZmkvZXhhbXBsZWFwcC9zcGEKbm90ZSByaWdodCBvZiAATwcKU3RhcnQgQ2FsbGJhY2sgdG8gdGhlIFdlYmFwcAplbmQgbm90ZQoAdQYtLT4AgQYHOiBIVE1MLWNvZGUAUgZsZWYAUgUAgR4GClJlc3BvbnNlIFNQQSBwYWdlAEEKAIELRG1haW4uY3NzAIEFEwASCQCBcEcuagBSFAASBwCBWiFKYXZhc2NyaXB0AIEzU2RhdGEuanNvbgCDDBNhcHBsaWNhdGlvbi9qc29uIFt7IGNvbnRlbnQ6ICJIVE1MIGlzIGVhc3kiLCBkYXRlOiAiMjAxOS0wNS0yMyIgfSwgLi4uXQCDSBVGaXJzdCAAg1oJZGF0YSBKc29uIGZyb20AhDoFAIN_BwCEJRpmYXZpY29uLmljbwoK&s=modern-blue'></img>

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
note right of browser
Start Callback to the Webapp
end note
server-->browser: HTML-code
note left of server
Response SPA page
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js
note left of server
Response SPA Javascript page
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: application/json [{ content: "HTML is easy", date: "2019-05-23" }, ...]
note left of server
First Response data Json from the server
end note
server-->browser:favicon.ico
```
## 0.6)
<img src="https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgUGFydCAwLjUgRnVsbCBTdGFjayBPcGVuIDIwMjEKYnJvd3Nlci0-c2VydmVyOiBIVFRQIEdFVCBodHRwczovL3N0dWRpZXMuY3MuaGVsc2lua2kuZmkvZXhhbXBsZWFwcC9zcGEKbm90ZSByaWdodCBvZiAATwcKU3RhcnQgQ2FsbGJhY2sgdG8gdGhlIFdlYmFwcAplbmQgbm90ZQoAdQYtLT4AgQYHOiBIVE1MLWNvZGUAUgZsZWYAUgUAgR4GClJlc3BvbnNlIFNQQSBwYWdlAEEKAIELRG1haW4uY3NzAIEFEwASCQCBcEcuagBSFAASBwCBWiFKYXZhc2NyaXB0AIEzU2RhdGEuanNvbgCDDBNhcHBsaWNhdGlvbi9qc29uIFt7IGNvbnRlbnQ6ICJIVE1MIGlzIGVhc3kiLCBkYXRlOiAiMjAxOS0wNS0yMyIgfSwgLi4uXQCDSBVGaXJzdCAAg1oJZGF0YSBKc29uIGZyb20AhDoFAIN_BwCEJRpmYXZpY29uLmljbwCFSxUAhTAxbmV3X25vdGVfAIVQGkZvbGxvdyBNZSBvbiBUd2l0dGVyIEBuaWNvYXJrYW5vAIVeECAtLT4Ahh8IOgCCQBA7IGNoYXJzZXQ9dXRmLTgAhWcedGhlIG5ldwCCJQUAgysGAIZRCCAK&s=modern-blue"></img>

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
note right of browser
Start Callback to the Webapp
end note
server-->browser: HTML-code
note left of server
Response SPA page
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js
note left of server
Response SPA Javascript page
end note
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: application/json [{ content: "HTML is easy", date: "2019-05-23" }, ...]
note left of server
First Response data Json from the server
end note
server-->browser:favicon.ico
browser->server: HTTTP GET https://studies.cs.helsinki.fi/exampleapp/new_note_spa
note right of browser
Follow Me on Twitter @nicoarkano
end note
server --> browser:application/json; charset=utf-8
note left of server
Response the new data.json
end note 
