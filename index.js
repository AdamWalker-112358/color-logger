

const logger = {
    defaultStyles: `
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 16px;
        color: royalblue;
    `,

    log: function (text = 'Hello from logger', styles = this.defaultStyles, ...texts) {
        console.log(`%c ${text}`, styles, ...texts);
    },

    style: function (color) {
        return `
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 16px;
        color:  ${color};
    `
    },

    magenta(text, ...texts) {
        const style = this.style('magenta')
        this.log(text, style, ...texts);
        
    },
    indigo(text, ...texts) {
        const style = this.style('indigo')
        this.log(text, style, ...texts);
        
    },
    red(text, ...texts) {
        const style = this.style('red')
        this.log(text, style, ...texts);
        
    },
    blue(text, ...texts) {
        const style = this.style('blue')
        this.log(text, style, ...texts);
        
    },
    green(text, ...texts) {
        const style = this.style('green');
        this.log(text, style, ...texts);
        
    },

    
   
}

logger.magenta('adam')
logger.green('adam')
logger.blue('adam')
logger.indigo('adam')
logger.red('adam')
