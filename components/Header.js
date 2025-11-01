function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    React.useEffect(() => {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        setIsDarkMode(savedMode === 'true');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
      }
    }, []);

    React.useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsMenuOpen(false);
    };

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[var(--background-card)] shadow-lg backdrop-blur-xl bg-opacity-90 py-3' 
            : 'bg-transparent py-4'
        }`}
        data-name="header" 
        data-file="components/Header.js"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo with gradient */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-tertiary)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'var(--font-logo)' }}>YC</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent-color)] to-[var(--accent-tertiary)] rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg lg:text-xl font-bold text-[var(--text-primary)] tracking-tight" style={{ fontFamily: 'var(--font-logo)' }}>
                  Yogesh Chauhan
                </div>
                <div className="text-xs text-[var(--accent-color)] font-medium tracking-wider">
                  AI & DATA SCIENCE
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'internship', label: 'Experience' },
                { id: 'projects', label: 'Projects' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="relative px-3 lg:px-4 py-2 text-sm lg:text-base text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-all duration-300 font-medium group"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              
              {/* Contact Button with gradient */}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="ml-2 px-5 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm lg:text-base"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Contact Me
              </button>
              
              {/* Dark Mode Toggle */}
              <button 
                onClick={toggleDarkMode} 
                className="ml-2 p-2.5 rounded-lg bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] hover:border-[var(--accent-color)] transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <div className="icon-sun text-lg"></div>
                ) : (
                  <div className="icon-moon text-lg"></div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button 
                onClick={toggleDarkMode} 
                className="p-2 rounded-lg bg-[var(--background-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--accent-color)] transition-all duration-300 shadow-sm"
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <div className="icon-sun text-lg"></div>
                ) : (
                  <div className="icon-moon text-lg"></div>
                )}
              </button>
              
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] text-white transition-all duration-300 hover:scale-110 shadow-md"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <div className="icon-x text-lg"></div>
                ) : (
                  <div className="icon-menu text-lg"></div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 px-2 bg-[var(--background-card)] rounded-xl border border-[var(--border-color)] shadow-lg backdrop-blur-xl">
              <div className="flex flex-col gap-2">
                {[
                  { id: 'home', label: 'Home', icon: 'home' },
                  { id: 'about', label: 'About', icon: 'user' },
                  { id: 'skills', label: 'Skills', icon: 'code' },
                  { id: 'internship', label: 'Experience', icon: 'briefcase' },
                  { id: 'projects', label: 'Projects', icon: 'folder' }
                ].map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gradient-to-r hover:from-[var(--accent-color)] hover:to-[var(--accent-tertiary)] text-[var(--text-primary)] hover:text-white transition-all duration-300 font-medium text-left group"
                    style={{ 
                      fontFamily: 'var(--font-body)',
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className={`icon-${item.icon} text-[var(--accent-color)] group-hover:text-white transition-colors`}></div>
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-tertiary)] text-white font-semibold mt-2 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <div className="icon-mail"></div>
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}

export default Header;
