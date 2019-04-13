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

    uuid: number;
    CONTENT: string;
    SENTIMENT: number;
}