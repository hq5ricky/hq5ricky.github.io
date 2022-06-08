let e = new PIXI.Application({ width: innerWidth, height: innerHeight });
document.body.appendChild(e.view);

//let sprite = PIXI.Sprite.from('./sprites/brick0.png');

const sprites = {};

const loader = new PIXI.Loader();
let a = new PIXI.Container;

loader.add("./sprites/brick0.png").load(() => {
  sprite.wall = new PIXI.TilingSprite(PIXI.Texture.from("brick0.png")), this.wall.width = 100, this.wall.height = 100;
});
