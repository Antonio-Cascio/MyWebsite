function About() {
    return (
      
      
      
      <section style={{color: "black", backgroundColor: "white", padding: "10px", borderRadius: "10px"}}> 
        <h2>About Me</h2>
        <p>I’m a developer based in Wyckoff, NJ. I'm currently a student at Villanova University, where I'm pursuing a Bachelor's degree in Computer Science. 
            I'm interested in software development, and I'm always looking for new opportunities and collaborations.
        </p>
      <div>
        <button className="skill-button" onClick={() => {
          window.open("images/Antonio-Cascio-Resume.pdf", "_blank");
        }}> 
          <p>Download Resume</p>
        </button>
      </div>
      </section>
    );
  }
  
  export default About;