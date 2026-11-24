# LandHub - Land Buying and Selling System

A static Web Technology Lab Task 1 project for a multi-user land marketplace.

## Pages

- `commonui/index.html` - homepage
- `commonui/login.html` - shared login with user category selection
- `commonui/register.html` - role registration selector
- `admin/register.html` and `admin/profile.html` - administration registration and workspace
- `customer/register.html` and `customer/profile.html` - customer registration and workspace
- `manager/register.html` and `manager/profile.html` - manager registration and workspace
- `seller/register.html` and `seller/profile.html` - seller registration and workspace

## Lab Task 2 - CSS design

The interface uses external CSS with element, class, and ID-compatible selectors, the box model, flexbox, grid, pseudo-classes, hover transitions, responsive media queries, sticky/fixed positioning, z-index, overflow, background styling, and text styling.

Separate member/role stylesheets are located in:

- `admin/css/admin.css`
- `customer/css/customer.css`
- `manager/css/manager.css`
- `seller/css/seller.css`

The shared stylesheet is `commonui/css/style.css`.

## Lab Task 3 - JavaScript validation

The login form validates email format, password length and number, and user category selection. Each of the four registration pages has a separate JavaScript file under its role `js` folder.

- `commonui/js/login.js` - login validation
- `customer/js/register.js` - customer rules
- `seller/js/register.js` - seller rules
- `manager/js/register.js` - manager rules
- `admin/js/register.js` - administrator rules

Validation uses variables, functions, submit events, DOM access, conditions, regular expressions, `preventDefault()`, and `innerHTML` messages.

## Run locally

Open `commonui/index.html` directly, or serve the project folder with:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/commonui/index.html`.