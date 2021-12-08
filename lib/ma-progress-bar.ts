import DraftLog, { } from 'draftlog';

/**
 * 
 * Permet de créer une barre de progression sur la console
 * 
 *  - Example 
 * 
 *  let p = new ProgressBar();

    p.start('Starting download...');
    p.progress(2);

    setTimeout(() => {
        p.progress(3);
    }, 2000)
    setTimeout(() => {
        p.progress(100,'finished');
    }, 10000)
 *
 */
    
export class ProgressBar {

    static initDone :boolean = false
    constructor() {
       
    }
    private barLine: { (arg0: string): void; (message?: any, ...optionalParams: any[]): void; }| undefined;

    private _progressBar(progress: number, prefixMessage?:string) {
        // Make it 50 characters length
        var units = Math.round(progress / 2);
        if (!prefixMessage) {
            return '[' + '='.repeat(units) + ' '.repeat(50 - units) + '] ' + progress + '%'
        }
        return prefixMessage + ' [' + '='.repeat(units) + ' '.repeat(50 - units) + '] ' + progress + '%'
    }

    private example = (n: number) => {
        if (!this.barLine) {
            return;
        }
        this.barLine(this._progressBar(n))
        setTimeout(() => {
            //update('Hi, my name is Ivan!');
            if (n < 100) {
                n++;
                this.example(n);
            }
        }, 100)
    };

    /**
     * Example: p.start('Starting download...');
     * 
     * @param message 
     */
    public start(message: string,n?:number) {
        this.barLine = console.draft(message);
        if (n != undefined) {
            this.example(0);
        }
        return this;
    }

    /**
     * Affiche la progression 
     *  new ProgressBar().progress(100,'finished');
     * 
     * @param n     valeur de progression de [0-100]
     * @param prefixMessage?   N'importe quelle chaine 
     * @returns 
     */
    public progress(n:number, prefixMessage:string='') {
        if (!this.barLine) {
            return;
        }
        this.barLine(this._progressBar(n),prefixMessage);
    }
}

if (!ProgressBar.initDone) {
    ProgressBar.initDone = true;
    DraftLog(console);
}