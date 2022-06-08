let e = new PIXI.Application({ width: innerWidth, height: innerHeight });
document.body.appendChild(e.view);

let sprite = PIXI.Sprite.from('./sprites/brick0.png');
e.stage.addChild(sprite);

const sprites = {};

const loader = new PIXI.Loader();

loader.add("./sprites/brick0.png").load(() => {
  sprite.wall = new PIXI.TilingSprite(PIXI.Texture.from("brick0.png"));
});
