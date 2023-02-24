import { ref } from 'vue'

export default function themeSwitch() {
  const app = document.getElementById('app-content')

  if (localStorage.getItem('current-theme') === 'light') {
    toggleClassName(app, 'light', 'dark')
    setToggleIconState(true)
    setCurrentTheme('dark')
  } else {
    toggleClassName(app, 'dark', 'light')
    setToggleIconState(false)
    setCurrentTheme('light')
  }
}

// Handle initial theme when localStorage is empty
export const toggledTheme = ref(localStorage.getItem('current-theme'))

export function loadInitialThemeState() {
  if (localStorage.getItem('current-theme') == null) {
    setCurrentTheme('light')
    toggledTheme.value = localStorage.getItem('current-theme')
  }
}

function toggleClassName(el, currentClassName, newClassName) {
  el.classList.remove(currentClassName)
  el.classList.add(newClassName)
}

// Handle initial icon when localStorage is empty
export function loadInitialIconState() {
  localStorage.getItem('toggle-state') === null ?? setToggleIconState(false)
}

// Set icon to match current theme
export const isToggled = ref(JSON.parse(localStorage.getItem('toggle-state')))

export function setToggleIconState(status) {
  localStorage.setItem('toggle-state', status)
  isToggled.value = JSON.parse(localStorage.getItem('toggle-state'))
}

// Set theme between light and dark
export function setCurrentTheme(theme) {
  localStorage.setItem('current-theme', theme)
}