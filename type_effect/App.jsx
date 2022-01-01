<div className="home">
       <div className="home-intro">
           <h2>
               <div className="title">{state.title}</div>
           </h2>
           <div className="text">
               <Typewriter options = {{
                   autoStart : true,
                loop: true,
            strings : [
                "I'm a Youtube Channel.",
                "I'm a Web Developer",
                "I'm a Tech Enthusiast",
            ],
        }}/>
           </div>
           <div className="contact-me">
               <button className="button">Contact me</button>
           </div>
       </div>
       <div className="home-image">
           <img src="" alt="kjd"/>
       </div>
   </div>