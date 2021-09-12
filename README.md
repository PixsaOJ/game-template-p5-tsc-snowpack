# Template for P5JS, Snowpack, TypeScript

This project uses P5js in instance mode. separate game logic loop and draw loop for accurate performance.

## Features

1. Separate loop allows to fix collision skipping with objects.
2. Using class that extends `EventEmitter` so it can alert things like: "Hello box collided!" or "Game is paused now".
3. Other than that, i have type definitions setup, config, and global variables across the files.
4. Not using Physics engine, instead we use use `Collider2D` just to get collisions, because its a smaller package and honestly, we have everything else in P5js.
5. Respecting desired aspect ratio and game resolution option