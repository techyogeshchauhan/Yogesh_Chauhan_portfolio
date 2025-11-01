function Footer() {
  try {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <footer className="bg-gradient-to-b from-[var(--background-dark)] to-[var(--primary-color)] border-t border-[var(--border-color)]" data-name="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-tertiary)] flex items-center justify-center">
                  <span className="text-white font-bold text-xl" style={{fontFamily: 'var(--font-logo)'}}>YC</span>
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]" style={{fontFamily: 'var(--font-heading)'}}>
                  Yogesh Chauhan
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] mb-6 leading-relaxed max-w-md" style={{fontFamily: 'var(--font-body)'}}>
                AI & Data Science Enthusiast crafting intelligent solutions through Machine Learning, Computer Vision, and innovative technology.
              </p>
              <div className="flex gap-3">
                {[
                  { href: "mailto:yogesh.chauhan.ai@gmail.com", icon: "mail" },
                  { href: "https://www.linkedin.com/in/yogesh-chauhan-40650523b/", icon: "linkedin" },
                  { href: "https://github.com/techyogeshchauhan", icon: "github" },
                  { href: "https://x.com/yogesh_chau_mca", icon: "twitter" }
                ].map((link, idx) => (
                  <a 
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-[var(--background-card)] border border-[var(--border-color)] rounded-xl flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:scale-110 transition-all duration-300"
                  >
                    <div className={`icon-${link.icon} text-lg`}></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[var(--text-primary)] font-bold mb-4 text-lg" style={{fontFamily: 'var(--font-heading)'}}>
                Quick Links
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" },
                  { label: "Projects", id: "projects" },
                  { label: "Contact", id: "contact" }
                ].map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-colors text-left"
                    style={{fontFamily: 'var(--font-body)'}}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[var(--text-primary)] font-bold mb-4 text-lg" style={{fontFamily: 'var(--font-heading)'}}>
                Get In Touch
              </h4>
              <div className="space-y-3 text-[var(--text-secondary)]" style={{fontFamily: 'var(--font-body)'}}>
                <a href="mailto:yogesh.chauhan.ai@gmail.com" className="flex items-center gap-2 hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-mail text-sm"></div>
                  <span className="text-sm">yogesh.chauhan.ai@gmail.com</span>
                </a>
                <a href="tel:+918004116115" className="flex items-center gap-2 hover:text-[var(--accent-color)] transition-colors">
                  <div className="icon-phone text-sm"></div>
                  <span className="text-sm">+91 8004116115</span>
                </a>
                <div className="flex items-center gap-2">
                  <div className="icon-map-pin text-sm"></div>
                  <span className="text-sm">Haridwar, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--border-color)] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-[var(--text-secondary)] text-sm" style={{fontFamily: 'var(--font-body)'}}>
                © {currentYear} Yogesh Chauhan. All rights reserved.
              </div>
              <button 
                onClick={scrollToTop}
                className="px-6 py-3 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
                style={{fontFamily: 'var(--font-body)'}}
              >
                <div className="icon-arrow-up"></div>
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}

export default Footer;
