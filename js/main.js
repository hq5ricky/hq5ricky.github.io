//main
let e = new PIXI.Application({
    width: innerWidth,
    height: innerHeight,
    transparency: true,
    antialias: true
 });

 document.body.appendChild(e.view);

e.renderer.backgroundColor = 0x23395D;
e.renderer.view.style.position = 'absolute';

e.ticker.add(delta => animate(delta));

let keys = {};

function animate(delta){
  if(keys['87']){
    if(!player.playing){
      player.textures = playerSheet.north;
      player.play();
    }
    player.y -=5;
  }
  if(keys['83']){
    if(!player.playing){
      player.textures = playerSheet.south;
      player.play();
    }
    player.y +=5;
  }
  if(keys['65']){
    if(!player.playing){
      player.textures = playerSheet.west;
      player.play();
    }
    player.x -=5;
  }
  if(keys['68']){
    if(!player.playing){
      player.textures = playerSheet.east;
      player.play();
    }
    player.x +=5;
  }
}

let sprites = [];
let playerSheet = [];

const a = PIXI.Loader.shared;
a.baseUrl = "sprites";
a.add('floor1.png')
.add('brick0.png')
.add('charspritesheet.png');
let brick, floor, player;
let playersprite;

a.onComplete.add(setTextures);

function setTextures(){
  createPlayerSheet();
  createPlayer();
  brick = a.resources['brick0.png'].texture;
  floor = a.resources['floor1.png'].texture;
}

function createPlayerSheet(){
  ssheet = new PIXI.BaseTexture.from(a.resources['charspritesheet.png'].url);
  let w = 57;
  let h = 81;
  playerSheet["south"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(0, 0, w, h))];
  playerSheet["north"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(w, 0, w, h))];
  playerSheet["east"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(w * 2, 0, w, h))];
  playerSheet["west"] = [new PIXI.Texture(ssheet, new PIXI.Rectangle(w * 3, 0, w, h))];
}

function createPlayer(){
  player = new PIXI.AnimatedSprite(playerSheet.south);
  player.animationSpeed = 0.5;
  player.loop = false;
  player.x = innerWidth/2, player.y = innerHeight/2;
  e.stage.addChild(player);
  player.play();
}


a.load();
//, floor = PIXI.Texture.from('./sprites/floor1.png');



addEventListener('keydown', onKeyDown, false);
addEventListener('keyup', onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  keys[keyCode] = true;
}

function onKeyUp(event) {
  var keyCode = event.keyCode;
  keys[keyCode] = false;
}
