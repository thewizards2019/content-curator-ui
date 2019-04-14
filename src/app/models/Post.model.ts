export class Post {

    /*
    constructor(id: number, content: string, showMore: boolean){
        this.id = id;
        this.content = content;
    }
    */

    constructor(values: Object = {}){
        Object.assign(this, values);
    }

    UUID: string;
    CONTENT: string;
    SENTIMENT: string;
    PROFANITY: string;
    HIDE: boolean;
    exclude: boolean;
}