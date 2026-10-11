# Kumar Sanu & Chanchal Kumari Thakur — Wedding Website

A mobile-friendly static wedding invitation inspired by the reference website. It includes an animated invitation opening, a live countdown, event details, Google Maps directions, a photo-gallery modal, and a music player.

## Files
- `index.html` — page content and links
- `style.css` — styling and animations
- `script.js` — opening interaction, countdown, gallery modal
- `assets/` — add your music file and optional images here

## Before publishing
1. **Photos:** The gallery currently uses elegant decorative placeholders, not actual couple photos. To use your photos, add image files to `assets/` and replace each `<button class="photo ...">` in `index.html` with an image-backed card, for example:
   ```html
   <button class="photo photo-one" data-caption="Our engagement">
     <img src="assets/photo-1.jpg" alt="Kumar Sanu and Chanchal">
   </button>
   ```
   Then add `.photo img { width:100%; height:100%; object-fit:cover; display:block; }` to `style.css`. Repeat for photo-2.jpg and photo-3.jpg. Keep only photos you have permission to share.
2. **Music:** Put a music file you own or have permission to use at `assets/wedding-song.mp3`. If you leave it out, remove the audio player or it will simply have no track to play. Music does not autoplay because mobile browsers generally require a user tap.
3. **Event timings:** The wedding ceremony is listed on 11 December 2026; exact time and any Haldi/Mehendi/Sangeet/Reception dates and times have intentionally not been invented. Edit the event card in `index.html` when confirmed.
4. **Venue:** The directions button opens a Google Maps search for “Shubh Knights, Sakri Road, Darbhanga, Bihar 846004.” Verify the pin and venue spelling before sharing.
5. **Names/date:** Names and date are already filled in. The countdown targets midnight at the start of 11 December 2026, India time. If you want it to count down to the ceremony hour, change the ISO date in `script.js` to the confirmed time, e.g. `2026-12-11T18:00:00+05:30`.

## Preview on your computer
- Extract the ZIP.
- Open `index.html` in Chrome, Firefox, Edge, or Safari. Most features work directly.
- For a local web server, open a terminal in the folder and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## Publish free with GitHub Pages
1. Sign in or create an account at https://github.com/.
2. Create a **new public repository** named `sanu-chanchal-wedding` (or another name you prefer).
3. Upload `index.html`, `style.css`, `script.js`, the `assets` folder, and this README. Upload the *contents* of this folder, not the ZIP itself.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**; choose branch `main` and folder `/(root)`, then Save.
6. Wait for the Pages deployment to finish. Your link will usually look like:
   `https://YOUR-GITHUB-USERNAME.github.io/sanu-chanchal-wedding/`
   Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. The URL will not work until you publish it.
7. Open the published URL on your phone and test the buttons, countdown, map, photos and music.

Official help: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Share on WhatsApp
Once published, copy the actual Pages URL and send it to guests. The page also has a WhatsApp share button, but it shares the invitation text; after publishing, update its message in `index.html` to include your live website URL.

## Notes
- This is a static website; there is no database or automatic RSVP collection.
- Fonts load from Google Fonts when internet is available; fallback fonts are included.
- Do not share private family contact details publicly unless you want them visible to anyone with the link.


## Wedding details currently included
- Matkor: Wednesday, 9 December 2026 at Satyalya Niwas, Laxmi Nagar, Ruhelaganj, Darbhanga, Bihar.
- Haldi & Mehendi: Thursday, 10 December 2026 at Satyalya Niwas.
- Wedding: Friday, 11 December 2026 at Shubh Knights, Sakri Road, Bhangwara, Darbhanga, Bihar 846004. Baraat departure from the residence is listed as 7:00 PM; the ceremony time is intentionally not guessed.
- Reception: Sunday, 13 December 2026 at Satyalya Niwas; timing not specified.
- Family names are displayed as provided by the family.
- Contact number displayed: 7831030267.

Remember to upload all three main files to the repository root when updating GitHub Pages. The gallery is still decorative until real photos are added, and the music file is not included.
