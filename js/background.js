class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;


        this.image = new Image();
        this.image.src = "./images/empty-background-nature-scenery_1308-32310.jpg"
        this.image1 = new Image();
        this.image1.src = "./images/imagen-atardecer.png"
        this.image2 = new Image();
        this.image2.src = "./images/image-anochecer.png"

        this.posX = 0;
        this.posY = 0;


        this.vx = 4;
    }

    draw(framesCounter) {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height)
    }

    move() {
        this.posX -= this.vx;

        if (this.posX <= -this.width) this.posX = 0;
    }

}