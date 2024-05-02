const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260769355624";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_54_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDYxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICA1OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDkzLFxuICAgICAgICA0OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxQ2hISkVadmh5NGJabkdwaVNCY3NSb1Z4Y0RobGMxNDRkN0h3elExSTJNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfMDRCT0p5Z1RtcUZYLVBaVXNfZlZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0Yzk4YjhiLTI1ZWMtNDc4ZS04ZTZkLTEyY2ZiOWMxM2YwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDExNixcbiAgICAgIDE3LFxuICAgICAgMTIsXG4gICAgICAyNTEsXG4gICAgICAxMyxcbiAgICAgIDIyNSxcbiAgICAgIDIyOSxcbiAgICAgIDk4LFxuICAgICAgMTQxLFxuICAgICAgMTcwLFxuICAgICAgODEsXG4gICAgICAyMzEsXG4gICAgICAxOTEsXG4gICAgICAxMzksXG4gICAgICAyNTIsXG4gICAgICAxNzMsXG4gICAgICA1MCxcbiAgICAgIDIyNCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQxLFxuICAgICAgMTg0LFxuICAgICAgMTA2LFxuICAgICAgMjI0LFxuICAgICAgNSxcbiAgICAgIDEwMyxcbiAgICAgIDIxNCxcbiAgICAgIDIyOSxcbiAgICAgIDMzLFxuICAgICAgMjEwLFxuICAgICAgMTQsXG4gICAgICAzMixcbiAgICAgIDIxMixcbiAgICAgIDIyNCxcbiAgICAgIDIxMixcbiAgICAgIDE3NyxcbiAgICAgIDEsXG4gICAgICA2LFxuICAgICAgMjQ4LFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMUhCNEhXV1RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDc2OTM1NTYyNDo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImNodWkgTXNlbGFcIixcbiAgICBcImxpZFwiOiBcIjkxODk1MTcwNjUwMzQ5OjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ttWWphZ0NFT2ZYeXJFR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM3o2S1VKOXBpYU5ibEM2QmRpYlNWaGh0UndGcDc1Rm93cjQyQlBEN1dsQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ6a3Y4aXYrRDRJOGRmQmJTWmhyNXFGazBmcHBac0FmQnZYLzkreXhReG5OSlc5Z3JYOTROOHh5eUdhMXY0Z2h1amRVenp2QXpHQmdKY2tqV2hwck5Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0aWM1UFNCeTVEWnI5V2xrVUN1a0hNeXJ0dFF4Z2tZc0hpeXM5NXNJUGJsN1VzRzRBU3RjVkpDekYrN2FXcG81ZkpFK3RVdGNnMVE5QWU2YmFWMjZqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA3NjkzNTU2MjQ6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ1OTY4NDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "mselachui",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
