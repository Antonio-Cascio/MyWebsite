# ESLint Setup Guide

## What is ESLint?

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. It's configured for your React website project.

## Files Created

1. **`.eslintrc.js`** - Main ESLint configuration file
2. **`.eslintignore`** - Files and directories to ignore during linting
3. **Updated `package.json`** - Added ESLint scripts

## Available Scripts

```bash
# Check for linting issues
npm run lint

# Auto-fix issues that can be automatically resolved
npm run lint:fix

# Check for linting issues with zero tolerance for warnings
npm run lint:check
```

## Current Configuration

### Environment Support
- Browser (for DOM APIs)
- ES2021 (latest JavaScript features)
- Node.js (for build tools)
- Jest (for testing)

### Extensions Used
- `eslint:recommended` - Core ESLint rules
- `plugin:react/recommended` - React-specific rules
- `plugin:jsx-a11y/recommended` - Accessibility rules
- `react-app` - Create React App defaults
- `react-app/jest` - Jest testing rules

### Key Rules Configured

#### React Rules
- ✅ `react/react-in-jsx-scope: off` - Not needed in React 17+
- ⚠️ `react/prop-types: warn` - Warn about missing prop types
- ⚠️ `react/display-name: warn` - Warn about missing component names
- ⚠️ `react/no-unescaped-entities: warn` - Warn about unescaped quotes/apostrophes

#### Code Style Rules
- ⚠️ `indent: 4` - Use 4 spaces for indentation (matching your current code)
- ⚠️ `quotes: single` - Prefer single quotes
- ⚠️ `semi: always` - Always use semicolons
- ⚠️ `comma-dangle: always-multiline` - Trailing commas on multiline objects/arrays
- ⚠️ `no-trailing-spaces: warn` - No trailing whitespace
- ⚠️ `eol-last: warn` - Newline at end of files

#### Accessibility Rules
- ❌ `jsx-a11y/click-events-have-key-events` - Click handlers need keyboard support
- ❌ `jsx-a11y/no-static-element-interactions` - Interactive elements need proper roles
- ⚠️ `jsx-a11y/alt-text` - Images need alt text
- ⚠️ `jsx-a11y/anchor-is-valid` - Links should be valid

## Current Issues in Your Codebase

After running `npm run lint:fix`, you have:

### 23 Errors (Accessibility Issues)
These are in files like:
- `src/App.js` - Click handlers on div elements
- `src/Components/Skills.js` - Click handlers on div elements  
- `src/Components/WorkExperience.js` - Click handlers on div elements
- `src/Components/PreviewVideo.js` - Video missing captions

### 14 Warnings
- Unused `navigate` variables in several components
- Unescaped apostrophes in text content

## How to Fix Common Issues

### 1. Accessibility Issues (Click Handlers)
Instead of:
```jsx
<div onClick={handleClick}>Click me</div>
```

Use:
```jsx
<div 
  onClick={handleClick}
  onKeyDown={handleKeyDown}
  role="button"
  tabIndex={0}
>
  Click me
</div>
```

Or use a proper button:
```jsx
<button onClick={handleClick}>Click me</button>
```

### 2. Unused Variables
Remove unused imports or variables:
```jsx
// Remove this line if navigate is not used
const navigate = useNavigate();
```

### 3. Unescaped Entities
Replace apostrophes:
```jsx
// Instead of: Don't
// Use: Don&apos;t or Don't
```

### 4. Video Captions
Add captions to video elements:
```jsx
<video>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srcLang="en" label="English" />
</video>
```

## IDE Integration

Most IDEs can show ESLint errors in real-time:

### VS Code
Install the "ESLint" extension to see issues highlighted in your editor.

### Other IDEs
Check your IDE's documentation for ESLint integration.

## Customizing Rules

To modify rules, edit `.eslintrc.js`:

```javascript
rules: {
  // Change from warning to error
  'no-unused-vars': 'error',
  
  // Disable a rule
  'react/prop-types': 'off',
  
  // Add custom rule
  'my-custom-rule': 'warn'
}
```

## Ignoring Files

Add files/directories to `.eslintignore`:
```
# Ignore specific files
src/legacy-code.js

# Ignore entire directories
temp/
old-builds/
```

## Ignoring Specific Lines

```javascript
// eslint-disable-next-line no-unused-vars
const unusedVariable = 'value';

// eslint-disable-line react/no-unescaped-entities
Don't worry about this apostrophe
```

## Best Practices

1. **Run linting before commits** - Consider adding to pre-commit hooks
2. **Fix errors immediately** - Don't let them accumulate
3. **Use auto-fix when possible** - `npm run lint:fix` handles many issues
4. **Address accessibility issues** - These improve user experience
5. **Keep configuration consistent** - Update `.eslintrc.js` as your team grows

## Next Steps

1. Fix the 23 accessibility errors for better user experience
2. Remove unused variables to clean up the code
3. Consider adding pre-commit hooks to automatically lint before commits
4. Set up your IDE to show ESLint errors in real-time

Your ESLint setup is now complete and ready to help maintain code quality!
