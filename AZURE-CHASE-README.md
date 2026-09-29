# Azure bird and butterfly website

The supplied Azure bird and butterfly replace the old hummingbird in both desktop and mobile scenes. The original scroll position and rotation tracks are retained. All four interactive flower models are removed; flowers in the background photograph remain part of that image.

Move the pointer to influence the chase. Click or tap to make the butterfly dart ahead. The supplied wing animations play together, and the bird follows the butterfly with a gentle delay. Local offsets are reduced for small screens.

Run START-WEBSITE.cmd for a local preview. Deploy the folder contents with the included GitHub Pages workflow as before.

The supplied 236 MB GLB was reduced to 33 MB using its textured preview meshes, removing duplicate meshes and resizing textures to 1024 pixels. No external CDN dependencies were added.

Primary edits: scenes/*.json, scripts/azure-chase.js, scripts/bird-preloader.js, index.html, assets/scene/azure-chase.glb. Four existing demo cursor SVGs were copied into the assets location that the embedded demo requests.

Validation: JavaScript syntax checks and desktop/mobile browser checks at five scroll positions. Source and test artifacts remain in the working folder; this ZIP contains the website files only.

## Pursuit refinement
Models enlarged approximately 25%; wing animation and ambient motion run at 72% speed. Butterfly evasive arcs and forward bursts lead a delayed bird trajectory, with steering, bank, varying separation and offset wingbeats. Model colours are unchanged.
