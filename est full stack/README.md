# Responsive Registration Form

Files:

- `form.html` — responsive registration form (HTML + small client-side validation)
- `styles.css` — mobile-first CSS with media queries

Preview:

1. Open `form.html` directly in your browser (double-click the file).
2. Or serve the folder locally and visit `http://localhost:8000/form.html`:

```powershell
# from the project folder (PowerShell)
python -m http.server 8000
# then open http://localhost:8000/form.html
```

Notes:

- The form includes a JavaScript snippet that validates password confirmation and prevents real submission (demo). Remove the `preventDefault` in the script to allow posting to a server.
- The layout is mobile-first and switches to a two-column grid on wider screens.
