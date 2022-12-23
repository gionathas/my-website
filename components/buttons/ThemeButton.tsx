import { useTheme } from 'next-themes'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      aria-label="toggle-dark-mode"
      className={`p-2 text-black rounded ${
        isDark ? 'bg-slate-700/70' : 'bg-yellow-300'
      } `}
      onClick={toggleTheme}
    >
      {isDark ? (
        <MdDarkMode className="w-5 h-5 fill-blue-500" />
      ) : (
        <MdOutlineLightMode className="w-5 h-5" />
      )}
    </button>
  )
}

export default ThemeButton
