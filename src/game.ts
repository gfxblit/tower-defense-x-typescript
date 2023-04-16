import * as Phaser from 'phaser';

export default class Game extends Phaser.Scene {
    constructor() {
        super('main')
    }

    preload() {
        this.load.tilemapTiledJSON('td_tilemap', 'assets/td-map.json')
        this.load.spritesheet(
            'td_tiles',
            'assets/towerDefense_tilesheet.png',
            { frameWidth: 64, frameHeight: 64 }
        )
    }

    create() {
        const map = this.make.tilemap({ key: 'td_tilemap' })
        const tileset = map.addTilesetImage('td', 'td_tiles')
        const mapLayer = map.createLayer('world', tileset, 0, 0)

    }
}

new Phaser.Game({
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: Game
});
