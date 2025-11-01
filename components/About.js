function About() {
  try {
    return (
      <section
        id="about"
        className="section-padding bg-[var(--background-dark)]"
        data-name="about"
        data-file="components/About.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-5xl sm:text-6xl font-black mb-4" style={{fontFamily: 'var(--font-heading)'}}>
              <span className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto" style={{fontFamily: 'var(--font-body)'}}>
              Passionate about transforming complex data into actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold mb-6 text-[var(--text-primary)]" style={{fontFamily: 'var(--font-heading)'}}>
                My Journey
              </h3>
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                I'm an AI & Data Science enthusiast with a passion for building intelligent solutions. 
                My journey started with curiosity about how machines learn, and now I specialize in 
                creating AI-powered applications that solve real-world problems.
              </p>
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed" style={{fontFamily: 'var(--font-body)'}}>
                I work with cutting-edge technologies like Python, TensorFlow, OpenCV, and Flask to 
                build scalable machine learning models and computer vision systems.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Projects Completed", icon: "folder" },
                  { value: "3+", label: "Years Experience", icon: "calendar" }
                ].map((stat, idx) => (
                  <div key={idx} className="p-6 bg-[var(--background-card)] border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent-color)] hover:scale-105 transition-all duration-300">
                    <div className={`icon-${stat.icon} text-3xl text-[var(--accent-color)] mb-3`}></div>
                    <div className="text-4xl font-bold text-[var(--accent-color)] mb-2" style={{fontFamily: 'var(--font-heading)'}}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]" style={{fontFamily: 'var(--font-body)'}}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div data-aos="fade-left">
              <h3 className="text-3xl font-bold mb-6 text-[var(--text-primary)]" style={{fontFamily: 'var(--font-heading)'}}>
                What I Do
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "brain",
                    title: "AI & Machine Learning",
                    desc: "Building intelligent systems using deep learning, neural networks, and advanced ML algorithms",
                    color: "accent-color"
                  },
                  {
                    icon: "eye",
                    title: "Computer Vision",
                    desc: "Developing real-time object detection, image recognition, and video analysis solutions",
                    color: "accent-tertiary"
                  },
                  {
                    icon: "server",
                    title: "Backend Development",
                    desc: "Creating scalable APIs and server-side systems with Flask, MongoDB, and cloud technologies",
                    color: "accent-secondary"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="p-6 bg-[var(--background-card)] border border-[var(--border-color)] rounded-2xl hover:border-[var(--accent-color)] hover:scale-105 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br from-[var(--${service.color})] to-[var(--accent-tertiary)] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className={`icon-${service.icon} text-2xl text-white`}></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2" style={{fontFamily: 'var(--font-heading)'}}>
                          {service.title}
                        </h4>
                        <p className="text-[var(--text-secondary)]" style={{fontFamily: 'var(--font-body)'}}>
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('About component error:', error);
    return null;
  }
}
