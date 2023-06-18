function talk(){
    var know = {
    "/github" : "See what Kind of Code I Write<a href='https://github.com/Shinjan-saha'>Click</a> ",
    "/name" : "Hi Shinjan Here",
    "/code-language" : " These are the Programmming Language I know:-C,C++,C#,Python,Java,",
    "/web-dev" : "I Know HTML,CSS,SASS,Javascript,ReactJS,NodeJS ",
    "/college" : "Techno Main salt Lake",
    "/school" : "Aditya Academy Senior Secondary",
    "/IOT" :"Worked in Arduino See Some of my project here <a href='https://iot-website-mu.vercel.app/'>Click</a>",
    "/portfolio":"Visit My Portfolio Here:- <a href='https://portfolio-shinjan.vercel.app/'>Click</a>",
    "/gamedev":"Here is my game dev projects:- <a href='https://github.com/Shinjan-saha/Flappy-Bird-Game'>Click</a>",
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }