function Hero() {
  try {
    const [typedText, setTypedText] = React.useState('');
    const textOptions = [
      "Data Scientist",
      "ML Engineer",
      "AI Researcher",
      "Computer Vision Expert"
    ];
    const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
    
    React.useEffect(() => {
      let currentText = textOptions[currentTextIndex];
      let isTyping = true;
      let currentIndex = 0;
      let timeout;
      
      const typeText = () => {
        if (isTyping) {
          if (currentIndex <= currentText.length) {
            setTypedText(currentText.substring(0, currentIndex));
            currentIndex++;
            timeout = setTimeout(typeText, 100);
          } else {
            isTyping = false;
            timeout = setTimeout(typeText, 2000);
          }
        } else {
          if (currentIndex > 0) {
            currentIndex--;
            setTypedText(currentText.substring(0, currentIndex));
            timeout = setTimeout(typeText, 50);
          } else {
            isTyping = true;
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
            currentText = textOptions[(currentTextIndex + 1) % textOptions.length];
            timeout = setTimeout(typeText, 500);
          }
        }
      };
      
      timeout = setTimeout(typeText, 500);
      return () => clearTimeout(timeout);
    }, [currentTextIndex]);
    
    return (
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[var(--primary-color)] via-[var(--background-dark)] to-[var(--primary-color)] pt-24"
        data-name="hero"
        data-file="components/Hero.js"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-color)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--accent-tertiary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[var(--accent-secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[var(--accent-color)]/10 to-[var(--accent-tertiary)]/10 border border-[var(--accent-color)]/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-[var(--accent-color)] rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-[var(--accent-color)]" style={{fontFamily: 'var(--font-body)'}}>
                  Available for Data Science Projects
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight" style={{fontFamily: 'var(--font-heading)'}}>
                <span className="text-[var(--text-primary)]">Hi, I'm</span>
                <br/>
                <span className="bg-gradient-to-r from-[var(--accent-color)] via-[var(--accent-tertiary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
                  Yogesh Chauhan
                </span>
              </h1>
              
              <div className="text-2xl sm:text-3xl mb-6 font-semibold h-12 flex items-center" style={{fontFamily: 'var(--font-body)'}}>
                <span className="text-[var(--accent-secondary)]">{typedText}</span>
                <span className="animate-pulse text-[var(--accent-color)] ml-1">|</span>
              </div>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed max-w-xl" style={{fontFamily: 'var(--font-body)'}}>
                Transforming data into intelligent solutions through <span className="font-semibold text-[var(--accent-color)]">Machine Learning</span>, 
                <span className="font-semibold text-[var(--accent-tertiary)]"> Computer Vision</span>, and 
                <span className="font-semibold text-[var(--accent-secondary)]"> AI Innovation</span>.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  style={{fontFamily: 'var(--font-body)'}}>
                  <span>Let's Connect</span>
                  <div className="icon-arrow-right"></div>
                </button>
                <button
                  onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-4 bg-[var(--background-card)] border-2 border-[var(--accent-color)] text-[var(--accent-color)] font-semibold rounded-xl hover:bg-[var(--accent-color)] hover:text-white transition-all duration-300 flex items-center gap-2"
                  style={{fontFamily: 'var(--font-body)'}}>
                  <span>View Projects</span>
                  <div className="icon-folder"></div>
                </button>
              </div>
              
              <div className="flex gap-4 mb-10">
                {[
                  { href: "https://github.com/techyogeshchauhan", icon: "github" },
                  { href: "https://linkedin.com/in/yogesh-chauhan-40650523b", icon: "linkedin" },
                  { href: "https://x.com/yogesh_chau_mca", icon: "twitter" }
                ].map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-[var(--background-card)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all duration-300"
                  >
                    <div className={`icon-${social.icon} text-xl`}></div>
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "15+", label: "ML Models" },
                  { value: "50+", label: "Projects" },
                  { value: "3+", label: "Years Exp" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-[var(--background-card)] border border-[var(--border-color)] rounded-xl hover:border-[var(--accent-color)] hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] bg-clip-text text-transparent mb-1" style={{fontFamily: 'var(--font-heading)'}}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]" style={{fontFamily: 'var(--font-body)'}}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center" data-aos="fade-left">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-[var(--accent-color)] shadow-2xl relative">
                  <img
                    src="/trickle/assets/yogu2.jpg"
                    alt="Yogesh Chauhan"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/20 to-transparent"></div>
                </div>
                
                {/* Floating badges */}
                {[
                  { icon: "brain", color: "accent-tertiary", position: "-top-4 -left-4" },
                  { icon: "code", color: "accent-color", position: "-top-4 -right-4" },
                  { icon: "database", color: "accent-secondary", position: "-bottom-4 -left-4" },
                  { icon: "chart-bar", color: "accent-color", position: "-bottom-4 -right-4" }
                ].map((badge, idx) => (
                  <div 
                    key={idx}
                    className={`absolute ${badge.position} w-16 h-16 bg-[var(--background-card)] border-2 border-[var(--${badge.color})] rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}
                    style={{animationDelay: `${idx * 0.2}s`}}
                  >
                    <div className={`icon-${badge.icon} text-2xl text-[var(--${badge.color})]`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
